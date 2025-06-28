import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    color: '#fff',
    textAlign: 'center'
  },
  img: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  title: {
    padding: '16px'
  }
};

export default Card;
