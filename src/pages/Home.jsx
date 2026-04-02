import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-subtitle">Welcome to my universe</div>
        <h1 className="hero-title">
          Hi, I am <br/>
          <span className="gradient-text">Ravindu Chanuka</span>
        </h1>
        <p className="hero-desc">
          A passionate software developer creating stunning, interactive, and high-performance digital experiences. I specialize in building modern scalable applications from robust backends to pixel-perfect frontends.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            Explore Work <ArrowRight size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '5px' }} />
          </Link>
          <a href="/contact" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Hire Me
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="profile-image-container">
          {/* Fallback to user uploaded photo (assume they named it profile.png or jpg). By default a placeholder if missing */}
          <img src="/profile.jpg" alt="Ravindu Chanuka" onError={(e) => {
             e.target.onerror = null;
             e.target.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80";
          }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
