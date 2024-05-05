import React from 'react';
import '../App.css';

const ProductList = ({ product, addToCart }) => {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: '50%' }} key={productIndex}>
            <div className="product-item">
              {productItem.image && (
                <img
                  src={URL.createObjectURL(productItem.image)}
                  height="30%"
                  width="30%"
                  alt="Product"
                />
              )}
              <p>{productItem.name}</p>
              <p>{productItem.seller}</p>
              <p>₱{productItem.price}.00</p>
              <button onClick={() => addToCart(productItem)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;