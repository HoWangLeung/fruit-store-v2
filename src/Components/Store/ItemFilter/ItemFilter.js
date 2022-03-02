import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { data } from '../Data/FruitItem'
import { Button, Paper } from "@material-ui/core";
import { useState } from 'react';
import FilterButton from './FilterButton';
import Skeleton from '@material-ui/lab/Skeleton';
import { FormattedMessage } from 'react-intl';
import CategoryIcon from '@material-ui/icons/Category';
import PublicIcon from '@material-ui/icons/Public';
function ItemFilter({
    data,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    selectedCountry,
    setSelectedCountry,
    categories,
    countries }) {
    //    console.log(JSON.stringify(data));

    const colorCategory = () => {
        return 'primary'
    }

    return (

        <Grid
            className="itemFilter"
            container
            direction="row"
            justify="center"
            alignItems="center">

            <Grid

                container direction="row"
                justify="flex-start"
                item
                alignItems="center">
                {isLoading ? (
                    <Box ml={.5} pt={.5} width="98.5%" height="60px" >

                        <Skeleton height="30px" />
                        <Skeleton width="60%" height="30px" />
                    </Box>
                ) : (

                    <table>
                        <tbody>
                            <tr>
                                <td colSpan="1">  
                                <CategoryIcon style={{fontSize:"1rem",marginRight:"5px"}} />
                                 <FormattedMessage id="store.category" />:</td>
                                <td colSpan="2">
                                    <>
                                        <Button
                                            style={{ color: "#646e73" }}
                                            value="all" onClick={(e) => setSelectedCategory(null)}  >
                                            <FormattedMessage id="store.label.all" />
                                        </Button>
                                        {categories.map((category, i) => {
                                           //if(category.toLowerCase()=="grapes") { category="grape"}

                                            return (
                                                <Button

                                                    key={i}
                                                    style={{
                                                         color: `${selectedCategory === category ? "white" : "#646e73"}`,

                                                        
                                                        }}
                                                    color={`${selectedCategory === category ? "primary" : "default"}`}
                                                    variant={`${(selectedCategory === category) || (selectedCountry && data.some(d => d.category === category))
                                                        ? "contained" : "text"}`}
                                                    value={category} key={i} onClick={(e) => setSelectedCategory(e.currentTarget.value)}
                                                >
                                                    {category}
                                                </Button>
                                            )
                                        })}
                                    </>
                                </td>

                            </tr>
                            <tr>
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
                            </tr>
                        </tbody >
                    </table >

                )
                }




            </Grid >
            {/* </Paper> */}
        </Grid >



    )
}

export default ItemFilter
