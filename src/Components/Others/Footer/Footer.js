import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import './Footer.scss'
export default function Footer() {
    return (

        <Grid
            direction="row"
            justify="space-evenly"
            alignItems="center"
            container item
            className="Footer"
            xs={12}
            style={{paddingBottom:"20px"}}
        >
       
            <Grid item  >
                <h1>聯絡我們</h1>
            </Grid>
            <Grid item  >
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="1">實體店地址 : </td>
                            <td colSpan="1">西區副食品批發市場, 豐物道8號, 西環</td>
                        </tr>
                        <tr>
                            <td colSpan="1">聯絡電話 : </td>
                            <td colSpan="1">9201 1748</td>
                        </tr>
                        <tr>
                            <td colSpan="1">聯絡人 : </td>
                            <td colSpan="1">梁先生</td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        </Grid>

    )
}
