import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>

      {formSubmitted ? (
        <div className="success-message">
          <h2>Thank you for reaching out! We will get back to you soon.</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}

      <div className="contact-details">
        <div className="contact-item">
          <a href="mailto:support@bodima.lk" className="contact-button">
            <i className="fas fa-envelope"></i> Email Us
          </a>
        </div>
        <div className="contact-item">
          <a href="tel:+94771234567" className="contact-button">
            <i className="fas fa-phone-alt"></i> Call Us
          </a>
        </div>
      </div>

      <div className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126897.90616250427!2d79.97334306386695!3d6.927079257053947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b20f28fe7f1%3A0xa47c4212d5a5c8a9!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1623239028625!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="social-media">
        <a href="https://facebook.com/bodima.lk" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/bodima.lk" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/bodima.lk" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
