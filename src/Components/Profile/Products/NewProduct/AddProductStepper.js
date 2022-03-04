import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CategorySelector from "./SelectCategory/CategorySelector";
import ImageSelector from "./SelectCategory/ImageSelector";
import EasyCrop from "./SelectCategory/EasyCrop";
import getCroppedImg from "./SelectCategory/ImageUtility";
import {
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import ProductDetail from "./ProductDetail/ProductDetail";
import { ACCESS_TOKEN, API_BASE_URL } from "../../../../constants";
import axios from "axios";
import CommonDialog from "../../../Common/Dialog/CommonDialog";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Pick a Category", "Select a Picture", "Preview & Create"];
}

const minZoom = 0.4;
export default function AddProductStepper({ setOpen, setDialog }) {
  const classes = useStyles();

  const [category, setCategory] = useState({
    en: "Apple",
    zh: "蘋果",
  });
  console.log("categ", category);
  const [uploading, setUploading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    price: 123,
    img: "",
    localizations: {
      en: {
        localizedId: {
          id: 1,
          locale: "en",
        },
        name: "Dummy",
        category: "",
        unit: null,
        description: "Hello",
      },
      zh: {
        localizedId: {
          id: 2,
          locale: "zh",
        },
        name: "測試",
        category: "",
        unit: null,
        description: "描述",
      },
    },
  });
  console.log(">>>", newProduct);
  const [cropper, setCropper] = useState({
    imageSrc:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    crop: { x: 0, y: 0 },
    zoom: minZoom,
    aspect: 4 / 3,
    croppedAreaPixels: null,
    croppedImage: null,
  });
  const [errors, setErrors] = useState({});

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep == 2) {
      handleCroppedImage();
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const selectFromUpload = (e) => {
    setCropper((state) => ({
      ...state,
      imageSrc: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleChangeURL = (e) => {
    setCropper((state) => ({
      ...state,
      imageSrc: e.currentTarget.value,
    }));
  };

  const handleCroppedImage = async () => {
    console.log("handling cropped image");
    const croppedImage = await getCroppedImg(
      cropper.imageSrc,
      cropper.croppedAreaPixels
    );

    setCropper((state) => ({
      ...state,
      croppedImage,
    }));
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <CategorySelector category={category} setCategory={setCategory} />
        );
      case 1:
        return (
          <ImageSelector
            setCropper={setCropper}
            cropper={cropper}
            selectFromUpload={selectFromUpload}
            handleChangeURL={handleChangeURL}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <EasyCrop
            handleCroppedImage={handleCroppedImage}
            cropper={cropper}
            setCropper={setCropper}
          />
        );
      case 3:
        return (
          <ProductDetail
            uploading={uploading}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            handleSubmitNewProduct={handleSubmitNewProduct}
            cropper={cropper}
            setCropper={setCropper}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const handleSubmitNewProduct = (e) => {
    setUploading(true);
    e.preventDefault();
    newProduct.img = cropper.imageSrc;
    newProduct.localizations.en.category = category.en;
    newProduct.localizations.zh.category = category.zh;
    newProduct.localizations.en.localizedId.locale = "en";
    newProduct.localizations.zh.localizedId.locale = "zh";

    console.log("submitting...");

    console.log(newProduct);

    const headers = {
      "Content-Type": "application/json",
    };
    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers["Authorization"] = "Bearer " + localStorage.getItem(ACCESS_TOKEN);
    }

    let config = {
      headers: headers,
      method: "POST",
      url: API_BASE_URL + "/api/products/add",
      data: newProduct,
    };

    axios(config)
      .then((res) => {
        console.log("res", res);
        setUploading(false);
        setOpen(false);
        setDialog(state=>({
          open:true,
          message:"The product has been added successfully.",
          type:"success"
        }))
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container
      maxWidth={false}
      style={{ position: "relative", height: "100%" }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Container style={{ height: "100%" }}>
        {getStepContent(activeStep)}
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItem="center"
          style={{ position: "absolute", bottom: "1%", right: "1%" }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            <FormattedMessage id="newProduct.uploader.back.label" />
          </Button>

          {activeStep != 3 && (
            <Button disabled={uploading} onClick={handleNext}>
              {uploading && (
                <CircularProgress size={18} style={{ marginRight: "10px" }} />
              )}
              {activeStep === steps.length - 1 ? (
                <FormattedMessage id="newProduct.upload.label" />
              ) : (
                <FormattedMessage id="newProduct.uploader.next.label" />
              )}
            </Button>
          )}
        </Grid>
      </Container>
    </Container>
  );
}
