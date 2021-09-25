import { Box, Paper, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { FormattedMessage } from "react-intl";
import ExistingProducts from "./ExistingProducts";
import NewProduct from "./NewProduct/NewProduct";

export default function ProductManagement() {
  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Typography noWrap variant="h5" style={{ alignSelf: "flex-start" }}>
          <FormattedMessage id="profile.products.heading" />
        </Typography>
        <Typography
          noWrap
          style={{
            color: "#2E3C42",
            opacity: ".6",
            marginTop: "5px",
            marginBottom: "15px",
          }}
        >
          Welcome, Admin, manage your products here
        </Typography>
      </Grid>
      <Paper
        elevation={3}
        style={{
          padding: "30px",
          width: "100%",
          borderRadius: "8px",
          marginBottom: "50px",
        }}
      >
        <Grid container direction="column" alignItems="flex-start" justify="flex-start" >
          <h3>Add New Product</h3>
          <NewProduct/>
        </Grid>
      </Paper>

      <Paper
        elevation={3}
        style={{ padding: "30px", width: "100%", borderRadius: "8px" }}
      >
        <h3>Manage Existing Products</h3>
        <ExistingProducts />
      </Paper>
    </Box>
  );
}
