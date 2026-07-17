import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import logoDark from '../../assets/logo-w.png';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-secondary text-white/70 dark:bg-dark border-t border-white/5 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoDark} 
              alt="Revonix Technologies" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <p className="text-sm leading-relaxed text-white/50">
            Revonix Technologies Pvt Ltd is a pioneer in manufacturing customized Lithium-Ion battery packs, smart charging networks, and hybrid solar storage systems, helping businesses transition to reliable clean energy.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.linkedin.com/company/revonix-technologies-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/25 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/revonix.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/25 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
          <nav className="flex flex-col gap-2.5 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products Catalog</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio Projects</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
          </nav>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Get In Touch</h4>
          <div className="flex flex-col gap-3.5 text-sm text-white/60">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                E D Cell, JSPM's Jayawantrao Sawant College of Engineering, Survey No. 58, Indrayani Nagar, Handewadi Road, Hadapsar, Pune - 411028, Maharashtra, India.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+917758852746" className="hover:text-white transition-colors">+91 77588-52746</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:revonixtech@gmail.com" className="hover:text-white transition-colors">revonixtech@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Newsletter</h4>
          <p className="text-sm text-white/50 leading-relaxed">
            Subscribe to receive technical breakdowns, lithium pack design updates, and clean energy news directly.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 p-1.5 rounded-md bg-primary hover:bg-primary/95 text-white transition-all duration-300"
              aria-label="Submit subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
          {subscribed && <span className="text-xs text-primary mt-1">Successfully subscribed!</span>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <div>
          <span>Copyright © {new Date().getFullYear()} Revonix Technologies. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
