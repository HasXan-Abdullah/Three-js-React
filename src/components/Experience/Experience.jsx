import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" >8+</div>
        <span >years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >20+</div>
        <span  >completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span  >companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
