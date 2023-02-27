import "./FooterStyles.css";
import { FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white"}}/>
                    <div>
                        <p>Matoshree Heights</p>
                        <p>Ambegaon, Pune 411041</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white"}}/> +91 9925275684</h4>
                </div>
                <div className="e-mail">
                    <h4><FaMailBulk size={20} style={{color:"white"}}/> nishantraut90@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Nishant Raut, CEO & Founder of Tech2etc.
                I enjoy discussing new projects and design challenges</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"white", margin: "1rem"}}/>
                <FaTwitter size={20} style={{color:"white", margin: "1rem"}}/>
                <FaLinkedin size={20} style={{color:"white", margin: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer