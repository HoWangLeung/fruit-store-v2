import { Container } from '@material-ui/core'
import React from 'react'
import ProductDetailForm from './ProductDetailForm'

export default function ProductDetail({cropper,setCropper,handleSubmitNewProduct, newProduct,setNewProduct,uploading}) {
    console.log(cropper)
    return (
        <Container maxWidth={false} style={{ position:"relative", height:"70%",overflowY:"scroll"}}>
         {cropper.croppedImage &&   <img style={{height:"300px",width:"auto"}} src={cropper.croppedImage} alt="croppedImage"/>}
        <ProductDetailForm
        uploading={uploading}
        handleSubmitNewProduct={handleSubmitNewProduct} newProduct={newProduct} setNewProduct={setNewProduct}  />
        
        </Container>
    )
}
