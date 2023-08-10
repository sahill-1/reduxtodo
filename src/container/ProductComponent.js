import React from 'react'
import { useSelector } from 'react-redux';
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
const {id, title} = products[0];
  return (
    <div className='four column wide'>
        <div className='ui link cards' style={{border:"1px solid red", margin:"10px auto"}}>
          <div className='card'>
            <div className='image'></div>
            <div className='content'>
              <div className='header'>{title}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductComponent
