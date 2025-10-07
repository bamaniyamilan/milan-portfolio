import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 75 },
        { name: "Kotlin", level: 70 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Redux", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 82 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 78 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Android (Kotlin/Java)", level: 88 },
        { name: "React Native", level: 80 },
        { name: "Jetpack Compose", level: 82 },
        { name: "Retrofit", level: 78 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 85 }
      ]
    }
  ];

  const cardStyle = {
    background: darkMode ? 'var(--bg-secondary)' : 'white',
    padding: isMobile ? '1.25rem' : '1.5rem',
    borderRadius: '15px',
    boxShadow: darkMode 
      ? '0 4px 15px rgba(0, 0, 0, 0.3)' 
      : '0 4px 15px rgba(0, 0, 0, 0.1)',
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
        marginBottom: isMobile ? '1.5rem' : '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>
        Technical Skills
      </h2>

      <div style={{ display: 'grid', gap: isMobile ? '1.5rem' : '2rem' }}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            style={cardStyle}
          >
            <h3 style={{ 
              fontSize: isMobile ? '1.3rem' : '1.5rem', 
              color: 'var(--primary-color)', 
              marginBottom: isMobile ? '1rem' : '1.5rem',
              borderBottom: `2px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'var(--border-color)'}`,
              paddingBottom: '0.5rem'
            }}>
              {category.category}
            </h3>
            
            <div style={{ display: 'grid', gap: isMobile ? '0.75rem' : '1rem' }}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <span style={{ 
                      fontWeight: '600', 
                      color: 'var(--text-primary)',
                      fontSize: isMobile ? '0.95rem' : '1rem'
                    }}>
                      {skill.name}
                    </span>
                    <span style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: '500'
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: isMobile ? '6px' : '8px',
                    background: darkMode ? 'rgba(255,255,255,0.1)' : 'var(--bg-secondary)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                        borderRadius: '4px',
                        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;