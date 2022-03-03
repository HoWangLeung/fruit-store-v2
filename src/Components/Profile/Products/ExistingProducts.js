import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@material-ui/core";
import React from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import useData from "../../Store/Data/useData";
import { makeStyles } from '@material-ui/core/styles';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ExistingProducts() {
  const classes = useStyles();
  let history = useHistory();
  const locale = history.location.pathname.substring(1, 3);
  let [data, isLoading] = useData(locale);
  console.log(data);
  console.log(locale);

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Country&nbsp;</TableCell>
          <TableCell align="right">Price&nbsp;</TableCell>
          <TableCell align="right">Quantity&nbsp;</TableCell>
          <TableCell align="right">Actions&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">
              {row.localizations[`${locale}`].name}
            </TableCell>
            <TableCell align="right">{row.country}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
            <TableCell align="right">
              <div className={classes.root}>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
