import { TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function CategorySelector({ category, setCategory }) {
  const handleChange = (e) => {
    if (e.target.name === "en") {
      setCategory((prevState) => ({
        ...prevState,
        en: e.target.value,
      }));
    }

    if (e.target.name === "zh") {
      setCategory((prevState) => ({
        ...prevState,
        zh: e.target.value,
      }));
    }
  };

  return (
    <form>
      <TextField
        onChange={handleChange}
        label="English"
        name="en"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        onChange={handleChange}
        label="Chinese"
        name="zh"
        margin="normal"
        variant="outlined"
        fullWidth
      />
    </form>
  );
}
