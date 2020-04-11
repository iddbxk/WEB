import React from 'react';
import './css/Nav.css';

function Nav() {
  return (
    <div id="nav">
        <ul className="navigation">
            <li className="navigation_list dropdown">
                <a href="/" className="navigation_link dropbtn">공과대</a>
                <div className="dropdown_content">
                    <a href="/major/computer" className="line">컴퓨터공학과</a>
                    <a href="/major/IT" className="line">IT융합응용공학과</a>
                    <a href="/major/electronic" className="line">전자공학과</a>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default Nav;
