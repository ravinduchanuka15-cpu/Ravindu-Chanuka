import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="#" style={{ color: 'var(--text-muted)' }}><Github /></a>
        <a href="https://www.linkedin.com/in/ravindu-chanuka-111176373" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}><Linkedin /></a>
        <a href="#" style={{ color: 'var(--text-muted)' }}><Instagram /></a>
        <a href="#" style={{ color: 'var(--text-muted)' }}><Twitter /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Ravindu Chanuka. All Rights Reserved.</p>
      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Designed with <span style={{ color: 'var(--accent)' }}>React</span> & <span style={{ color: 'var(--accent-2)' }}>Node.js</span></p>
    </footer>
  );
};

export default Footer;
