import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        RAVINDU <span className="gradient-text">CHANUKA</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
        <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
      </div>

      {/* Mobile Menu Icon (Not fully styled, placeholder logic) */}
      <div className="mobile-menu-btn" style={{display: 'none', cursor: 'pointer', color: 'var(--text-main)'}} onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;
