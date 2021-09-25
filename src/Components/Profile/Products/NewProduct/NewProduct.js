import { Button, Modal ,Paper} from "@material-ui/core";
import React, { useState } from "react";
import AddProductStepper from "./AddProductStepper";

export default function NewProduct() {
  const [open, setOpen] = useState(false);

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
          <AddProductStepper/>
        </Paper>
      </Modal>
    </>
  );
}
