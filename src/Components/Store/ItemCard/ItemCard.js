import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  Box,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";
import MyCardContent from "./CardContent/MyCardContent";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "./usePagination";
import { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { motion } from "framer-motion/dist/framer-motion";
function ItemCard({
  locale,
  isLoading,
  data,
  selectedCountry,
  selectedCategory,
  quantity,
  setQuantity,
  cart,
  setCart,
}) {
  const PER_PAGE = 6;
  let [page, setPage] = useState(1);
  const [dataLength, setDataLength] = useState(data.length);
  const [loadedImg, setLoadedImg] = useState(false);
  let count = Math.ceil(dataLength / PER_PAGE);

  const _DATA = usePagination(data, PER_PAGE);

  const handlePaginationChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    setPage(1);
    if (selectedCountry || selectedCategory) _DATA.jump(1);

    setDataLength(data.length);
  }, [data]);




  
  return (
    <Container maxWidth="md" style={{ padding: "0px" }}>
      <Grid
     
        component={motion.div}
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="itemCard_container"
      >
        <Grid container item xs={12} className="ItemCard_innerContainer" >
          {isLoading ? (
            Array.from(new Array(6)).map((item, i) => (
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
              >
                <Box key={item}>
                  <Skeleton variant="rect" width={310} height={250} />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Grid>
            ))
          ) : (
            <MyCardContent
              setLoadedImg={setLoadedImg}
              locale={locale}
              cart={cart}
              setCart={setCart}
              quantity={quantity}
              setQuantity={setQuantity}
              page={page}
              data={_DATA.currentData()}
              selectedCategory={selectedCategory}
            />
          )}
        </Grid>

        <Grid
          justify="center"
          alignItems="center"
          container
          item
          xs={12}
          style={{ padding: "50px 0px" }}
        >
          <Pagination
            size="large"
            count={count}
            onChange={handlePaginationChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ItemCard;
