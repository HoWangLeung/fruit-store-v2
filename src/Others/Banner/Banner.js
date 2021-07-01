import React from 'react'
import banner from '../../Images/banner.jpg'
import './Banner.scss'
export default function Banner() {
    return (
        <div className="banner_container">
       
            <img src={banner} alt="banner" />
            <h1 className="centered text">購物滿$300即免費送貨</h1>
        </div>
    )
}
