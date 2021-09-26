import { Button, TextField } from "@material-ui/core";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function ProductDetailForm({ handleSubmitNewProduct }) {
  return (
    <form onSubmit={handleSubmitNewProduct}  >
      
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="productName"
        label={<FormattedMessage id="newProduct.name.label" />}
        id="productName"
        // autoComplete="current-password"
        // onChange={handleChange}
        // value={user.password}
        // onBlur={handleBlur}
        // error={errors.password ? true : false}
        // helperText={errors.password}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="price"
        label={<FormattedMessage id="newProduct.price.label" />}
       
        id="password"
        // autoComplete="current-password"
        // onChange={handleChange}
        // value={user.password}
        // onBlur={handleBlur}
        // error={errors.password ? true : false}
        // helperText={errors.password}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="country"
        label={<FormattedMessage id="newProduct.country.label" />}
        name="country"
        //autoComplete="email"
        autoFocus
        // onChange={handleChange}
        // value={user.email}
        // onBlur={handleBlur}
        // error={errors.email ? true : false}
        // helperText={errors.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        multiline
        rows={10}
        fullWidth
        name="description"
        label={<FormattedMessage id="newProduct.description.label" />}
      
        id="description"
        // autoComplete="current-password"
        // onChange={handleChange}
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
        // disabled={isLoading}
      >
        {/* {isLoading && <CircularProgress
                size={18} style={{ marginRight: "10px" }} />} */}
        <FormattedMessage id="newProduct.submit.label" />
      </Button>
    </form>
  );
}
