
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { ACCESS_TOKEN, API_BASE_URL } from '../../../constants'


export default function useProfileData() {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [openFeedBack, setOpenFeedBack] = useState(false)
    const [isLoadingprofile, setIsLoadingprofile] = useState(false)
    const [profile, setProfile] = useState({
        firstName: "Ho Wang",
        lastName: "Leung",
        address: "ABCDEFG",
        phone: "23456789",
    })

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword1: "",
        newPassword2: "",
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
        const headers = {
            'Content-Type': 'application/json',
        }
        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }

        let form_channel = e.target.name

        let config = {
            headers: headers,
            method: 'put',
            url: "",
            data: ""
        }

        if (form_channel == "credential") {
            config.url = API_BASE_URL + "/api/auth/updatePassword"
            config.data = password
            axios(config)
                .then(res => {
                    console.log(res);
                })
                .catch(e => {

                })
        } else if (form_channel == "personalInfo") {
            setIsLoadingprofile(true)
            config.url = API_BASE_URL + "/api/user/profile/update"
            config.data = profile

            axios(config)
                .then(res => {
                    console.log(res);
                    setData(res.data)
                    setProfile(res.data)
                    setOpen(!open)
                    setOpenFeedBack(true)
                    setIsLoadingprofile(false)
                })
                .catch(e => {

                })
        }



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
        isLoadingprofile,
        password,
        setPassword
    }
}
