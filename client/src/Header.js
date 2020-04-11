import React from 'react';
import LoginForm from './LoginForm';
import './css/Header.css';
import logo from './images/3.jpg';
function Header() {

const styles_pknu = {
    color : 'black',
    fontSize : '70px',
    textAlign : 'center',
    float : 'left',
    width: '500px',
    height : '100px',
    textDecoration : 'none'
}

//const loginStatus = 'undefined';

  return (
    <div className="header">
          <img src={logo} alt="not_photo" width='150px' height='100px' align='left'/>
          <a style={styles_pknu} href="/">PKNU</a>
          <div><LoginForm/></div>
      </div>
  );
}

export default Header;
