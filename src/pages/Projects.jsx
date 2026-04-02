import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "R.C. Mobile Store",
      description: "A premium mobile web store with a dark layout, glowing styling, and a sleek user interface for showcasing mobile phones.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      tech: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "kESHI Cream E-Commerce",
      description: "A beautifully elegant landing page for a cosmetic cream product, featuring soft pink tones, animations, and typography suitable for high-end skincare.",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
      tech: ["HTML", "CSS", "Tailwind CSS", "JS"]
    },
    {
      id: 3,
      title: "N.K Pet Shop",
      description: "A multi-page pet adoption and supply store focusing on vibrant imagery, warm colors, and a trustworthy design to engage pet lovers.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
      tech: ["React", "CSS3", "Node.js"]
    },
    {
      id: 4,
      title: "Ceylon Touris",
      description: "An immersive tourism website displaying exotic destinations in Sri Lanka. Engineered with blur effects and a compelling navigation flow.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      tech: ["Vite", "React", "Node.js"]
    }
  ];

  return (
    <div className="page-header" style={{ animation: 'fadeIn 0.8s ease' }}>
      <h1>Featured <span className="gradient-text">Work</span></h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.2rem' }}>
        Here are some of the fantastic projects I've worked on recently.
      </p>

      <div className="projects-grid" style={{ marginTop: '3rem', textAlign: 'left' }}>
        {projectData.map(project => (
          <div key={project.id} className="glass-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}>
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}>
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
