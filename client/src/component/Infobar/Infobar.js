import React from 'react';
import "./Infobar.css"
import closeIcon from '../../Icon/closeIcon.png'
import onlineIcon from '../../Icon/onlineIcon.png'


function InfoBar({room}) {
   return (<div className="infoBar">
      <div className="leftInnerContainer">
         <img className="onlineIcon" src={onlineIcon} alt = "online Image" />
         <h3>{ room}</h3>
         </div>
         <div className="rightInnerContainer">
        <a href="/">
          <img className="closeIcon" src={closeIcon} alt = "close Image" /> 
        </a>
    
</div>
    </div>)
}

export default InfoBar;