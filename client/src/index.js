import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import Bottom from './Bottom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Nav/>
    <Content/>
    <Bottom/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
