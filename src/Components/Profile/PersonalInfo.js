import { Box, Button, Divider, Paper } from '@material-ui/core'
import React from 'react'

export default function PersonalInfo({ user }) {

    return (
        <Box  style={{display:"flex" ,flexDirection:"column",width: '100%'}} className="profile_personalInfo">
            <h2 style={{alignSelf:"flex-start"}}>個人資料</h2>
            <Paper elevation={8} style={{ padding: "30px", width: '100%' }}  >
                <table style={{width:"100%"}} rules="none">
                    <tbody>
                        <tr>
                            <td >名字 : </td>
                            <td  >未設定</td>
                        </tr>
                        <tr  >
                            <td >姓氏 : </td>
                            <td >未設定</td>
                        </tr>
                        <tr>
                            <td >電郵 : </td>
                            <td >{user.email}</td>
                        </tr>
                        <tr>
                            <td >地址 : </td>
                            <td >未設定</td>
                        </tr>
                        <tr>
                            <td >電話 : </td>
                            <td >未設定</td>
                        </tr>
                    </tbody>
                </table>
                <Button style={{ margin: "10px" }} color="primary" variant="contained">
                    更改設定
                </Button>
            </Paper>
        </Box>

    )
}
