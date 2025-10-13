import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaInstagram
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = ({ darkMode }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // WhatsApp direct message function
  const sendWhatsAppMessage = () => {
    const phoneNumber = '918156050306';
    const message = `Hello Milan! I'm interested in connecting with you regarding...`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Direct email function
  const sendEmail = () => {
    window.location.href = 'mailto:bamaniyamilan108@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Milan,%20I%20would%20like%20to%20connect%20with%20you...';
  };

  // Direct call function
  const makeCall = () => {
    window.open('tel:+918156050306', '_self');
  };

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      description: "Chat instantly",
      action: sendWhatsAppMessage,
      color: "#25D366",
      gradient: "linear-gradient(135deg, #25D366, #128C7E)"
    },
    {
      icon: SiGmail,
      title: "Email",
      description: "bamaniyamilan108@gmail.com",
      action: sendEmail,
      color: "#EA4335",
      gradient: "linear-gradient(135deg, #EA4335, #D14836)"
    },
    {
      icon: FaPhone,
      title: "Call Me",
      description: "+91 8156050306",
      action: makeCall,
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      description: "Pune, Maharashtra, India",
      action: null,
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/bamaniyamilan",
      color: "#333",
      name: "GitHub"
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/milanbamaniya/",
      color: "#0077b5",
      name: "LinkedIn"
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/therealdexterous8",
      color: "#0088cc",
      name: "Instagram"
    },
    {
      icon: FaDiscord,
      url: "https://discord.com/users/milanbamaniya8",
      color: "#5865F2",
      name: "Discord"
    }
  ];

  const collaborationAreas = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "React.js, Node.js, MERN Stack",
      color: "#667eea"
    },
    {
      icon: FaRocket,
      title: "Mobile Apps",
      description: "Android, React Native, Kotlin",
      color: "#f093fb"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Creative solutions & new ideas",
      color: "#f6ad55"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass"
      style={{ 
        padding: isMobile ? '1rem' : '2rem', 
        marginBottom: isMobile ? '1rem' : '2rem', 
        borderRadius: '20px',
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)' 
          : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248, 250, 252, 0.7) 100%)',
        border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 10% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(37, 211, 102, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h2 style={{ 
          fontSize: isMobile ? '2rem' : '2.5rem', 
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          fontWeight: '800'
        }}>
          Let's Connect
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: darkMode ? '#94a3b8' : '#6b7280',
          fontSize: isMobile ? '1rem' : '1.1rem',
          marginBottom: isMobile ? '1.5rem' : '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: 1.6
        }}>
          Ready to bring your ideas to life? Let's discuss your project and create something amazing together!
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: isMobile ? '2rem' : '3rem', 
        alignItems: 'start',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 style={{ 
            fontSize: isMobile ? '1.4rem' : '1.6rem', 
            color: darkMode ? '#e2e8f0' : '#1f2937', 
            marginBottom: isMobile ? '1.5rem' : '2rem',
            textAlign: isMobile ? 'center' : 'left',
            fontWeight: '700'
          }}>
            Quick Connect
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {contactMethods.map((method, index) => {
              const MethodIcon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ 
                    scale: method.action ? 1.05 : 1.02, 
                    y: method.action ? -5 : 0 
                  }}
                  whileTap={{ scale: method.action ? 0.95 : 1 }}
                  onClick={method.action}
                  style={{
                    background: darkMode 
                      ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.8) 0%, rgba(40, 40, 60, 0.6) 100%)' 
                      : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    boxShadow: darkMode 
                      ? '0 8px 25px rgba(0, 0, 0, 0.3)' 
                      : '0 8px 25px rgba(0, 0, 0, 0.1)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)',
                    textAlign: 'center',
                    cursor: method.action ? 'pointer' : 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Background Accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: method.gradient,
                  }} />

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      background: method.gradient,
                      color: 'white',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 20px ${method.color}40`
                    }}>
                      <MethodIcon size={24} />
                    </div>
                    
                    <div>
                      <h4 style={{
                        color: darkMode ? '#e2e8f0' : '#1f2937',
                        fontSize: '1.1rem',
                        marginBottom: '0.5rem',
                        fontWeight: '600'
                      }}>
                        {method.title}
                      </h4>
                      <p style={{
                        color: darkMode ? '#94a3b8' : '#6b7280',
                        fontSize: '0.9rem',
                        lineHeight: 1.4
                      }}>
                        {method.description}
                      </p>
                    </div>

                    {method.action && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                          padding: '0.5rem 1rem',
                          background: method.gradient,
                          color: 'white',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          marginTop: '0.5rem'
                        }}
                      >
                        Connect
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{ 
              color: darkMode ? '#e2e8f0' : '#1f2937', 
              marginBottom: '1rem',
              textAlign: isMobile ? 'center' : 'left',
              fontSize: isMobile ? '1.2rem' : '1.3rem',
              fontWeight: '600'
            }}>
              Follow My Journey
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
              gap: '1rem'
            }}>
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: darkMode 
                        ? 'rgba(255,255,255,0.05)' 
                        : 'rgba(255,255,255,0.8)',
                      padding: '1rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      border: darkMode 
                        ? '1px solid rgba(255,255,255,0.1)' 
                        : '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <SocialIcon size={24} color={social.color} />
                    <span style={{
                      color: darkMode ? '#e2e8f0' : '#374151',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}>
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Collaboration Areas - Replaced Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: darkMode 
              ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.8) 0%, rgba(40, 40, 60, 0.6) 100%)' 
              : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            padding: isMobile ? '1.5rem' : '2.5rem',
            borderRadius: '20px',
            boxShadow: darkMode 
              ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
              : '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%)',
            zIndex: 0
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.6rem', 
              color: darkMode ? '#e2e8f0' : '#1f2937', 
              marginBottom: isMobile ? '1rem' : '1.5rem',
              textAlign: 'center',
              fontWeight: '700'
            }}>
              Let's Collaborate On
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {collaborationAreas.map((area, index) => {
                const AreaIcon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      background: darkMode 
                        ? 'rgba(255,255,255,0.05)' 
                        : 'rgba(255,255,255,0.8)',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      borderLeft: `4px solid ${area.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{
                      background: `${area.color}20`,
                      color: area.color,
                      borderRadius: '12px',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <AreaIcon size={20} />
                    </div>
                    <div>
                      <h4 style={{
                        color: darkMode ? '#e2e8f0' : '#1f2937',
                        fontSize: '1.1rem',
                        marginBottom: '0.25rem',
                        fontWeight: '600'
                      }}>
                        {area.title}
                      </h4>
                      <p style={{
                        color: darkMode ? '#94a3b8' : '#6b7280',
                        fontSize: '0.9rem'
                      }}>
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{
                textAlign: 'center',
                marginTop: '2rem',
                padding: '1.5rem',
                background: darkMode 
                  ? 'rgba(255,255,255,0.05)' 
                  : 'rgba(255,255,255,0.5)',
                borderRadius: '15px',
                border: darkMode 
                  ? '1px solid rgba(255,255,255,0.1)' 
                  : '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <h4 style={{
                color: darkMode ? '#e2e8f0' : '#1f2937',
                fontSize: '1.2rem',
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                Ready to Start?
              </h4>
              <p style={{
                color: darkMode ? '#94a3b8' : '#6b7280',
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
                lineHeight: 1.5
              }}>
                Choose any contact method above and let's discuss your project requirements!
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendWhatsAppMessage}
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  margin: '0 auto',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)'
                }}
              >
                <FaWhatsapp size={20} />
                Message on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '1rem',
          marginTop: '2rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {[
          { number: '24h', label: 'Response Time' },
          { number: '50+', label: 'Projects Done' },
          { number: '100%', label: 'Client Satisfaction' },
          { number: '4+', label: 'Years Experience' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
            style={{
              background: darkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(255,255,255,0.8)',
              padding: '1.5rem 1rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: darkMode 
                ? '1px solid rgba(255,255,255,0.1)' 
                : '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <div style={{
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: '700',
              color: '#667eea',
              marginBottom: '0.5rem'
            }}>
              {stat.number}
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: darkMode ? '#94a3b8' : '#6b7280',
              fontWeight: '600'
            }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;