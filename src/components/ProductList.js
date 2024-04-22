import React from 'react'
import '../App.css';

const ProductList = ({product,addToCart}) => {
  return (
    <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{width:'50%'}}>
                            <div className='product-item'>
                            <img src={productItem.url}  height="30%" width="30%"/>
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> ₱{productItem.price}.00</p>
                                <button onClick={()=> addToCart(productItem)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default ProductList
