import React, { useContext } from "react";
import "./Intro.css";

 
 
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
 

  // context
  

  return (
    <div className="Intro container flex" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          
          <span >Hy! I Am</span>
          <span>Hassan Abdullah</span>
          <div id="typing"> <span>Senior <span class="designer">UI/UX Designer</span> & Dev</span></div>
            <div id="crow">|</div>
            
          
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
        
        {/* animation */}
        
      </div>
    </div>
  );
};

export default Intro;
