import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

// Floating Widget Component
const FloatingWidget = ({ darkMode, likeCount, onLike, hasLiked }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);
  const [hearts, setHearts] = useState([]);

  // Initialize visitor count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem('visitorCount');
    const count = savedCount ? parseInt(savedCount) : Math.floor(Math.random() * 1000) + 500;
    setVisitorCount(count);
    localStorage.setItem('visitorCount', (count + 1).toString());
  }, []);

   useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.style.backgroundColor = '#0f172a';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  
  const createHeart = () => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 100,
      opacity: 1
    };
    setHearts(prev => [...prev, newHeart]);
    
    // Remove heart after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      onLike();
      createHeart();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className={`floating-widget ${darkMode ? 'dark' : 'light'}`}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        display: isVisible ? 'block' : 'none'
      }}
    >
      {/* Animated Hearts */}
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, y: 0, scale: 0 }}
          animate={{ opacity: 0, y: -100, scale: 1.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            bottom: '0',
            color: '#ff6b6b',
            fontSize: '1.5rem',
            pointerEvents: 'none'
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Main Widget */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.95) 0%, rgba(40, 40, 60, 0.9) 100%)' 
            : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
          backdropFilter: 'blur(20px)',
          border: darkMode 
            ? '1px solid rgba(255,255,255,0.2)' 
            : '1px solid rgba(255,255,255,0.3)',
          borderRadius: '20px',
          padding: '1.5rem',
          boxShadow: darkMode 
            ? '0 15px 35px rgba(0, 0, 0, 0.3)' 
            : '0 15px 35px rgba(0, 0, 0, 0.1)',
          minWidth: '200px',
          textAlign: 'center'
        }}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(false)}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: 'none',
            border: 'none',
            color: darkMode ? '#94a3b8' : '#6b7280',
            cursor: 'pointer',
            fontSize: '1rem',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
          }}
        >
          ×
        </motion.button>

        {/* Visitor Count */}
        <div style={{ marginBottom: '1.5rem' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}
          >
            <div style={{
              width: '12px',
              height: '12px',
              background: '#10b981',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{
              color: darkMode ? '#e2e8f0' : '#1f2937',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Live Visitors
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              color: darkMode ? '#cbd5e1' : '#4b5563',
              fontSize: '0.8rem',
              margin: 0
            }}
          >
            Total Views
          </motion.p>
          
          <motion.h3
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            style={{
              color: darkMode ? '#667eea' : '#2563eb',
              fontSize: '2rem',
              fontWeight: '800',
              margin: '0.25rem 0',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {visitorCount}
          </motion.h3>
        </div>

        {/* Like Section */}
        <div style={{
          borderTop: darkMode 
            ? '1px solid rgba(255,255,255,0.1)' 
            : '1px solid rgba(0,0,0,0.1)',
          paddingTop: '1.5rem'
        }}>
          <motion.button
            whileHover={{ scale: hasLiked ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            disabled={hasLiked}
            style={{
              background: hasLiked 
                ? 'linear-gradient(135deg, #10b981, #059669)' 
                : 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '0.75rem 1.5rem',
              cursor: hasLiked ? 'default' : 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center',
              width: '100%',
              opacity: hasLiked ? 0.8 : 1,
              boxShadow: hasLiked 
                ? '0 4px 15px rgba(16, 185, 129, 0.3)' 
                : '0 4px 15px rgba(255, 107, 107, 0.3)'
            }}
          >
            <motion.div
              animate={hasLiked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              ❤️
            </motion.div>
            <span>{hasLiked ? 'Liked!' : 'Like this Portfolio'}</span>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              color: darkMode ? '#94a3b8' : '#6b7280',
              fontSize: '0.8rem',
              margin: '0.75rem 0 0 0',
              fontWeight: '500'
            }}
          >
            {likeCount} people liked this
          </motion.p>
        </div>

        {/* Mini Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
            padding: '0.75rem',
            background: darkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(0,0,0,0.03)',
            borderRadius: '10px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{
              color: darkMode ? '#e2e8f0' : '#1f2937',
              fontSize: '0.9rem',
              fontWeight: '700'
            }}>
              {Math.floor(visitorCount / 10)}
            </div>
            <div style={{
              color: darkMode ? '#94a3b8' : '#6b7280',
              fontSize: '0.7rem'
            }}>
              Today
            </div>
          </div>
          
          <div style={{ 
            width: '1px', 
            background: darkMode 
              ? 'rgba(255,255,255,0.1)' 
              : 'rgba(0,0,0,0.1)' 
          }} />
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              color: darkMode ? '#e2e8f0' : '#1f2937',
              fontSize: '0.9rem',
              fontWeight: '700'
            }}>
              {Math.floor(visitorCount / 3)}
            </div>
            <div style={{
              color: darkMode ? '#94a3b8' : '#6b7280',
              fontSize: '0.7rem'
            }}>
              This Week
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Show Widget Button when hidden */}
      {!isVisible && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(true)}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
            fontSize: '1.2rem'
          }}
        >
          📊
        </motion.button>
      )}
    </motion.div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('experience');
  const [darkMode, setDarkMode] = useState(false);
  const [likeCount, setLikeCount] = useState(127);
  const [hasLiked, setHasLiked] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }

    // Initialize like count from localStorage
    const savedLikeCount = localStorage.getItem('portfolioLikeCount');
    if (savedLikeCount) {
      setLikeCount(parseInt(savedLikeCount));
    }

    const savedHasLiked = localStorage.getItem('portfolioHasLiked');
    if (savedHasLiked) {
      setHasLiked(JSON.parse(savedHasLiked));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Update CSS variables based on dark mode
    if (darkMode) {
      document.documentElement.style.setProperty('--primary-color', '#667eea');
      document.documentElement.style.setProperty('--secondary-color', '#764ba2');
      document.documentElement.style.setProperty('--accent-color', '#3b82f6');
      document.documentElement.style.setProperty('--text-primary', '#f8fafc');
      document.documentElement.style.setProperty('--text-secondary', '#cbd5e1');
      document.documentElement.style.setProperty('--bg-primary', '#0f172a');
      document.documentElement.style.setProperty('--bg-secondary', '#1e293b');
      document.documentElement.style.setProperty('--border-color', '#334155');
    } else {
      document.documentElement.style.setProperty('--primary-color', '#2563eb');
      document.documentElement.style.setProperty('--secondary-color', '#1e40af');
      document.documentElement.style.setProperty('--accent-color', '#3b82f6');
      document.documentElement.style.setProperty('--text-primary', '#1f2937');
      document.documentElement.style.setProperty('--text-secondary', '#6b7280');
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--bg-secondary', '#f8fafc');
      document.documentElement.style.setProperty('--border-color', '#e5e7eb');
    }
  }, [darkMode]);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikeCount = likeCount + 1;
      setLikeCount(newLikeCount);
      setHasLiked(true);
      localStorage.setItem('portfolioLikeCount', newLikeCount.toString());
      localStorage.setItem('portfolioHasLiked', 'true');
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'experience':
        return <Experience darkMode={darkMode} />;
      case 'education':
        return <Education darkMode={darkMode} />;
      case 'skills':
        return <Skills darkMode={darkMode} />;
      case 'projects':
        return <Projects darkMode={darkMode} />;
      // case 'certificates':
      //   return <Certificates darkMode={darkMode} />;
      case 'contact':
        return <Contact darkMode={darkMode} />;
      default:
        return <Experience darkMode={darkMode} />;
    }
  };

    return (
 <div className={`App ${darkMode ? 'dark-mode' : ''}`}>      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        likeCount={likeCount}
        onLike={handleLike}
        hasLiked={hasLiked}
      />
      <main className="main-content">
        {renderSection()}
      </main>
      
      {/* Floating Widget */}
      <FloatingWidget 
        darkMode={darkMode}
        likeCount={likeCount}
        onLike={handleLike}
        hasLiked={hasLiked}
      />
    </div>
  );
}

export default App;