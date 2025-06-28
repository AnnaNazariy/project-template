import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Nazarii Anna — Усі права захищено</p>
      <a
        href="https://github.com/AnnaNazariy"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        GitHub профіль
      </a>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0a0a0a',
    color: '#888',
    textAlign: 'center',
    padding: '30px 20px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif'
  },
  link: {
    display: 'block',
    marginTop: '10px',
    color: '#FFD700',
    textDecoration: 'underline'
  }
};

export default Footer;