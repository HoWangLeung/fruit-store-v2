import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
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
import { motion } from "framer-motion/dist/framer-motion";
import MyCardItem from "./MyCardItem";
import gsap from "gsap";

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
  selectedCategory,
}) {
  const classes = useStyles();
  const itemsRef = useRef();
  itemsRef.current = [];
  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline().fromTo(
      [itemsRef.current],
      {
        scale: 0.8,
        opacity:0,
        // duration:0.1,
        stagger: {
          each: 0.09,
       
        },
        ease: "Power3.easeInOut",
      },

      {
        y: 0,
        scale:1,
        opacity:1,
        stagger: {
          each: 0.1,
           from:Math.floor(Math.random() * 6)
        },
        ease: "Power3.easeInOut",
      }
    );

    return () => {
      return tl.kill();
    };
  }, [selectedCategory]);

  return (
    <>
      <Grid container>
        {data.map((item, i) => {
          return (
            <Grid
              ref={addToRefs}
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
      </Grid>

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
    </>
  );
}
