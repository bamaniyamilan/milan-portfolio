import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Android E-Commerce App",
      description: "A full-featured e-commerce mobile application built with Kotlin and Jetpack Compose. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Room DB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "React Task Management",
      description: "A comprehensive task management web application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling features, and performance metrics tracking.",
      technologies: ["React.js", "Chart.js", "Express.js", "MySQL", "JWT"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Mobile application providing real-time weather forecasts with beautiful UI and location-based services.",
      technologies: ["React Native", "Redux", "OpenWeather API", "Geolocation"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 5,
      title: "E-Learning Platform",
      description: "Online learning platform with video streaming, quizzes, progress tracking, and certificate generation.",
      technologies: ["React.js", "Node.js", "MongoDB", "FFmpeg", "Stripe"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 6,
      title: "Food Delivery Service",
      description: "Complete food delivery solution with restaurant management, order tracking, and real-time delivery updates.",
      technologies: ["Android", "Kotlin", "Firebase", "Google Maps API", "Payment Gateway"],
      githubLink: "#",
      liveLink: "#"
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
    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : 'none'
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
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: isMobile ? '1.5rem' : '2rem' 
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: isMobile ? 0 : -10, scale: isMobile ? 1 : 1.02 }}
            style={cardStyle}
          >
            <div style={{
              height: isMobile ? '150px' : '200px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold'
            }}>
              {project.title.split(' ').map(word => word[0]).join('')}
            </div>
            
            <div style={{ padding: isMobile ? '1.25rem' : '1.5rem' }}>
              <h3 style={{ 
                fontSize: isMobile ? '1.3rem' : '1.5rem', 
                color: 'var(--text-primary)', 
                marginBottom: '0.75rem',
                lineHeight: 1.3
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '1rem',
                lineHeight: 1.6,
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                {project.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                marginBottom: isMobile ? '1.25rem' : '1.5rem' 
              }}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: darkMode ? 'rgba(102, 126, 234, 0.2)' : 'var(--bg-secondary)',
                      color: 'var(--primary-color)',
                      borderRadius: '15px',
                      fontSize: isMobile ? '0.75rem' : '0.875rem',
                      fontWeight: '500',
                      border: darkMode ? '1px solid rgba(102, 126, 234, 0.3)' : 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem',
                flexDirection: isMobile ? 'column' : 'row'
              }}>
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: isMobile ? '0.75rem' : '0.5rem 1rem',
                      background: darkMode ? 'rgba(255,255,255,0.1)' : 'var(--text-primary)',
                      color: 'white',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: isMobile ? '0.9rem' : '0.875rem',
                      justifyContent: 'center',
                      flex: isMobile ? 1 : 'none'
                    }}
                  >
                    <FaGithub size={isMobile ? 16 : 14} />
                    View Code
                  </motion.a>
                )}
                
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: isMobile ? '0.75rem' : '0.5rem 1rem',
                      background: 'var(--primary-color)',
                      color: 'white',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: isMobile ? '0.9rem' : '0.875rem',
                      justifyContent: 'center',
                      flex: isMobile ? 1 : 'none'
                    }}
                  >
                    <FaExternalLinkAlt size={isMobile ? 16 : 14} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;