import React from 'react';
import './css/Nav.css';


class Nav extends React.Component{
  
  render(){
    return(
      <div id="nav">
      <div className="nav_inner">
        <ul className="navigation">
            <li className="navigation_list dropdown">
                <div className="navigation_link dropbtn">A</div>
                <div className="dropdown_content">
                    <a href="/major/computer" className="line">컴퓨터공학과</a>
                    <a href="/major/IT" className="line">IT융합응용공학과</a>
                    <a href="/major/electronic" className="line">전자공학과</a>
                </div>
            </li>

            <li className="navigation_list dropdown">
                <div className="navigation_link dropbtn">B</div>
                <div className="dropdown_content">
                    <a href="/major/computer" className="line">컴퓨터공학과</a>
                    <a href="/major/IT" className="line">IT융합응용공학과</a>
                    <a href="/major/electronic" className="line">전자공학과</a>
                </div>
            </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Nav;
