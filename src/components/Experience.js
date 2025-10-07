import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Experience = ({ darkMode }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const experiences = [
    {
      company: "Fliptree Technologies Private Limited (Remote)",
      position: "Jr. Android Developer",
      period: "Dec. 2022 – Feb. 2024",
      location: "Charlotte, NC, USA",
      achievements: [
        "Developed Android applications using Kotlin, Jetpack Compose, and MVVM architecture",
        "Built and optimized web applications with React.js, Tailwind CSS, and Redux",
        "Enhanced mobile app performance through memory management and performance tuning in React Native",
        "Collaborated with teams to troubleshoot and improve user experiences via agile workflows",
        "Delivered client-specific features, achieving 95% customer satisfaction in feedback surveys"
      ]
    },
    {
      company: "NeoSoft Technologies",
      position: "Software Engineer",
      period: "Sep. 2022 – Nov. 2022",
      location: "Pune, India",
      achievements: [
        "Designed dynamic web applications using React.js, Material UI, and Tailwind CSS",
        "Implemented state management solutions with Redux, ensuring scalable architecture",
        "Wrote unit tests using Jest, reducing production issues by 20%"
      ]
    },
    {
      company: "Charmuse Technologies Pvt Ltd",
      position: "Android Developer",
      period: "Mar. 2022 – Jun. 2022",
      location: "Ahmedabad, India",
      achievements: [
        "Developed testable Android applications using Kotlin",
        "Debugged and enhanced application performance, reducing crash rates by 15%"
      ]
    },
    {
      company: "Horizon IT Pvt Ltd",
      position: "Founder and Full Stack Developer",
      period: "Apr. 2020 – Mar. 2022",
      location: "Vadodara, India",
      achievements: [
        "Led a team of 5 developers, managing the end-to-end product lifecycle",
        "Built web applications with React, Redux, and Node.js, integrating RESTful APIs",
        "Designed and implemented databases with MySQL and backend services using Express.js",
        "Delivered 10+ client projects, consistently receiving positive feedback on quality and timelines"
      ]
    }
  ];

  const cardStyle = {
    background: darkMode ? 'var(--bg-secondary)' : 'white',
    padding: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '1.5rem' : '2rem',
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
        Professional Experience
      </h2>
      
      <div className="timeline" style={{ position: 'relative' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="timeline-item"
            style={cardStyle}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between', 
              alignItems: isMobile ? 'flex-start' : 'flex-start', 
              gap: isMobile ? '1rem' : '0',
              marginBottom: '1rem' 
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: isMobile ? '1.3rem' : '1.5rem', 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}>
                  {exp.position}
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '1.1rem' : '1.2rem', 
                  color: 'var(--primary-color)', 
                  fontWeight: '600',
                  marginBottom: isMobile ? '0.5rem' : '0'
                }}>
                  {exp.company}
                </p>
              </div>
              <div style={{ 
                textAlign: isMobile ? 'left' : 'right',
                minWidth: isMobile ? 'auto' : '200px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginBottom: '0.5rem',
                  color: 'var(--text-secondary)',
                  flexWrap: 'wrap'
                }}>
                  <FaCalendarAlt color="var(--primary-color)" size={isMobile ? 12 : 14} />
                  <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{exp.period}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  flexWrap: 'wrap'
                }}>
                  <FaMapMarkerAlt color="var(--primary-color)" size={isMobile ? 12 : 14} />
                  <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {exp.achievements.map((achievement, achIndex) => (
                <motion.li
                  key={achIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                  style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--text-primary)',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    lineHeight: 1.5
                  }}
                >
                  <FaStar size={isMobile ? 10 : 12} color="var(--primary-color)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;