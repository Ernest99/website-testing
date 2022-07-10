import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Btn from './Btn';




const Header = () => {
    let url = "";
    let name = "ERNEST GHANSAH";
       // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "UX Designer", "Web Designer", "Creator"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
        <header>
            <nav>
                <a href={url} className="logo">E<span className='color'>G</span></a>
                <ul className="nav-list">
                    <li><a href={url} className="active">Home</a></li>
                    <li><a href={url}>About</a></li>
                    <li><a href={url}>Service</a></li>
                    <li><a href={url}>Skills</a></li>
                    <li><a href={url}>Project</a></li>
                    <li><a href={url}>Contact</a></li>
                </ul>
            </nav>
            <div className="header-text">
                <h3>HELLO! I'M</h3>
                <h1>{name}</h1>
                <h2 style={{
            textAlign: 'center'
        }}>I'm a <span ref={el}></span></h2>
      {/* Element to display typing strings */}
      
            </div>
        </header>
    </div>
  )
}

export default Header