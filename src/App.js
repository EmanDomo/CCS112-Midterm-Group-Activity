import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from 'react';
import CartList from './components/CartList';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://static.nike.com/a/images/t_default/80b8277d-ede8-4885-9c37-2fe1cdf341aa/air-max-90-shoes-K0mczj.png',
      name: 'Nike Air Max 90',
      category: 'Shoes',
      seller: 'Nike Official Store',
      price: 3499
    },
    {
      url: 'https://www.capital.com.ph/cdn/shop/products/GX9140-140_grande.jpg?v=1664769628',
      name: 'Adidas Ultraboost',
      category: 'Shoes',
      seller: 'Adidas Online',
      price: 2999
    },
    {
      url: 'https://www.capital.com.ph/cdn/shop/products/373308-01.jpg?v=1663221741',
      name: 'Puma RS-X3',
      category: 'Shoes',
      seller: 'Puma Store',
      price: 2499
    },
    {
      url: 'https://i.ebayimg.com/images/g/JmMAAOSw~otWdL5u/s-l1200.jpg',
      name: 'Vans Old Skool',
      category: 'Shoes',
      seller: 'Vans Official',
      price: 1499
    },


  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }

      
    </div>
  );
}

export default App;
