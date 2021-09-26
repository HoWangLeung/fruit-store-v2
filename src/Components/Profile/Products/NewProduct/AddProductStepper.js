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
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import ProductDetail from "./ProductDetail/ProductDetail";

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
export default function AddProductStepper() {
  const classes = useStyles();
  const [uploading,setUploading]=useState(false)
  const [cropper, setCropper] = useState({
    imageSrc: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
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
    console.log("handling cropped image")
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
        return <CategorySelector />;
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
            <ProductDetail     cropper={cropper}
            setCropper={setCropper}  />
          );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{ position: "relative", height: "100%"}}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Container style={{ height: "100%", }}>
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
        </Grid>
      </Container>
    </Container>
  );
}
