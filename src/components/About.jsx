import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.card}>
        <div style={styles.left}>
          <h2 style={styles.title}>Про проєкт</h2>
          <p style={styles.text}>
            <strong>DreamSpace</strong> — це платформа, яка дозволяє створити візуальну концепцію вашого ідеального дому або простору.
            Ми поєднуємо дизайнерське бачення з сучасними технологіями, щоб ваші мрії стали ближчими до реальності.
          </p>
        </div>
       <img
  src={process.env.PUBLIC_URL + '/images/about.jpg'}
  alt="Dream illustration"
  style={styles.image}
/>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#121212',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    borderRadius: '16px',
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    maxWidth: '1000px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
  },
  left: {
    flex: 1
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#ccc'
  },
  image: {
    width: '220px',
    height: '220px',
    borderRadius: '12px',
    objectFit: 'cover'
  }
};

export default About;
