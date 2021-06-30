import { Grid, Card, CardActions, CardContent, Button } from '@material-ui/core'
import React from 'react'

import { createMuiTheme, makeStyles, useTheme } from '@material-ui/core/styles';

function ItemCard({ data, selectedCountry, selectedCategory }) {
    console.log(selectedCategory);
    let filteredData = data.filter(d => {

        if (selectedCategory && selectedCountry) {
            return d.category === selectedCategory && d.country === selectedCountry
        }

        if (selectedCategory) {
            return d.category === selectedCategory
        }
        if (selectedCountry) {

            return d.country === selectedCountry
        }

        return d
    })

    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            className="itemCard_container"
            spacing={3}
        >

            {filteredData
                .map((item, i) => {

                    return (
                        <Grid
                            key={i}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            container item xs={12} md={6} lg={3}
                        >
                            <Card className="itemCard_card" variant="outlined" key={i}    >
                                <CardContent style={{padding:"0px"}} >
                                    <img src={item.img} alt="prd" />
                                    <h3>{item.name}</h3>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center">
                                        <span>價錢: ${item.price}</span>
                                        <span>產地: {item.country} </span>
                                    </Grid>

                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}

        </Grid>
    )
}

export default ItemCard
