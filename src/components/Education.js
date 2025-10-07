import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = ({ darkMode }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const education = [
    {
      degree: "MSc in Information Technology and Computer Application",
      institution: "Hemchandracharya North Gujarat University",
      period: "Jul 2018 – Dec 2020",
      location: "Patan, India",
      details: "Specialized in advanced IT concepts and computer applications"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Parul University",
      period: "Jun 2015 – Jun 2018",
      location: "Vadodara, India",
      details: "Focused on fundamental computer science and programming concepts"
    }
  ];

  const cardStyle = {
    background: darkMode ? 'var(--bg-secondary)' : 'white',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: '15px',
    boxShadow: darkMode 
      ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
      : '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid var(--primary-color)',
    position: 'relative'
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
        Education
      </h2>

      <div style={{ display: 'grid', gap: isMobile ? '1.5rem' : '2rem' }}>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={cardStyle}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: isMobile ? '1rem' : '1.5rem',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FaGraduationCap size={isMobile ? 20 : 24} />
              </div>
              
              <div style={{ flex: 1, width: '100%' }}>
                <h3 style={{ 
                  fontSize: isMobile ? '1.3rem' : '1.5rem', 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}>
                  {edu.degree}
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '1.1rem' : '1.2rem', 
                  color: 'var(--primary-color)', 
                  fontWeight: '600',
                  marginBottom: isMobile ? '0.75rem' : '1rem'
                }}>
                  {edu.institution}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: isMobile ? '1rem' : '1.5rem', 
                  marginBottom: isMobile ? '0.75rem' : '1rem' 
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <FaCalendarAlt color="var(--primary-color)" size={isMobile ? 12 : 14} />
                    <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{edu.period}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <FaMapMarkerAlt color="var(--primary-color)" size={isMobile ? 12 : 14} />
                    <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{edu.location}</span>
                  </div>
                </div>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  {edu.details}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          ...cardStyle,
          marginTop: isMobile ? '1.5rem' : '2rem'
        }}
      >
        <h3 style={{ 
          fontSize: isMobile ? '1.3rem' : '1.5rem', 
          color: 'var(--text-primary)', 
          marginBottom: isMobile ? '1rem' : '1.5rem',
          borderBottom: `2px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'var(--border-color)'}`,
          paddingBottom: '0.5rem'
        }}>
          Additional Certifications
        </h3>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: isMobile ? '0.95rem' : '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: 'var(--primary-color)' }}>•</span>
            Android Development Certification - Google Developers
          </p>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: isMobile ? '0.95rem' : '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: 'var(--primary-color)' }}>•</span>
            React.js Professional Certificate - Meta
          </p>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: isMobile ? '0.95rem' : '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: 'var(--primary-color)' }}>•</span>
            Full Stack Web Development - Udemy
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Education;