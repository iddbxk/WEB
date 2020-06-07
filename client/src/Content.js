import React from 'react';

import Section from './Section';
import Article from './Article';
import Aside from './Aside';

import './css/Content.css';


class Content extends React.Component {
  render() {
    return (
      <div id="content" className="clearfix">
        <div className="section_main">
          <div><Section></Section></div>
          <div><Article></Article></div>
        </div>
        <div><Aside></Aside></div>
      </div>
    );
  }
}


export default Content;
