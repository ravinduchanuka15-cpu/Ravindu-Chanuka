const About = () => {
  return (
    <div className="page-header" style={{ animation: 'fadeIn 0.8s ease' }}>
      <h1><span className="gradient-text">About</span> Me</h1>
      <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left', lineHeight: '1.8', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Hello! I'm <strong>Ravindu Chanuka</strong>, an inventive and highly adaptable developer who loves exploring the boundaries of modern web development and software architecture.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            My journey into the world of programming brought me to powerful technologies like <strong>React</strong> for crafting stunning front-end interfaces, and <strong>Node.js</strong> for building robust, scalable back-end solutions. I believe in writing clean, modular code and focusing strongly on user experience and visual perfection.
          </p>
          <p>
            Whether I'm constructing multi-page applications, integrating complex APIs, or fine-tuning CSS animations, my goal is always the same: building digital solutions that not only work flawlessly but look spectacular.
          </p>
        </div>
        
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'center' }}>My Tech Stack</h2>
        <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
          {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express', 'Vite', 'Tailwind CSS'].map(skill => (
            <div key={skill} className="glass-card" style={{ padding: '1rem', borderTop: '2px solid var(--accent)' }}>
              <strong style={{ color: 'var(--text-main)' }}>{skill}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
