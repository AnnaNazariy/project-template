import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>DreamSpace</h1>
          <p style={styles.subtitle}>Візуалізація ваших мрій: будинки, простори, інтер'єри</p>
          <a href="#projects" style={styles.button}>Переглянути приклади</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/hero-bg.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    textAlign: 'center',
    position: 'relative'
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    maxWidth: '800px'
  },
  title: {
    fontSize: '64px',
    fontWeight: 600,
    marginBottom: '20px',
    color: '#111',
    fontFamily: 'Poppins, sans-serif'
  },
  subtitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '30px'
  },
  button: {
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '14px 28px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600'
  }
};

export default Hero;
