import React from 'react';
import './Footer.scss';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="footer__social-icon" />,
      // title: "Email",
      info: "jeyaseelan869583@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jeyaseelan869583@gmail.com",
      action: "Send Email"
    },
    {
      icon: <FaWhatsapp className="footer__social-icon" />,
      // title: "WhatsApp",
      info: "+91 6382100595",
      link: "https://wa.me/916382100595",
      action: "Chat Now"
    },
    {
      icon: <MdLocationOn className="footer__social-icon" />,
      // title: "Location",
      info: "Sivagurunathapuram, Surandai, Tenkasi, TamilNadu - 627859",
      link: "https://maps.google.com?q=Sivagurunathapuram,Surandai,Tenkasi,TamilNadu,627859",
      action: "View Map"
    },
    {
      icon: <FaLinkedin className="footer__social-icon" />,
      // title: "LinkedIn",
      info: "linkedin.com/in/jeyaseelan-b-jm112002",
      link: "https://www.linkedin.com/in/jeyaseelan-b-jm112002",
      action: "Connect"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer__decoration footer__decoration--1"></div>
      <div className="footer__decoration footer__decoration--2"></div>
      
      <div className="footer__container">
        <h1 className="footer__title"><span className="footer__title-inner"></span>Jeyaseelan B</h1>
        <span className="footer__subtitle"><span className="footer__subtitle-inner"></span>Frontend Developer</span>
        
        <div className="footer__social">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link} 
              className="footer__social-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {method.icon}
              <span>{method.title}</span>
            </a>
          ))}
        </div>
        
        <p className="footer__copy"><span className="footer__copy-inner"></span>© {new Date().getFullYear()} Jeyaseelan B. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;