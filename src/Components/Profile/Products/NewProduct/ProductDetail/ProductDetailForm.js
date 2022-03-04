import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { countries } from "./Countries";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    // margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ProductDetailForm({
  handleSubmitNewProduct,
  newProduct,
  setNewProduct,
  uploading
}) {
  const classes = useStyles();
  console.log(countries);
  const handleChange = (e) => {
 
    let name = e.target.name;
    let value = e.target.value;
  
    if (name === "country") {

      console.log("country", name, value);
      setNewProduct((state) => ({
        ...state,
        localizations: {
          ...state.localizations,
          en: {
            ...state.localizations.en,
            
            country:value.English,
            countryCode:value.ISO2
          },
          zh:{
            ...state.localizations.zh,
            country:value.Hongkong,
            countryCode:value.ISO2

          }
        },
      }));
     
    }else{
      let id = e.target.id;
    console.log("handling", id, name, value);
    if (id !== "price" || name !== "img") {
      if (id.includes("_en")) {
        console.log("HELLO");
        setNewProduct((state) => ({
          ...state,
          localizations: {
            ...state.localizations,
            en: {
              ...state.localizations.en,
              [name]: value,
            },
          },
        }));
      }

      if (id.includes("_zh")) {
        setNewProduct((state) => ({
          ...state,
          localizations: {
            ...state.localizations,
            zh: {
              ...state.localizations.zh,
              [name]: value,
            },
          },
        }));
      }
    }
    if (id === "price") {
      console.log("else");
      console.log("else", name, value);
      setNewProduct((state) => ({
        ...state,
        [name]: value,
      }));
    }
    }
    




  };

  return (
    <form onSubmit={handleSubmitNewProduct}>
      <Grid container direction="row">
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="name"
            label={<FormattedMessage id="newProduct.name.label" />}
            id="productName_en"
            // autoComplete="current-password"
            onChange={handleChange}
             value={newProduct.localizations.en.name}
           
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="name"
            label="Chinese Name"
            id="productName_zh"
            // autoComplete="current-password"
            onChange={handleChange}
            value={newProduct.localizations.zh.name}
            // onBlur={handleBlur}
            // error={errors.password ? true : false}
            // helperText={errors.password}
          />
        </Grid>
      </Grid>

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="price"
        label={<FormattedMessage id="newProduct.price.label" />}
        id="price"
        // autoComplete="current-password"
        onChange={handleChange}
        value={newProduct.price}
        // value={user.password}
        // onBlur={handleBlur}
        // error={errors.password ? true : false}
        // helperText={errors.password}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="country"
          name="country"
          value={newProduct.localizations.en.country}
          onChange={handleChange}
          label="Age"
        >
          {countries.map((country) => (
            <MenuItem  id="country" value={country}>{`${country['English']} - ${country['Hongkong']}`}</MenuItem>
          ))}

        </Select>
      </FormControl>

      <TextField
        variant="outlined"
        margin="normal"
        multiline
        rows={5}
        fullWidth
        name="description"
        label={<FormattedMessage id="newProduct.description.label" />}
        id="description_en"
        // autoComplete="current-password"
        onChange={handleChange}
        value={newProduct.localizations.en.description}
        // value={user.password}
        // onBlur={handleBlur}
        // error={errors.password ? true : false}
        // helperText={errors.password}
      />

      <TextField
        variant="outlined"
        margin="normal"
        multiline
        rows={5}
        fullWidth
        name="description"
        label={<FormattedMessage id="newProduct.description.label" />}
        id="description_zh"
        // autoComplete="current-password"
        onChange={handleChange}
        value={newProduct.localizations.zh.description}
        // value={user.password}
        // onBlur={handleBlur}
        // error={errors.password ? true : false}
        // helperText={errors.password}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        // className={classes.submit}
      disabled={uploading}
      >
         {uploading && (
                <CircularProgress size={18} style={{ marginRight: "10px" }} />
              )}
        <FormattedMessage id="newProduct.submit.label" />
      </Button>
    </form>
  );
}
