
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { ACCESS_TOKEN, API_BASE_URL } from '../../../constants'


export default function useProfileData() {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [openFeedBack, setOpenFeedBack] = useState(false)
    const [isLoadingprofile, setIsLoadingprofile] = useState(false)
    const [profile, setProfile] = useState({
        firstName: "Derek",
        lastName: "Leung",
        address: "ABCDEFG",
        phone: "23456789",

    })

    useEffect(() => {


        const headers = {
            'Content-Type': 'application/json',
        }
        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }

        let config = {
            headers: headers,
            method: 'get',
            url: API_BASE_URL + "/api/user/profile"
        }
        axios(config)
            .then(res => {

                setData(res.data)
            })
            .catch(e => {
                console.log(e.response)
            })


    }, [])


    const handleEditProfile = () => {
        setOpen(!open)

    }
    const handleClose = () => {
        setOpen(false)
        setOpenFeedBack(false)
    }
    const handleProfileChange = (e) => {
        setProfile(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoadingprofile(true)
        console.log(profile);
        const headers = {
            'Content-Type': 'application/json',
        }
        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }

        let config = {
            headers: headers,
            method: 'put',
            url: API_BASE_URL + "/api/user/profile/update",
            data: profile
        }
        axios(config)
            .then(res => {
                setData(res.data)
                setProfile(res.data)
                setOpen(!open)
                setOpenFeedBack(true)
                setIsLoadingprofile(false)
            })
            // .then(() => {
            //     const headers = {
            //         'Content-Type': 'application/json',
            //     }
            //     if (localStorage.getItem(ACCESS_TOKEN)) {
            //         headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            //     }

            //     let config = {
            //         headers: headers,
            //         method: 'get',
            //         url: API_BASE_URL + "/api/user/profile"
            //     }
            //     axios(config)
            //         .then(res => {

            //             setData(res.data)
            //         })
            //         .catch(e => {
            //             console.log(e.response)
            //         })
            // })
            .catch(e => {
                console.log(e.response)
            })
    }


    return {
        userData: data,
        handleEditProfile,
        handleClose, open,
        handleProfileChange,
        profile,
        setProfile,
        handleSubmit,
        openFeedBack,
        isLoadingprofile
    }
}
