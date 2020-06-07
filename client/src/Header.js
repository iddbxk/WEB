import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignUp from './SignUp';
import './css/Header.css';
import logo from './images/3.jpg';


class Header extends React.Component {

  render() {
    const styles_pknu = {
      color: 'black',
      fontSize: '50px',
      textAlign: 'center',
      float: 'left',
      width: '500px',
      height: '100px',
      textDecoration: 'none'
    }
  
    //const loginStatus = 'undefined';

    return (
      <div className="header">
        <img src={logo} alt="not_photo" width='150px' height='100px' align='left' />
        <a style={styles_pknu} href="/">{this.props.name}</a>
        
        <div>
          <Router>
            <Link to="/LoginForm">
              <button style={{ float: 'right' }}>Login</button>
            </Link>

            <Link to="/SignUp">
              <button style={{ float: 'right' }}>SignUp</button>
            </Link>

            <Switch>
              <Route path="/LoginForm" component={LoginForm} />
              <Route Path="/SignUp" component={SignUp} />
            </Switch>
          </Router>
        </div>

      </div>
    );
  }
}

Header.propTypes = {
  name : PropTypes.string
};

Header.defaultProps = {
  name : '홈트레이닝'
};

export default Header;
