import { CircularProgress, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from "react-router-dom";
import useData from "../../../../Store/Data/useData";
export default function CategorySelector({ category, setCategory }) {
  let history = useHistory();
  const locale = history.location.pathname.substring(1, 3);
  let [data, isLoading] = useData("en");
  let categorySet = new Set(data.map((d) => d.category));
  let categories = Array.from(categorySet).sort();

  let [dataZH, isLoadingZH] = useData("zh");
  let categorySetZH = new Set(dataZH.map((d) => d.category));
  let categoriesZH = Array.from(categorySetZH).sort();

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
    <React.Fragment>
      {!isLoading && (
        <form>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={categories.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={handleChange}
                label="English"
                name="en"
                margin="normal"
                variant="outlined"
                fullWidth
                value={category.en}
                // label="Select an existing category or create new" margin="normal" variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={categoriesZH.map((option) => option)}
          
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={handleChange}
                label="Chinese"
                name="zh"
                margin="normal"
                variant="outlined"
                fullWidth
                value={category.zh}
              />
            )}
          />
        </form>
      )}

      {isLoading && (
        <CircularProgress size={18} style={{ marginRight: "10px" }} />
      )}
    </React.Fragment>
  );
}
