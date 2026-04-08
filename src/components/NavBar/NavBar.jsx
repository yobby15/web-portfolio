import { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import ToggleTheme from "./ToggleTheme";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar-theme fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-4 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <button className="gradient-text font-bold text-lg tracking-tight" style={{ fontFamily: 'Syne, sans-serif', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        YN.
      </button>

      <NavLinks />

      <ToggleTheme />
    </nav>
  );
}

export default NavBar;
