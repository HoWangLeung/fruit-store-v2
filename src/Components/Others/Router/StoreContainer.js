import { Grid } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Route } from "react-router-dom";
import OAuth2RedirectHandler from "../../Authentication/SocialLogin/OAuth2RedirectHandler";
import KeepInTouch from "../../KeepInTouch/KeepInTouch";
import Store from "../../Store/Store";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HowItWorks from "../HowItWorks/HowItWorks";
import WhatsappIcon from "../WhatsappIcon/WhatsappIcon";

export default function StoreContainer({ theme, isAuthenticated }) {

  

  return (
    <>
      <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
      <Route
        path="/oauth2/redirect/#/:lang"
        component={OAuth2RedirectHandler}
      ></Route>
      <Grid container direction="row" justify="center" alignItems="center">
        <Banner />

        <SnackbarProvider
          maxSnack={6}
          style={{ backgroundColor: theme.palette.primary.main }}
        >
          <Store isAuthenticated={isAuthenticated} />
        </SnackbarProvider>
        
        <HowItWorks />
        <KeepInTouch/>
        <Footer />
        <WhatsappIcon />
      </Grid>
    </>
  );
}
