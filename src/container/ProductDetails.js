import React, {useEffect} from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProducts} from "../redux/actions/productActions"
const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product)

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(selectedProducts);
  };
  useEffect(( ) => {
    if(productId && productId!=="") fetchProductDetails();
  }, [productId])

  return <div></div>;
};

export default ProductDetails;
