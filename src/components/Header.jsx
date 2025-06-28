import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>🌟</span> DreamSpace
      </div>
      <nav style={styles.nav}>
        <a href="#projects" style={styles.link}>Проєкти</a>
        <a href="#about" style={styles.link}>Опис</a>
        <a href="#contact" style={styles.contactBtn}>Контакти</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#0a0a0a',
    color: '#fff',
    padding: '20px 60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid #1c1c1c'
  },
  logo: {
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
    color: '#FFD700'
  },
  logoIcon: {
    marginRight: '8px',
    fontSize: '22px'
  },
  nav: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center'
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
    fontWeight: '500'
  },
  contactBtn: {
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s ease-in-out'
  }
};

export default Header;
