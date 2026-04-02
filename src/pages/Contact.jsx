import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // Simulating an API call to a Node.js backend
    setTimeout(() => {
      setStatus('Message Sent! I will get back to you soon.');
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="page-header" style={{ animation: 'fadeIn 0.8s ease' }}>
      <h1>Get in <span className="gradient-text">Touch</span></h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.2rem' }}>
        Have a project in mind or want to collaborate? Contact me today!
      </p>

      <div className="contact-container" style={{ textAlign: 'left', marginTop: '3rem' }}>
        <div className="contact-info glass-card">
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Contact Info</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '12px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
              <Phone size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Call Me</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>+94 74 224 4182</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '12px', background: 'rgba(255, 0, 234, 0.1)', borderRadius: '50%', color: 'var(--accent-2)' }}>
              <Mail size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email Me</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>ravinduchanuka15@gmail.com</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', color: 'var(--text-main)' }}>
              <MapPin size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Location</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>Sri Lanka</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ padding: '12px', background: 'rgba(0, 119, 181, 0.1)', borderRadius: '50%', color: '#0077b5' }}>
              <Linkedin size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>LinkedIn</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                <a href="https://www.linkedin.com/in/ravindu-chanuka-111176373" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>
                  ravindu-chanuka
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form glass-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
              {status || 'Send Message'}
            </button>
            {status && status !== 'Sending...' && (
              <p style={{ marginTop: '1rem', color: '#00ffaa', textAlign: 'center' }}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
