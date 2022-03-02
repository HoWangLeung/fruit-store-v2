import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
     // padding: theme.spacing(3),
    //   width: "55ch",
    },
  },
}));

export default function KeepInTouch() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: "40px", marginBottom: "70px" }}
    >
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h5" style={{ padding: "10px" }}>
          Let's keep in touch
        </Typography>

        <Typography style={{ padding: "15px" }}>
          Subscribe to the mailing list and receive the latest updates
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <Box>
            <Box>
              <TextField
              required
                id="outlined-basic"
                label="Your Email Address"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box>
              <FormControlLabel
               style={{paddingTop:"5px"}}
                value="end"
                control={<Checkbox color="primary" />}
                label="By clicking this checkbox, you consent to receiving emails from this website."
                labelPlacement="end"
              />
            </Box>
          </Box>
        </form>
        <Button
          style={{ marginTop: "5px" }}
          color="primary"
          variant="contained"
          size="large"
        >
          Subscribe
        </Button>
      </Grid>

      <Typography style={{ padding: "15px" }} variant="caption">
        We respect your privacy
      </Typography>
    </Grid>
  );
}
