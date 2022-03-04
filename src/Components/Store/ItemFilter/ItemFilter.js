import { Box, Grid, IconButton } from "@material-ui/core";
import React, { useRef } from "react";
import { data } from "../Data/FruitItem";
import { Button, Paper } from "@material-ui/core";
import { useState } from "react";
import FilterButton from "./FilterButton";
import Skeleton from "@material-ui/lab/Skeleton";
import { FormattedMessage } from "react-intl";
import CategoryIcon from "@material-ui/icons/Category";
import PublicIcon from "@material-ui/icons/Public";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  myUL: {
    overflow: "scroll",
    whiteSpace: "nowrap",
    maxWidth: "750px",
    width: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    padding:"10px"
  },
  tdContainer: {
    display: "inline-block",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      zIndex: 1,
      bottom: "0",
      left: "0",
      pointerEvents: "none",
      backgroundImage:
        "linear-gradient(to right, rgba(255,255,255, 0) 90% ,  #fff 99%)",

      width: "100%",
      height: "4em",
    },
  },
}));

function ItemFilter({
  data,
  isLoading,
  selectedCategory,
  setSelectedCategory,
  selectedCountry,
  setSelectedCountry,
  categories,
  countries,
}) {
  const [scrollX, setscrollX] = useState(0);
  const classes = useStyles();
  const colorCategory = () => {
    return "primary";
  };
  let scrl = useRef(null);
  const [scrolEnd, setscrolEnd] = useState(false);
  const scrollCheck = () => {
    console.log("HIHIHIHIH");
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <Grid
      className="itemFilter"
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ overflow: "hidden" }}
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
        item
        alignItems="center"
      >
        {isLoading ? (
          <Box ml={0.5} pt={0.5} width="98.5%" height="60px">
            <Skeleton height="30px" />
            <Skeleton width="60%" height="30px" />
          </Box>
        ) : (
          <table>
            <tbody>
              <tr>
                <td>
                  <CategoryIcon
                    style={{ fontSize: "1rem", marginRight: "5px" }}
                  />
                  <FormattedMessage id="store.category" />:
                </td>
                <td>
                  <div
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {scrollX !== 0 && (
                      <ArrowBackIosIcon
                        style={{
                          marginRight: "22px",
                          display: "inline-block",
                          marginBottom: "32px",
                        }}
                      />
                    )}

                    <div className={classes.tdContainer}>
                      <ul
                        ref={scrl}
                        onScroll={scrollCheck}
                        className={classes.myUL}
                      >
                        <Button
                          variant="outlined"
                          style={{ color: "#646e73", marginRight: "15px" }}
                          value="all"
                          onClick={(e) => setSelectedCategory(null)}
                        >
                          <FormattedMessage id="store.label.all" />
                        </Button>
                        {categories.map((category, i) => {
                          //if(category.toLowerCase()=="grapes") { category="grape"}

                          return (
                            <Button
                              key={i}
                              style={{
                                color: `${
                                  selectedCategory === category
                                    ? "white"
                                    : "#646e73"
                                }`,
                                marginRight: "15px",
                              }}
                              color={`${
                                selectedCategory === category
                                  ? "primary"
                                  : "default"
                              }`}
                              variant={`${
                                selectedCategory === category ||
                                (selectedCountry &&
                                  data.some((d) => d.category === category))
                                  ? "contained"
                                  : "outlined"
                              }`}
                              value={category}
                              key={i}
                              onClick={(e) =>
                                setSelectedCategory(e.currentTarget.value)
                              }
                            >
                              {category}
                            </Button>
                          );
                        })}
                      </ul>
                    </div>

                    {!scrolEnd && (
                      <ArrowForwardIosIcon
                        style={{
                          marginLeft: "25px",
                          display: "inline-block",
                          marginBottom: "32px",
                        }}
                      />
                    )}
                  </div>
                </td>
              </tr>

              {/* <tr>
                                <td colSpan="1">
                                    <PublicIcon style={{fontSize:"1rem",marginRight:"5px"}}/>
                                    <FormattedMessage id="store.country" />:</td>
                                <td colSpan="1">
                                    <Button
                                        style={{ color: "#646e73" }}
                                        value="all" onClick={(e) => setSelectedCountry(null)}   >
                                        <FormattedMessage id="store.label.all" />
                                    </Button>
                                    {countries.map((country, i) => {
                                        return (
                                            <Button
                                                key={i}
                                                style={{ color: `${selectedCountry === country ? "white" : "#646e73"}` }}
                                                color={`${selectedCountry === country ? "primary" : "default"}`}
                                                variant={`${(selectedCountry === country) || (selectedCategory && data.some(d => d.country === country))
                                                    ? "contained" : "text"}`}
                                                value={country} key={i} onClick={(e) => setSelectedCountry(e.currentTarget.value)}
                                            >
                                                {country}
                                            </Button>
                                        )
                                    })}
                                </td>
                            </tr> */}
            </tbody>
          </table>
        )}
      </Grid>
      {/* </Paper> */}
    </Grid>
  );
}

export default ItemFilter;
