import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Button,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Personal/Profile.scss";
import useOrderData from "./OrderHistory/useOrderData";
import OrderHistory from "./OrderHistory/OrderHistory";
import PersonalInfo from "./Personal/PersonalInfo";
import useProfileData from "./Personal/useProfileData";
import { useHistory } from "react-router-dom";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import NavBar from "../NavBar/NavBar";
import Credential from "./Credential/Credentail";
import ProductManagement from "./Products/ProductManagement";

const useStyles = makeStyles(
  {
    table: {
      minWidth: 650,
    },
  },
  { index: 1 }
);

export default function Profile({ isAuthenticated }) {
  const [active, setActive] = useState("general");

  let history = useHistory();
  const classes = useStyles();
  let {
    userData,
    handleEditProfile,
    handleClose,
    open,
    handleProfileChange,
    profile,
    setProfile,
    handleSubmit,
    openFeedBack,
    isLoadingprofile,
    password,
    setPassword,
  } = useProfileData();
  let orderData = useOrderData();
  const locale = history.location.pathname.substring(1, 3);
  if (userData.length === 0)
    return (
      <Backdrop open style={{ backgroundColor: "#fafafa" }}>
        <CircularProgress />
      </Backdrop>
    );

  const handleSetActive = (e) => {
    let section = e.currentTarget
      .getAttribute("name")
      .toLowerCase()
      .replace(/ /g, "");
    setActive(section);
  };

  const handleChange = (e) => {
    let value = e.currentTarget.value;
    let fieldName = e.currentTarget.name;

    setPassword((state) => ({
      ...state,
      [fieldName]: value,
    }));
  };

  return (
    <Container maxWidth="lg" style={{ paddingBottom: "30px" }}>
      <NavBar isAuthenticated={isAuthenticated} />
      <Grid
        style={{ marginTop: "30px" }}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          style={{ marginBottom: "50px" }}
          xs={12}
          container
          item
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={6}>
            {" "}
            <ProfileOverview user={userData} />{" "}
          </Grid>
          <Grid item xs={12} md={6} lg={6} />
        </Grid>

        <Grid lg={3} container item justify="center" alignItems="center">
          <ProfileNavigation
            active={active}
            handleSetActive={handleSetActive}
          />
        </Grid>

        <Grid lg={9} container item justify="center" alignItems="center">
          {active === "general" && (
            <PersonalInfo
              user={userData}
              open={open}
              handleClose={handleClose}
              handleEditProfile={handleEditProfile}
              handleSubmit={handleSubmit}
              handleProfileChange={handleProfileChange}
              profile={profile}
              setProfile={setProfile}
              openFeedBack={openFeedBack}
              isLoadingprofile={isLoadingprofile}
            />
          )}
          {active === "order" && (
            <OrderHistory
              classes={classes}
              orderData={orderData}
              locale={locale}
            />
          )}
          {active === "credential" && (
            <Credential
              password={password}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}

          {active === "products" && (
            <ProductManagement
              
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
