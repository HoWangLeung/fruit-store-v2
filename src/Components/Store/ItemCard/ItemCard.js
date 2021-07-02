import { Grid, Card, CardActions, CardContent, Button, CardMedia } from '@material-ui/core'
import React, { useState } from 'react'
import MyCardContent from './CardContent/MyCardContent'
import Pagination from '@material-ui/lab/Pagination';
import usePagination from './usePagination';
import { useEffect } from 'react';

function ItemCard({
  
    data, selectedCountry, selectedCategory,
    
 
    }) {
    const PER_PAGE = 6;
    let [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState(data.length);
    let count = Math.ceil(dataLength / PER_PAGE)




    const _DATA = usePagination(data, PER_PAGE);

    const handlePaginationChange = (e, p) => {
        setPage(p);
        _DATA.jump(p)
    };


    useEffect(() => {
        setPage(1)
        if (selectedCountry || selectedCategory)
            _DATA.jump(1)

        setDataLength(data.length)

 

    }, [data])

    return (
        <Grid

            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className="itemCard_container"

        >
            <Grid container item xs={12} className="ItemCard_innerContainer"   >

                <MyCardContent page={page} data={_DATA.currentData()} />

            </Grid>
            <Grid

                justify="center"
                alignItems="center"
                container item xs={12} style={{ padding: "50px 0px" }}>
                <Pagination
                    size="large"
                    count={count}
                    onChange={handlePaginationChange}
                />
            </Grid>
        </Grid>
    )
}

export default ItemCard
