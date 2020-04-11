import React from 'react';
import './css/Content.css';

function Content() {
  return (
   <div id="content" className="clearfix">
       <div className="section_main">
           <div className="section">Section</div>
           <div className="article">Article</div>
       </div>
       <div className="aside">Aside</div>
   </div>
  );
}

export default Content;
