import React from 'react';

const Workspace = () => {
  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <div style={styles.left}>
          <div style={styles.statusRow}>
            <span style={styles.badge}>Доступно для візуалізації</span>
            <span style={styles.capacity}>70% Завантаження</span>
          </div>
          <h2 style={styles.title}>Підібрано простір для вас</h2>
          <p style={styles.text}>
            Підбір відбувся на основі ваших уподобань, стилю життя та простору. 
            Створення ескізу розпочнеться за 10 хвилин.
          </p>
        </div>
        <img
  src={process.env.PUBLIC_URL + '/images/space.jpg'}
  alt="Visualized Space"
  style={styles.image}
/>
  <div style={styles.box}>
          <h1 style={styles.percentage}>92%</h1>
          <p style={styles.boxText}>Точність відповідності запиту</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '1000px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    position: 'relative',
    gap: '30px',
    flexWrap: 'wrap'
  },
  left: {
    flex: 1,
    minWidth: '260px'
  },
  statusRow: {
    display: 'flex',
    gap: '16px',
    fontSize: '14px',
    marginBottom: '10px',
    flexWrap: 'wrap'
  },
  badge: {
    backgroundColor: '#2e2e2e',
    color: '#4caf50',
    padding: '4px 12px',
    borderRadius: '20px',
    fontWeight: 'bold'
  },
  capacity: {
    color: '#aaa'
  },
  title: {
    fontSize: '22px',
    marginBottom: '10px'
  },
  text: {
    fontSize: '15px',
    color: '#ccc',
    lineHeight: '1.6'
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '12px',
    objectFit: 'cover'
  },
  box: {
    backgroundColor: '#121212',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    minWidth: '120px'
  },
  percentage: {
    fontSize: '36px',
    color: '#FFD700',
    margin: '0'
  },
  boxText: {
    fontSize: '12px',
    color: '#aaa'
  }
};

export default Workspace;
