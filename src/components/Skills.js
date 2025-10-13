import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaMobile, 
  FaCloud, 
  FaDocker, 
  FaGitAlt, 
  FaAws,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiRedux, 
  SiTailwindcss, 
  SiFirebase, 
  SiKotlin,
  SiAndroid,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiJenkins,
  SiKubernetes
} from 'react-icons/si';

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
      category: "MERN Stack",
      icon: FaReact,
      color: "#61DAFB",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
      ]
    },
    {
      category: "Frontend Development",
      icon: FaCode,
      color: "#667eea",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React Native", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: FaCode, color: "#E34F26" },
        { name: "CSS3", icon: FaCode, color: "#1572B6" },
        { name: "Material-UI", icon: FaCode, color: "#007FFF" }
      ]
    },
    {
      category: "Backend & Databases",
      icon: FaServer,
      color: "#f093fb",
      skills: [
        { name: "RESTful APIs", icon: FaServer, color: "#FF6B6B" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "GraphQL", icon: FaCode, color: "#E10098" }
      ]
    },
    {
      category: "Mobile Development",
      icon: FaMobile,
      color: "#4fd1c5",
      skills: [
        { name: "Android (Kotlin)", icon: SiKotlin, color: "#7F52FF" },
        { name: "Android (Java)", icon: FaJava, color: "#ED8B00" },
        { name: "Jetpack Compose", icon: SiAndroid, color: "#3DDC84" },
        { name: "Mobile UI/UX", icon: FaMobile, color: "#34C759" },
        { name: "Retrofit", icon: FaCode, color: "#6A0DAD" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: FaDocker,
      color: "#f6ad55",
      skills: [
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "CI/CD", icon: FaCloud, color: "#2088FF" }
      ]
    },
    {
      category: "Programming Languages",
      icon: FaCode,
      color: "#fc8181",
      skills: [
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
      ]
    }
  ];

  const cardStyle = {
    background: darkMode 
      ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.8) 0%, rgba(40, 40, 60, 0.6) 100%)' 
      : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
    padding: isMobile ? '1.25rem' : '1.5rem',
    borderRadius: '20px',
    boxShadow: darkMode 
      ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
      : '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden'
  };

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
          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)' 
          : 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248, 250, 252, 0.6) 100%)',
        border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
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
          Technical Skills
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
          Full-stack development expertise with modern technologies and frameworks
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: isMobile ? '1.5rem' : '2rem' 
      }}>
        {skillCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={cardStyle}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: `2px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
              }}>
                <div style={{
                  padding: '0.75rem',
                  background: `${category.color}20`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CategoryIcon size={isMobile ? 20 : 24} color={category.color} />
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.25rem' : '1.4rem', 
                  color: darkMode ? '#e2e8f0' : '#1f2937',
                  fontWeight: '700',
                  margin: 0
                }}>
                  {category.category}
                </h3>
              </div>
              
              {/* Skills Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem'
              }}>
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        background: darkMode 
                          ? 'rgba(255,255,255,0.05)' 
                          : 'rgba(255,255,255,0.8)',
                        padding: '1rem 0.75rem',
                        borderRadius: '12px',
                        textAlign: 'center',
                        border: darkMode 
                          ? '1px solid rgba(255,255,255,0.1)' 
                          : '1px solid rgba(0,0,0,0.05)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Background effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                      }} />
                      
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <SkillIcon 
                          size={isMobile ? 24 : 28} 
                          color={skill.color}
                          style={{ filter: darkMode ? 'brightness(1.2)' : 'none' }}
                        />
                        <span style={{ 
                          fontSize: isMobile ? '0.75rem' : '0.85rem',
                          fontWeight: '600',
                          color: darkMode ? '#e2e8f0' : '#374151',
                          lineHeight: 1.2
                        }}>
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

    </motion.section>
  );
};

export default Skills;