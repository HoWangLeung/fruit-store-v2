import { Container } from '@material-ui/core'
import React from 'react'
import ProductDetailForm from './ProductDetailForm'

export default function ProductDetail({cropper,setCropper,handleSubmitNewProduct}) {
    console.log(cropper)
    return (
        <Container maxWidth={false} style={{ position:"relative", height:"70%",overflowY:"scroll"}}>
         {cropper.croppedImage &&   <img style={{height:"300px",width:"auto"}} src={cropper.croppedImage} alt="croppedImage"/>}
        <ProductDetailForm handleSubmitNewProduct={handleSubmitNewProduct} />
        
        </Container>
    )
}
