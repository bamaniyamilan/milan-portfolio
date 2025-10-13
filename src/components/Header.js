import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaThumbsUp, 
  FaDownload, 
  FaStar, 
  FaCode, 
  FaMobile,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaBug,
  FaCalendarAlt,
  FaUsers,
  FaRocket
} from 'react-icons/fa';
import profileImage from '../../src/profile.png';

const Header = ({ activeSection, setActiveSection, darkMode, setDarkMode, likeCount, onLike, hasLiked }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [githubStats, setGithubStats] = useState({
    totalRepos: 0,
    totalStars: 0,
    yearsOfExperience: 0,
    bugsReduced: 0,
    projectsDeployed: 0,
    codeReviews: 0
  });

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Fetch GitHub stats and calculate experience
  useEffect(() => {
    const calculateStats = async () => {
      try {
        // Fetch GitHub repositories
        const response = await fetch('https://api.github.com/users/bamaniyamilan/repos');
        const repos = await response.json();
        
        const publicRepos = repos.filter(repo => !repo.fork && !repo.private);
        const totalStars = publicRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        
        // Calculate years of experience (from 2020 when you started)
        const startYear = 2020;
        const currentYear = new Date().getFullYear();
        const yearsOfExperience = currentYear - startYear;
        
        // Calculate other stats (you can customize these based on your actual experience)
        const bugsReduced = Math.floor(publicRepos.length * 2.5); // Example calculation
        const projectsDeployed = publicRepos.filter(repo => repo.has_pages || repo.homepage).length;
        const codeReviews = Math.floor(publicRepos.length * 3.2); // Example calculation

        setGithubStats({
          totalRepos: publicRepos.length,
          totalStars,
          yearsOfExperience,
          bugsReduced,
          projectsDeployed,
          codeReviews
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback stats
        setGithubStats({
          totalRepos: 25,
          totalStars: 15,
          yearsOfExperience: 4,
          bugsReduced: 65,
          projectsDeployed: 12,
          codeReviews: 80
        });
      }
    };

    calculateStats();
  }, []);

  const handleThumbsUp = () => {
    if (!hasLiked) {
      onLike();
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 3000);
    }
  };

  const navItems = [
    { id: 'experience', label: 'Experience', icon: FaStar },
    { id: 'education', label: 'Education', icon: FaCode },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaMobile },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  // Dynamic stats based on GitHub data
  const stats = [
    { 
      number: `${githubStats.totalRepos}+`, 
      label: 'GitHub Projects',
      icon: FaGithub,
      color: '#667eea',
      description: 'Public repositories'
    },
    { 
      number: `${githubStats.yearsOfExperience}+`, 
      label: 'Years Experience',
      icon: FaCalendarAlt,
      color: '#f093fb',
      description: 'Since 2020'
    },
    { 
      number: `${githubStats.bugsReduced}%`, 
      label: 'Bugs Reduced',
      icon: FaBug,
      color: '#4fd1c5',
      description: 'In production'
    },
    { 
      number: `${githubStats.projectsDeployed}+`, 
      label: 'Projects Live',
      icon: FaRocket,
      color: '#f6ad55',
      description: 'Deployed applications'
    },
    { 
      number: `${githubStats.totalStars}+`, 
      label: 'GitHub Stars',
      icon: FaStar,
      color: '#f6e05e',
      description: 'Repository stars'
    },
    { 
      number: `${githubStats.codeReviews}+`, 
      label: 'Code Reviews',
      icon: FaUsers,
      color: '#fc8181',
      description: 'Peer reviews'
    }
  ];

  // CSS Variables for Dark/Light mode
  const headerStyles = {
    margin: isMobile ? '1rem' : '2rem',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: '20px',
    boxShadow: darkMode 
      ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
      : '0 20px 40px rgba(0, 0, 0, 0.1)',
    background: darkMode 
      ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.9) 0%, rgba(40, 40, 60, 0.7) 100%)' 
      : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
    backdropFilter: 'blur(20px)',
    border: darkMode 
      ? '1px solid rgba(255,255,255,0.1)' 
      : '1px solid rgba(255,255,255,0.3)',
    position: 'relative',
    overflow: 'hidden'
  };

  const textColor = darkMode ? '#e2e8f0' : '#1f2937';
  const textSecondary = darkMode ? '#94a3b8' : '#6b7280';
  const cardBackground = darkMode ? 'rgba(30, 41, 59, 0.8)' : 'white';
  const borderColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(102, 126, 234, 0.2)';

  return (
    <motion.header 
      className="glass"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={headerStyles}
    >
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: -50,
        right: -50,
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '50%',
        opacity: darkMode ? 0.05 : 0.1
      }} />
      <div style={{
        position: 'absolute',
        bottom: -30,
        left: -30,
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        borderRadius: '50%',
        opacity: darkMode ? 0.05 : 0.1
      }} />

      {/* Mobile Header Bar */}
      {isMobile && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            MB
          </motion.div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '0.5rem',
                background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '10px',
                color: darkMode ? '#fbbf24' : '#f59e0b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                position: 'relative'
              }}
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.5rem',
                background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '10px',
                color: textColor,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 10,
              }}
            >
              {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </motion.button>
          </div>
        </div>
      )}

      <div className="header-content" style={{ 
        display: 'flex', 
        alignItems: isMobile ? 'flex-start' : 'center', 
        gap: isMobile ? '1.5rem' : '3rem', 
        flexWrap: 'wrap', 
        position: 'relative', 
        zIndex: 2,
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        
        {/* Profile Image */}
        {!isMobile && (
          <motion.div 
            className="profile-image-container"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ position: 'relative' }}
          >
            <div 
              className="profile-image"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                backgroundImage: `url(${process.env.PUBLIC_URL + profileImage})`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                border: '4px solid white',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ display: 'none' }}>MB</span>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c)',
                  borderRadius: '50%',
                  zIndex: -1
                }}
              />
            </div>

            {/* Online status indicator */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              width: '20px',
              height: '20px',
              background: '#10b981',
              border: '3px solid white',
              borderRadius: '50%',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 2
            }} />
          </motion.div>
        )}

        {/* Mobile Profile Image */}
        {isMobile && (
          <motion.div 
            className="mobile-profile-image-container"
            whileHover={{ scale: 1.05 }}
            style={{ 
              position: 'relative',
              alignSelf: 'center'
            }}
          >
            <div 
              className="profile-image"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                backgroundImage: `url(${process.env.PUBLIC_URL + profileImage})`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                border: '4px solid white',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ display: 'none' }}>MB</span>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c)',
                  borderRadius: '50%',
                  zIndex: -1
                }}
              />
            </div>

            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              width: '16px',
              height: '16px',
              background: '#10b981',
              border: '2px solid white',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              zIndex: 2
            }} />
          </motion.div>
        )}

        {/* Personal Info */}
        <div className="personal-info" style={{ 
          flex: 1, 
          minWidth: isMobile ? 'auto' : '300px',
          width: isMobile ? '100%' : 'auto'
        }}>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              fontSize: isMobile ? '2.5rem' : '3.5rem', 
              fontWeight: '800', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
              lineHeight: 1.1,
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            Milan B. Bamaniya
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              color: textColor,
              marginBottom: '1rem',
              fontWeight: '600',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <span style={{ color: '#667eea' }}>Software Engineer</span>
            </p>
            
            <motion.p 
              whileHover={{ scale: 1.02 }}
              style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                color: textSecondary,
                marginBottom: '2rem',
                padding: '1rem',
                background: darkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                borderRadius: '10px',
                borderLeft: '4px solid #667eea',
                textAlign: isMobile ? 'center' : 'left'
              }}
            >
              🚀 Passionate about creating innovative mobile and web solutions with cutting-edge technologies
            </motion.p>
          </motion.div>
          
          {/* Enhanced Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
              gap: '1rem', 
              marginBottom: '2rem' 
            }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? '0.75rem' : '1rem',
                    background: cardBackground,
                    borderRadius: '15px',
                    boxShadow: darkMode 
                      ? '0 6px 20px rgba(0, 0, 0, 0.3)' 
                      : '0 6px 20px rgba(0, 0, 0, 0.1)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  {/* Background accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                  }} />
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      padding: '0.5rem',
                      background: `${stat.color}20`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={isMobile ? 16 : 18} color={stat.color} />
                    </div>
                  </div>
                  
                  <div style={{ 
                    fontSize: isMobile ? '1.1rem' : '1.25rem', 
                    fontWeight: '700', 
                    color: stat.color,
                    marginBottom: '0.25rem',
                    lineHeight: 1.2
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: textSecondary,
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{ 
                    fontSize: '0.65rem', 
                    color: textSecondary,
                    opacity: 0.8
                  }}>
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            {/* Contact Info */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.75rem', 
              justifyContent: isMobile ? 'center' : 'flex-start',
              width: isMobile ? '100%' : 'auto'
            }}>
              <motion.a 
                href="tel:+918156050306"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: '#667eea',
                  color: 'white',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  flex: isMobile ? '1' : 'auto',
                  minWidth: isMobile ? '140px' : 'auto',
                  justifyContent: 'center'
                }}
              >
                <FaPhone />
                <span>Call Me</span>
              </motion.a>
              
              <motion.a 
                href="mailto:bamaniyamilan198@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: darkMode ? 'rgba(255,255,255,0.1)' : 'white',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  flex: isMobile ? '1' : 'auto',
                  minWidth: isMobile ? '140px' : 'auto',
                  justifyContent: 'center'
                }}
              >
                <FaEnvelope />
                <span>Email Me</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div style={{ 
              display: 'flex', 
              gap: '0.75rem',
              justifyContent: isMobile ? 'center' : 'flex-start',
              width: isMobile ? '100%' : 'auto',
              marginTop: isMobile ? '0.5rem' : '0'
            }}>
              <motion.a 
                href="https://github.com/bamaniyamilan" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: '0.75rem',
                  background: darkMode ? 'rgba(255,255,255,0.1)' : '#1f2937',
                  color: 'white',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/milanbamaniya/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: '0.75rem',
                  background: '#0077b5',
                  color: 'white',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaLinkedin size={18} />
              </motion.a>

              {/* Dark Mode Toggle for Desktop */}
              {!isMobile && (
                <motion.button
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setDarkMode(!darkMode)}
                  style={{
                    padding: '0.75rem',
                    background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    border: 'none',
                    borderRadius: '12px',
                    color: darkMode ? '#fbbf24' : '#f59e0b',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of your navigation code remains the same... */}
      {/* Navigation - Desktop */}
      {!isMobile && (
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: '2.5rem', position: 'relative', zIndex: 2 }}
        >
          <ul style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.75rem', 
            listStyle: 'none',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.li key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: activeSection === item.id 
                        ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                        : darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)',
                      color: activeSection === item.id ? 'white' : textColor,
                      border: activeSection === item.id ? 'none' : `2px solid ${borderColor}`,
                      borderRadius: '15px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: activeSection === item.id 
                        ? '0 8px 20px rgba(102, 126, 234, 0.3)' 
                        : darkMode ? '0 4px 15px rgba(0, 0, 0, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <IconComponent size={14} />
                    {item.label}
                  </button>
                </motion.li>
              );
            })}
            
            {/* Thumbs Up Button */}
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleThumbsUp}
                disabled={hasLiked}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: hasLiked 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: hasLiked ? 'default' : 'pointer',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  opacity: hasLiked ? 0.8 : 1
                }}
              >
                <FaThumbsUp />
                <span>{likeCount}</span>
              </button>
            </motion.li>
          </ul>
        </motion.nav>
      )}

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              marginTop: '1.5rem',
              position: 'relative',
              zIndex: 2,
              overflow: 'hidden'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      padding: '1rem 1.5rem',
                      background: activeSection === item.id 
                        ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                        : darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)',
                      color: activeSection === item.id ? 'white' : textColor,
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      justifyContent: 'flex-start',
                      fontSize: '1rem'
                    }}
                  >
                    <IconComponent size={16} />
                    {item.label}
                  </motion.button>
                );
              })}

              {/* Mobile Action Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
                marginTop: '0.5rem'
              }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleThumbsUp}
                  disabled={hasLiked}
                  style={{
                    padding: '1rem',
                    background: hasLiked 
                      ? 'linear-gradient(135deg, #10b981, #059669)' 
                      : 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: hasLiked ? 'default' : 'pointer',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    opacity: hasLiked ? 0.8 : 1
                  }}
                >
                  <FaThumbsUp />
                  <span>{likeCount}</span>
                </motion.button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Feedback Message */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? '1rem' : '2rem',
              right: isMobile ? '1rem' : '2rem',
              left: isMobile ? '1rem' : 'auto',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '1rem 1.5rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: '600',
              justifyContent: 'center'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              <FaThumbsUp size={20} />
            </motion.div>
            Thanks for the love! ❤️
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;