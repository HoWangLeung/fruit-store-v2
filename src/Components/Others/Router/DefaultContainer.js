import { Grid, useTheme } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Profile from "../../Profile/Profile";
import Cart from "../../Store/Cart/Cart";
import ItemDetail from "../../Store/ItemDetail/ItemDetail";
import Store from "../../Store/Store";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import WhatsappIcon from "../WhatsappIcon/WhatsappIcon";
import StoreContainer from "./StoreContainer";

function DefaultContainer({ isAuthenticated }) {
  let locale = localStorage.getItem("locale");
  const theme = useTheme();
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} />
     
        <Route
          exact
          path="/:lang"
          render={(props) => (
            
            <StoreContainer theme={theme} isAuthenticated={isAuthenticated} />
          )}
        />
        <Route
          exact
          path="/:lang/product/:id"
          render={(props) => (
            <SnackbarProvider
              style={{ backgroundColor: theme.palette.primary.main }}
              maxSnack={3}
            >
              <ItemDetail isAuthenticated={isAuthenticated} {...props} />
            </SnackbarProvider>
          )}
        />
   

      <Redirect from="/" to={`/${locale}`} />
    </>
  );
}

export default DefaultContainer;
