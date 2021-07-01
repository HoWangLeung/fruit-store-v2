import { Grid } from '@material-ui/core'
import React from 'react'
import { data } from '../Data/FruitItem'
import { Button, Paper } from "@material-ui/core";
import { useState } from 'react';
function ItemFilter({ selectedCategory, setSelectedCategory, selectedCountry, setSelectedCountry, categories, countries }) {


    return (

        <Grid
        className="itemFilter"
         container 
         direction="row"
            justify="center"
            alignItems="center">
       
                <Grid

                    container direction="row"
                    justify="center"
                    alignItems="center">
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan="1">種類:</td>
                                <td colSpan="1">
                                    <>
                                        <Button 
                                             style={{color:"#646e73"}}
                                        value="all" onClick={(e) => setSelectedCategory(null)}  >
                                            全部
                                        </Button>
                                        {categories.map((category, i) => {
                                            return (
                                                <Button
                                                style={{color:"#646e73"}}
                                                    color={`${selectedCategory === category ? "primary" : "default"}`}
                                                    variant={`${selectedCategory === category ? "contained" : "default"}`}
                                                    value={category} key={i}
                                                    onClick={(e) => setSelectedCategory(e.currentTarget.value)}
                                                >
                                                    {category}
                                                </Button>
                                            )
                                        })}
                                    </>
                                </td>

                            </tr>
                            <tr>
                                <td colSpan="1">國家:</td>
                                <td colSpan="1">
                                    <Button 
                                    style={{color:"#646e73"}}
                                    value="all" onClick={(e) => setSelectedCountry(null)}   >
                                        全部
                                    </Button>
                                    {countries.map((country, i) => {
                                        return (
                                            <Button
                                            style={{color:"#646e73"}}
                                                color={`${selectedCountry === country ? "primary" : "default"}`}
                                                variant={`${selectedCountry === country ? "contained" : "default"}`}
                                                value={country} key={i} onClick={(e) => setSelectedCountry(e.currentTarget.value)} >
                                                {country}
                                            </Button>
                                        )
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
 


 
                </Grid>
            {/* </Paper> */}
        </Grid>



    )
}

export default ItemFilter
