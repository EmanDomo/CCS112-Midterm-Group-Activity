import React, { useState } from 'react';
import '../App.css';

function Header(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
    props.handleShow(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='flex shopping-card'>
      <div onClick={() => props.handleShow(false)}>Home</div>
      <div>
        <img
          src='https://w7.pngwing.com/pngs/156/414/png-transparent-shopping-cart-drawing-computer-icons-empty-cart-angle-text-rectangle-thumbnail.png'
          alt='Cart'
          onClick={() => props.handleShow(true)}
          style={{ background: 'transparent', mixBlendMode: 'multiply', width: '30px' }}
        />
        <sup>{props.count}</sup>
      </div>

    </div>
  );
}

export default Header;