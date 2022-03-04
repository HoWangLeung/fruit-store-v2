import { Button, Modal, Paper } from "@material-ui/core";
import React, { useState } from "react";
import CommonDialog from "../../../Common/Dialog/CommonDialog";
import AddProductStepper from "./AddProductStepper";

export default function NewProduct() {
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    message: "system error",
  });
  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(!open)}
      >
        Add New Product
      </Button>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper
          style={{
            height: "90%",

            width: "90%",
            padding: "15px",
          }}
        >
          <AddProductStepper setOpen={setOpen} setDialog={setDialog}  />
        </Paper>
      </Modal>
      <CommonDialog dialog={dialog} setDialog={setDialog} />
    </>
  );
}
