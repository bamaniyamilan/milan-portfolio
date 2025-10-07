import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaEye, FaGraduationCap, FaTimes } from 'react-icons/fa';

const Certificates = ({ darkMode }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const certificates = [
    {
      id: 1,
      title: "Android Development Certification",
      issuer: "Google Developers",
      date: "2022",
      description: "Professional certification in Android development with Kotlin and Jetpack Compose",
      file: "/certificates/android-certificate.pdf"
    },
    {
      id: 2,
      title: "React.js Professional Certificate",
      issuer: "Meta",
      date: "2021",
      description: "Advanced React.js development including hooks, context, and performance optimization",
      file: "/certificates/react-certificate.pdf"
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2020",
      description: "Comprehensive full-stack development with MERN stack",
      file: "/certificates/fullstack-certificate.pdf"
    },
    {
      id: 4,
      title: "Kotlin Programming",
      issuer: "JetBrains Academy",
      date: "2022",
      description: "Advanced Kotlin programming and Android development concepts",
      file: "/certificates/kotlin-certificate.pdf"
    },
    {
      id: 5,
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "2021",
      description: "Cloud infrastructure and services with Amazon Web Services",
      file: "/certificates/aws-certificate.pdf"
    },
    {
      id: 6,
      title: "Agile Project Management",
      issuer: "Scrum Alliance",
      date: "2020",
      description: "Agile methodologies and Scrum framework certification",
      file: "/certificates/agile-certificate.pdf"
    }
  ];

  const cardStyle = {
    background: darkMode ? 'var(--bg-secondary)' : 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: darkMode 
      ? '0 8px 25px rgba(0, 0, 0, 0.3)' 
      : '0 8px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : 'none',
    cursor: 'pointer'
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        marginBottom: isMobile ? '1.5rem' : '2rem'
      }}>
        Certifications & Achievements
      </h2>

      {/* Certificates Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: isMobile ? '1.5rem' : '2rem' 
      }}>
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: isMobile ? 0 : -5, scale: isMobile ? 1 : 1.02 }}
            style={cardStyle}
            onClick={() => setSelectedCertificate(certificate)}
          >
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: isMobile ? '1.5rem' : '2rem',
              textAlign: 'center',
              color: 'white'
            }}>
              <FaGraduationCap size={isMobile ? 30 : 40} style={{ marginBottom: '1rem' }} />
              <h3 style={{ 
                fontSize: isMobile ? '1.1rem' : '1.25rem', 
                fontWeight: '600',
                margin: 0,
                lineHeight: 1.3
              }}>
                {certificate.title}
              </h3>
            </div>
            
            <div style={{ padding: isMobile ? '1.25rem' : '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ 
                  color: 'var(--primary-color)', 
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontSize: isMobile ? '1rem' : '1.1rem'
                }}>
                  {certificate.issuer}
                </p>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: isMobile ? '0.85rem' : '0.875rem'
                }}>
                  Issued: {certificate.date}
                </p>
              </div>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: isMobile ? '1.25rem' : '1.5rem',
                lineHeight: '1.6',
                fontSize: isMobile ? '0.9rem' : '0.95rem'
              }}>
                {certificate.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem',
                flexDirection: isMobile ? 'column' : 'row'
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(certificate);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: isMobile ? '0.75rem' : '0.5rem 1rem',
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '0.9rem' : '0.875rem',
                    justifyContent: 'center',
                    flex: isMobile ? 1 : 1
                  }}
                >
                  <FaEye size={isMobile ? 14 : 12} />
                  View Details
                </motion.button>
                
                <motion.a
                  href={certificate.file}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: isMobile ? '0.75rem' : '0.5rem 1rem',
                    background: darkMode ? 'rgba(255,255,255,0.1)' : 'var(--text-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.9rem' : '0.875rem',
                    justifyContent: 'center',
                    flex: isMobile ? 1 : 1
                  }}
                >
                  <FaDownload size={isMobile ? 14 : 12} />
                  Download
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: isMobile ? '1rem' : '2rem'
            }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background: darkMode ? 'var(--bg-secondary)' : 'white',
                borderRadius: '15px',
                padding: isMobile ? '1.5rem' : '2rem',
                maxWidth: isMobile ? '100%' : '600px',
                width: '100%',
                maxHeight: isMobile ? '90vh' : '80vh',
                overflow: 'auto',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : 'none'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <h3 style={{ 
                  fontSize: isMobile ? '1.3rem' : '1.5rem', 
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    padding: '0.25rem',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ 
                  color: 'var(--primary-color)', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  fontSize: isMobile ? '1.1rem' : '1.2rem'
                }}>
                  {selectedCertificate.issuer}
                </p>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1rem',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  Issued: {selectedCertificate.date}
                </p>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                  {selectedCertificate.description}
                </p>
              </div>
              
              <div style={{
                background: darkMode ? 'rgba(255,255,255,0.05)' : 'var(--bg-secondary)',
                borderRadius: '8px',
                padding: isMobile ? '1.5rem' : '2rem',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                <FaGraduationCap size={isMobile ? 40 : 60} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  Certificate Preview
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  (Certificate image or PDF would be displayed here)
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}>
                <motion.a
                  href={selectedCertificate.file}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    flex: 1,
                    justifyContent: 'center',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  <FaDownload />
                  Download Certificate
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Certificates;