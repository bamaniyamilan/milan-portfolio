import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setSelectedLang] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  // 🌈 Random gradient backgrounds
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
    'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
  ];

  // 📱 Responsive
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 🚀 Fetch repos with caching
  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const cached = sessionStorage.getItem('bamaniyamilan_repos');
      if (cached) {
        const data = JSON.parse(cached);
        handleRepos(data);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://api.github.com/users/bamaniyamilan/repos');
        const data = await response.json();
        // Sort by recent update
        const sorted = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        sessionStorage.setItem('bamaniyamilan_repos', JSON.stringify(sorted));
        handleRepos(sorted);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    const handleRepos = (data) => {
      setRepos(data);
      setFilteredRepos(data);
      const langs = ['All', ...new Set(data.map(r => r.language).filter(Boolean))];
      setLanguages(langs);
    };

    fetchRepos();
  }, []);

  // 🧩 Handle filters
  const handleFilterChange = (lang) => {
    setSelectedLang(lang);
    setCurrentPage(1);
    if (lang === 'All') {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(repos.filter(repo => repo.language === lang));
    }
  };

  // 📄 Pagination logic
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 1));

  const cardStyle = {
    background: darkMode ? 'var(--bg-secondary)' : 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: darkMode
      ? '0 8px 25px rgba(0, 0, 0, 0.3)'
      : '0 8px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : 'none',
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
        background: darkMode
          ? 'rgba(30, 30, 40, 0.25)'
          : 'rgba(255, 255, 255, 0.25)',
        border: darkMode
          ? '1px solid rgba(255,255,255,0.1)'
          : '1px solid rgba(255,255,255,0.3)',
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? '2rem' : '2.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          marginBottom: isMobile ? '1.5rem' : '2rem',
        }}
      >
        My GitHub Projects
      </h2>

      {/* 🧭 Filter Menu */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleFilterChange(lang)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedLang === lang
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-700 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading repositories...</p>
      ) : (
        <>
          {/* 🧱 Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: isMobile ? '1.5rem' : '2rem',
            }}
          >
            {currentRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: isMobile ? 0 : -10,
                  scale: isMobile ? 1 : 1.02,
                }}
                style={cardStyle}
              >
                {/* 🪩 Repo Initial Badge */}
                <div
                  style={{
                    height: isMobile ? '150px' : '200px',
                    background:
                      gradients[Math.floor(Math.random() * gradients.length)],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: isMobile ? '2rem' : '3rem',
                    fontWeight: 'bold',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    letterSpacing: '2px',
                  }}
                >
                  {repo.name.charAt(0).toUpperCase()}
                </div>

                <div style={{ padding: isMobile ? '1.25rem' : '1.5rem' }}>
                  <h3
                    style={{
                      fontSize: isMobile ? '1.3rem' : '1.5rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                      textTransform: 'capitalize',
                    }}
                  >
                    {repo.name.replace(/-/g, ' ')}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      marginBottom: '1rem',
                      lineHeight: 1.6,
                      fontSize: isMobile ? '0.95rem' : '1rem',
                    }}
                  >
                    {repo.description || 'No description provided.'}
                  </p>

                  {repo.language && (
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: darkMode
                          ? 'rgba(102, 126, 234, 0.2)'
                          : 'var(--bg-secondary)',
                        color: 'var(--primary-color)',
                        borderRadius: '15px',
                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                        fontWeight: '500',
                        border: darkMode
                          ? '1px solid rgba(102, 126, 234, 0.3)'
                          : 'none',
                        marginBottom: '1rem',
                        display: 'inline-block',
                      }}
                    >
                      {repo.language}
                    </span>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      flexDirection: isMobile ? 'column' : 'row',
                    }}
                  >
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: isMobile ? '0.75rem' : '0.5rem 1rem',
                        background: darkMode
                          ? 'rgba(255,255,255,0.1)'
                          : 'var(--text-primary)',
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: isMobile ? '0.9rem' : '0.875rem',
                        justifyContent: 'center',
                        flex: isMobile ? 1 : 'none',
                      }}
                    >
                      <FaGithub size={isMobile ? 16 : 14} />
                      View Code
                    </motion.a>

                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          flex: isMobile ? 1 : 'none',
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
{/* 🧭 Pagination Controls */}
{totalPages > 1 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '2.5rem',
      flexWrap: 'wrap'
    }}
  >
    {/* Prev Button */}
    <motion.button
      whileHover={{ scale: currentPage > 1 ? 1.1 : 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={prevPage}
      disabled={currentPage === 1}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '0.875rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        ...(currentPage === 1
          ? {
              background: darkMode ? '#374151' : '#d1d5db',
              color: '#6b7280',
              cursor: 'not-allowed'
            }
          : {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              cursor: 'pointer'
            })
      }}
    >
      ← Prev
    </motion.button>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <motion.button
        key={page}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentPage(page)}
        style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          fontWeight: '600',
          fontSize: '0.875rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          ...(currentPage === page
            ? {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(102, 126, 234, 0.3)'
              }
            : {
                background: darkMode ? '#374151' : '#e5e7eb',
                color: darkMode ? '#d1d5db' : '#374151',
                cursor: 'pointer'
              })
        }}
      >
        {page}
      </motion.button>
    ))}

    {/* Next Button */}
    <motion.button
      whileHover={{ scale: currentPage < totalPages ? 1.1 : 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={nextPage}
      disabled={currentPage === totalPages}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '0.875rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        ...(currentPage === totalPages
          ? {
              background: darkMode ? '#374151' : '#d1d5db',
              color: '#6b7280',
              cursor: 'not-allowed'
            }
          : {
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              color: 'white',
              cursor: 'pointer'
            })
      }}
    >
      Next →
    </motion.button>
  </motion.div>
)}

        </>
      )}
    </motion.section>
  );
};

export default Projects;
