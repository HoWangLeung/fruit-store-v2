import React from 'react'
import { Grid, Card, CardActions, CardContent, Button, CardMedia } from '@material-ui/core'

export default function MyCardContent({ filteredData, page }) {
    console.log(page);
    let begin = 0
    let end = 6


    return filteredData
        // .slice(begin, end)
        .map((item, i) => {
            return (
                <Grid
                    key={i}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="itemCard_inner_container"
                    container
                    item
                    xs={12} md={6} lg={4}
                    // style={{marginTop:"50px"}} 
                >
                    <Card className="itemCard_card" variant="outlined" key={i}    >
                        <CardContent style={{ padding: "0px" }}  >
                            <img src={item.img} alt="pic" />
                            <div style={{ padding: "0px 10px 10px 10px" }}>
                                <h3>{item.name}</h3>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <span>價錢: ${item.price}</span>
                                    <span>產地: {item.country} </span>
                                </Grid>
                            </div>

                        </CardContent>
                    </Card>
                </Grid>
            )
        })

}
