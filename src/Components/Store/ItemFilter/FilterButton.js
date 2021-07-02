import React from 'react'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button, } from "@material-ui/core";
import { green, orange } from '@material-ui/core/colors';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]
        },
    },
});
function FilterButton({ setSelectedCategory, children, value, selectedCategory }) {
    return (
        <ThemeProvider theme={theme}>
            <Button 
                style={{ color: `${selectedCategory===value?"white":"#646e73"}` }}
                color={`${selectedCategory === value ? "primary" : "default"}`}
                variant={`${selectedCategory === value ? "contained" : "text"}`}
                onClick={(e) => setSelectedCategory(value)}  >
                {children}
            </Button>
        </ThemeProvider>
    )
}

export default FilterButton
