import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: isMobile ? '1rem' : '1rem',
    background: darkMode ? 'var(--bg-secondary)' : 'white',
    borderRadius: '10px',
    boxShadow: darkMode 
      ? '0 4px 15px rgba(0, 0, 0, 0.3)' 
      : '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : 'none'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--border-color)',
    borderRadius: '8px',
    fontSize: '1rem',
    background: darkMode ? 'var(--bg-secondary)' : 'white',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease'
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass"
      style={{ 
        padding: isMobile ? '1rem' : '2rem', 
        marginBottom: isMobile ? '1rem' : '2rem', 
        borderRadius: '20px',
        background: darkMode ? 'rgba(30, 30, 40, 0.25)' : 'rgba(255, 255, 255, 0.25)',
        border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)'
      }}
    >
      <h2 style={{ 
        fontSize: isMobile ? '2rem' : '2.5rem', 
        marginBottom: isMobile ? '1.5rem' : '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>
        Get In Touch
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: isMobile ? '2rem' : '3rem', 
        alignItems: 'start' 
      }}>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{ 
            fontSize: isMobile ? '1.4rem' : '1.5rem', 
            color: 'var(--text-primary)', 
            marginBottom: isMobile ? '1rem' : '1.5rem',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            Let's Connect
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={contactItemStyle}
            >
              <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '45px' : '50px',
                height: isMobile ? '45px' : '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FaEnvelope size={isMobile ? 18 : 20} />
              </div>
              <div>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: isMobile ? '0.85rem' : '0.875rem',
                  marginBottom: '0.25rem'
                }}>
                  Email
                </p>
                <p style={{ 
                  color: 'var(--text-primary)', 
                  fontWeight: '600',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  bamaniyamilan198@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={contactItemStyle}
            >
              <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '45px' : '50px',
                height: isMobile ? '45px' : '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FaPhone size={isMobile ? 18 : 20} />
              </div>
              <div>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: isMobile ? '0.85rem' : '0.875rem',
                  marginBottom: '0.25rem'
                }}>
                  Phone
                </p>
                <p style={{ 
                  color: 'var(--text-primary)', 
                  fontWeight: '600',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  +91 8156050306
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={contactItemStyle}
            >
              <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '45px' : '50px',
                height: isMobile ? '45px' : '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FaMapMarkerAlt size={isMobile ? 18 : 20} />
              </div>
              <div>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: isMobile ? '0.85rem' : '0.875rem',
                  marginBottom: '0.25rem'
                }}>
                  Location
                </p>
                <p style={{ 
                  color: 'var(--text-primary)', 
                  fontWeight: '600',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  Pune, Maharashtra, India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div style={{ marginTop: isMobile ? '1.5rem' : '2rem' }}>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              marginBottom: isMobile ? '0.75rem' : '1rem',
              textAlign: isMobile ? 'center' : 'left',
              fontSize: isMobile ? '1.1rem' : '1.2rem'
            }}>
              Follow me on
            </h4>
            <div style={{ 
              display: 'flex', 
              gap: '0.75rem',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <motion.a
                href="https://github.com/bamaniyamilan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: isMobile ? '0.75rem' : '0.75rem',
                  background: darkMode ? 'rgba(255,255,255,0.1)' : 'var(--text-primary)',
                  color: 'white',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaGithub size={isMobile ? 18 : 20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/milanbamaniya/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: isMobile ? '0.75rem' : '0.75rem',
                  background: '#0077b5',
                  color: 'white',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaLinkedin size={isMobile ? 18 : 20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          style={{
            background: darkMode ? 'var(--bg-secondary)' : 'white',
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '15px',
            boxShadow: darkMode 
              ? '0 8px 25px rgba(0, 0, 0, 0.3)' 
              : '0 8px 25px rgba(0, 0, 0, 0.1)',
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : 'none'
          }}
        >
          <h3 style={{ 
            fontSize: isMobile ? '1.4rem' : '1.5rem', 
            color: 'var(--text-primary)', 
            marginBottom: isMobile ? '1rem' : '1.5rem',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            Send me a message
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
              gap: '1rem' 
            }}>
              <div>
                <label htmlFor="name" style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)',
                fontWeight: '500',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label htmlFor="message" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)',
                fontWeight: '500',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={isMobile ? 4 : 6}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: isMobile ? '120px' : '150px'
                }}
                placeholder="Enter your message"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: isMobile ? '1rem' : '1rem 2rem',
                background: 'var(--primary-color)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '0.5rem'
              }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;