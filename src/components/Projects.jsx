import Card from './Card';

const Projects = () => {
  const projectList = [
    { title: 'Будинок біля озера', image: process.env.PUBLIC_URL + '/images/project1.jpg' },
    { title: 'Мінімалістичний інтер’єр', image: process.env.PUBLIC_URL + '/images/project2.jpg' },
    { title: 'Заміський будинок мрії', image: process.env.PUBLIC_URL + '/images/project3.jpg' },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Візуалізація мрій</h2>
      <div style={styles.grid}>
        {projectList.map((p, i) => (
          <Card key={i} title={p.title} image={p.image} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#121212',
    padding: '80px 20px',
    color: '#fff',
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    padding: '0 40px'
  }
};

export default Projects;