import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a react front-end developer. 
            I create responsivve secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://wallpaperaccess.com/full/3949080.png" alt="imag"/>
                </div>
                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="imag"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;