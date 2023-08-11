import React, {useEffect} from 'react'
import {axios} from "axios";
import {useParams} from "react-router-dom";

const ProductDetails = () => {
  const {productId }= useParams() 
  
  const fetchProductDetails = () => {
    const response = await axios.get("https://fakestoreapi.com/products/")
  }
  return (
    <div>
      
         
      
    </div>
  )
}

export default ProductDetails
