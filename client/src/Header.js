import React from 'react';
import './css/Header.css';
import pic from './images/3.jpg';
function Header() {
  return (
    <div className="header">
      <div className="header_left">
          <img src={pic} width='150px' height='100px' align='left' alt="not photo"></img>
      </div>
    </div>
  );
}

export default Header;
