import { Container, Grid, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useRef } from "react";
import PlaceOrder from "../../../Images/placeOrder.svg";
import OrderConfirmedSVG from "../../../Images/orderConfirmed.svg";
import OrderDeliveredSVG from "../../../Images/orderDelivered.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const useStyles = makeStyles({
  svg: {
    width: "400px",
    height: "400px",
    marginTop: "100px",
  },
});

export default function HowItWorks() {
  const classes = useStyles();
  let placeImg = useRef();
  let confirmImg = useRef();
  let deliverImg = useRef();
  let placeTxt = useRef();
  let confirmTxt = useRef();
  let deliverTxt = useRef();

  const onIntersection = useCallback((entries) => {
    //console.log(entries);
    for (const entry of entries) {
      let id = entry.target.id;
      if (id === "placeOrder" && entry.isIntersecting) {
        // console.log("an 1");
        gsap.fromTo(
          placeImg.current,
          {
            autoAlpha: 0,
            clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
          },
          {
            autoAlpha: 1,
            duration: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }
        );

        gsap.fromTo(
          placeTxt.current,
          {
            duration: 0.5,
            opacity: 0,
            x: "500px",
            ease: "Power1.easeInOut",
          },
          {
            duration: 0.5,
            opacity: 1,
            x: "0px",
            ease: "Power1.easeInOut",
          }
        );
      }

      if (id === "confirmOrder" && entry.isIntersecting) {
        console.log("an 2");
        gsap.fromTo(
          confirmImg.current,
                 {
                  duration: 0.5,
        autoAlpha: 0,
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
      },
      {
        duration: 0.5,
        autoAlpha: 1,
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)"
      }
        );
        gsap.fromTo(
          confirmTxt.current,
          {
            duration: 0.5,
            opacity: 0,
            x: "-500px",
            ease: "Power1.easeInOut",
          },
          {
            duration: 0.5,
            opacity: 1,
            x: "0px",
            ease: "Power1.easeInOut",
          }
        );
      }

      if (id === "orderDelivered" && entry.isIntersecting) {
        //console.log("an 3");
        gsap.fromTo(
          deliverImg.current,
          {
            duration: 0.5,
            autoAlpha: 0,
            clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
          },
          {
            duration: 0.5,
            autoAlpha: 1,
            duration: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }
        );

        gsap.fromTo(
          deliverTxt.current,
          {
            duration: 0.5,
            opacity: 0,
            x: "500px",
            ease: "Power1.easeInOut",
          },
          {
            duration: 0.5,
            opacity: 1,
            x: "0px",
            ease: "Power1.easeInOut",
          }
        );
      }
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    observer.observe(document.querySelector("#placeOrder"));
    observer.observe(document.querySelector("#confirmOrder"));
    observer.observe(document.querySelector("#orderDelivered"));
  }, [onIntersection]);

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <h1 style={{ fontWeight: "600px" }}>How It Works</h1>
      </Grid>

      <Grid container justify="center" alignItems="center" id="placeOrder">
        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <img
            ref={placeImg}
            src={PlaceOrder}
            alt="svg"
            className={classes.svg}
          />
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <Typography ref={placeTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit venenatis enim, elementum cursus est lacinia ut. Praesent
            vitae suscipit nunc. Curabitur feugiat et velit quis accumsan.
            Curabitur rutrum iaculis lectus, feugiat luctus felis. Fusce aliquet
            nunc sed sodales scelerisque. Fusce convallis nunc velit, id
            venenatis lorem porta eu. Nam eleifend magna felis, sit amet tempus
            sapien feugiat et. In quis fringilla urna. Fusce a risus ac ex
            interdum suscipit molestie eu libero. Maecenas elementum est et
            neque ultricies, sed pellentesque odio feugiat. Nam a tellus quis
            nisl cursus porta sit amet quis ex. Donec dictum nec nulla vitae
            molestie. Curabitur sed tempor arcu.
          </Typography>
        </Grid>
      </Grid>

      <Grid container id="confirmOrder">
        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <Typography ref={confirmTxt}>
            Morbi a nulla lacus. Suspendisse orci augue, commodo id efficitur
            eget, tincidunt eget tortor. Nulla pulvinar, lacus a bibendum
            bibendum, urna quam vestibulum tellus, quis porttitor dolor est non
            velit. Cras ultrices purus in urna semper, non blandit lectus
            laoreet. Ut a scelerisque turpis. Curabitur sollicitudin vestibulum
            mauris, a molestie mauris. Mauris in purus porttitor, ornare lorem
            ut, tincidunt nunc. Nullam pulvinar libero ex, a laoreet tellus
            porta eu. Nam tincidunt dignissim accumsan. Sed placerat scelerisque
            ultricies. Ut at consequat sem. Sed sit amet nisl odio. Sed auctor
            ac felis in scelerisque. Proin tincidunt, lacus vel vestibulum
            accumsan, mauris lorem maximus ligula, vitae volutpat quam leo vel
            ante.
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <img
            ref={confirmImg}
            src={OrderConfirmedSVG}
            alt="svg"
            className={classes.svg}
          />
        </Grid>
      </Grid>

      <Grid container id="orderDelivered">
        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <img
            ref={deliverImg}
            src={OrderDeliveredSVG}
            alt="svg"
            className={classes.svg}
          />
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <Typography ref={deliverTxt}>
            In aliquam, ligula vel condimentum congue, enim ex aliquet nulla, et
            condimentum arcu purus sed nunc. Proin scelerisque blandit ligula
            vitae fermentum. Vivamus porttitor, elit nec egestas consectetur,
            risus magna egestas erat, et mollis sem ante sed ipsum. Fusce ac
            finibus neque. Pellentesque dictum sem a turpis blandit faucibus.
            Curabitur pulvinar eros dapibus congue suscipit. Nullam vel congue
            eros. Sed mi nisi, elementum sollicitudin ipsum at, cursus iaculis
            erat. Donec nec nulla nisi. Morbi varius leo quis sapien viverra,
            non ultrices justo semper. Maecenas sit amet purus ut ante aliquam
            volutpat id et metus. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque at nulla enim.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
