// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogleScholar, faMedium, faDev } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gke5phq', 'template_5u1gwet', e.target, 'mn1J8fMj_hFQnU2cB')
      .then((result) => {
        console.log("Email Sent:", result.text);
        setIsSent(true);
        setIsError(false);
        e.target.reset(); // ✅ Clears form after success
        setTimeout(() => setIsSent(false), 5000); // ✅ Hides success message after 5s
      })
      .catch((error) => {
        console.log("Email Error:", error.text);
        setIsError(true);
        setTimeout(() => setIsError(false), 5000); // ✅ Hides error message after 5s
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
        {isSent && <p className="success-message">✅ Your message has been sent successfully!</p>}
        {isError && <p className="error-message">❌ Oops! Something went wrong. Please try again.</p>}
      </form>

      <div className="social-divider"></div> 

      <div className="social-links">
        <a href="mailto:shubhamd23@vt.edu" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/shubhdesh/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Shubhs0411" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://scholar.google.co.uk/citations?view_op=list_works&hl=en&user=ezYZLzgAAAAJ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogleScholar} />
        </a>
        <a href="https://medium.com/@shubhamdshmkh1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a href="https://devpost.com/Shubhs0411?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDev} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
