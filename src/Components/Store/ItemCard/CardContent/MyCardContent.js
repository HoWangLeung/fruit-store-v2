import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  Typography,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { ReactComponent as LostSvg } from "../../../../Images/Lost.svg";
import { Link } from "react-router-dom";
import {  motion } from "framer-motion/dist/framer-motion";
import MyCardItem from "./MyCardItem";

const useStyles = makeStyles(
  (theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    menuPaper: {
      maxHeight: 300,
    },
  }),
  { index: 1 }
);
export default function MyCardContent({
  locale,
  data,
  page,
  quantity,
  setQuantity,
  setCart,
  cart,
  setLoadedImg,
}) {
  const classes = useStyles();
  return (
    <React.Fragment component={motion.div} layout>
      {data.map((item, i) => {
        return (
          <Grid
            key={i}
            direction="row"
            justify="center"
            alignItems="center"
            className="itemCard_inner_container"
            container
            item
            xs={12}
            md={6}
            lg={4}
            component={motion.div}
            layout
          >
            <MyCardItem
              i={i}
              item={item}
              locale={locale}
              setCart={setCart}
              classes={classes}
              quantity={quantity}
              setLoadedImg={setLoadedImg}
              setQuantity={setQuantity}
            />
          </Grid>
        );
      })}

      {data.length == 0 && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            style={{ fontWeight: "600", padding: "30px" }}
            variant="p"
          >
            <FormattedMessage id="store.noCombination" />
          </Typography>
          <LostSvg />
        </Grid>
      )}
    </React.Fragment>
  );
}
