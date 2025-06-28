import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.contact}>
      <h2>Контакти</h2>
      <p>Email: nazarii.anna@gmail.com</p>
      <p>
        GitHub:{' '}
        <a href="https://github.com/AnnaNazariy" target="_blank" rel="noreferrer" style={styles.link}>
          AnnaNazariy
        </a>
      </p>
      <p>Автор проєкту: Nazarii Anna — UI/UX дизайнер і фронтенд-розробник</p>
    </section>
  );
};

const styles = {
  contact: {
    backgroundColor: '#0a0a0a',
    color: '#ccc',
    padding: '80px 20px',
    textAlign: 'center'
  },
  link: {
    color: '#FFD700',
    textDecoration: 'underline'
  }
};

export default Contact;
