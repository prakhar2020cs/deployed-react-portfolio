import { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };
  
  const copyEmail = () => {
    navigator.clipboard.writeText('prakhar06035@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationCircle1}></div>
        <div className={styles.decorationCircle2}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Email</div>
                <a 
                  href="mailto:prakhar06035@gmail.com" 
                  className={styles.contactValue}
                  onClick={copyEmail}
                >
                  prakhar06035@gmail.com
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaPhone />
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Phone</div>
                <a href="tel:+9289104541" className={styles.contactValue}>
                  +91 9289104541
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Location</div>
                <div className={styles.contactValue}>
                  India
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/prakhar2020cs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/prakhar-sharma-96a831272" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          {/* <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Project inquiry / Job opportunity"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};