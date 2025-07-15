import React, { useState } from 'react';
import './Contact.scss';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdSend, MdLocationOn, MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="contact__icon" />,
      title: "Email",
      info: "jeyaseelan869583@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jeyaseelan869583@gmail.com",
      action: "Send Email"
    },
    {
      icon: <FaWhatsapp className="contact__icon" />,
      title: "WhatsApp",
      info: "+91 6382100596",
      link: "https://wa.me/916382100596",
      action: "Chat Now"
    },
    {
      icon: <MdLocationOn className="contact__icon" />,
      title: "Location",
      info: "Sivagurunathapuram, Surandai, Tenkasi, TamilNadu - 627859",
      link: "https://maps.google.com?q=Sivagurunathapuram,Surandai,Tenkasi,TamilNadu,627859",
      action: "View Map"
    },
    {
      icon: <FaLinkedin className="contact__icon" />,
      title: "LinkedIn",
      info: "Jeyaseelan B",
      link: "https://www.linkedin.com/in/jeyaseelan-b-jm112002",
      action: "Connect"
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="contact__decor decor-1"></div>
      <div className="contact__decor decor-2"></div>
      
      <div className="container">
        <div className="section__header">
          <motion.h2 
            className="section__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Let's talk!
          </motion.p>
        </div>
        
        <div className="contact__content">
          <div className="contact__info">
            <motion.div 
              className="contact__illustration"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Illustration can be added here */}
            </motion.div>
            
            <div className="contact__methods">
              {contactMethods.map((method, index) => (
                <motion.div 
                  className="contact__card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="contact__icon-box">
                    {method.icon}
                  </div>
                  <div className="contact__details">
                    <h3 className="contact__title">{method.title}</h3>
                    <span className="contact__data">{method.info}</span>
                  </div>
                  <a 
                    href={method.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact__link"
                  >
                    {method.action} <span className="contact__link-arrow">→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="contact__form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="form__title">Send Me a Message</h3>
            <p className="form__subtitle">I'll get back to you within 24 hours</p>
            
            <div className="form__group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" " 
                className="form__input" 
                id="name"
                required
              />
              <label htmlFor="name" className="form__label">Your Name</label>
              <span className="form__underline"></span>
            </div>
            
            <div className="form__group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" " 
                className="form__input" 
                id="email"
                required
              />
              <label htmlFor="email" className="form__label">Email Address</label>
              <span className="form__underline"></span>
            </div>
            
            <div className="form__group">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder=" " 
                className="form__input" 
                id="subject"
                required
              />
              <label htmlFor="subject" className="form__label">Subject</label>
              <span className="form__underline"></span>
            </div>
            
            <div className="form__group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" " 
                className="form__input form__textarea"
                id="message"
                required
              ></textarea>
              <label htmlFor="message" className="form__label">Your Message</label>
              <span className="form__underline"></span>
            </div>
            
            <div className="form__footer">
              <motion.button 
                type="submit" 
                className="btn btn--primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
                <MdSend className="btn__icon" />
              </motion.button>
              
              {formStatus.success && (
                <motion.div 
                  className="form__status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.div>
              )}
              
              {formStatus.error && (
                <motion.div 
                  className="form__status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Error sending message. Please try again.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;