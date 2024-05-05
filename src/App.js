import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    seller: '',
    price: '',
    image: null,
  });

  const handleClick = () => {
    setShowModal(true);
  };

  const handleAdd = () => {
    const updatedProductList = [...product, newProduct];
    setProduct(updatedProductList);
    setShowModal(false);
    setNewProduct({
      name: '',
      seller: '',
      price: '',
      image: null,
    });
  };

  const [product, setProduct] = useState([
    // Existing products
  ]);

  const addToCart = (data) => {
  const newItem = { ...data, quantity: 1, url: data.url }; // Include the 'url' property
  setCart([...cart, newItem]);
};

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div className="App">
      <Header count={cart.length} handleShow={handleShow} />

      <button onClick={handleClick}>Add an Item</button>

      {/* Conditionally render modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div>
              <h1>Add Item</h1>

              <br />
              <br />

              <input
                type="file"
                name="myImage"
                onChange={(event) => setNewProduct({ ...newProduct, image: event.target.files[0] })}
              />
              <br />
              <label>
                Name:
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })}
                />
              </label>
              <br />
              <label>
                Seller:
                <input
                  type="text"
                  value={newProduct.seller}
                  onChange={(event) => setNewProduct({ ...newProduct, seller: event.target.value })}
                />
              </label>
              <br />
              <label>
                Price: ₱
                <input
                  type="text"
                  value={newProduct.price}
                  onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}
                />
              </label>
              <br />
              <button onClick={handleAdd}>Add</button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <div>
        {showCart ? <CartList cart={cart} /> : <ProductList product={product} addToCart={addToCart} />}
      </div>
    </div>
  );
}

export default App;