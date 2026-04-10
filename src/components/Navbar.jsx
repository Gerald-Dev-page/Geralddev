import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './Navbar.css';

const items = [
  { key: 'home',     id: 'inicio'    },
  { key: 'about',    id: 'sobre'     },
  { key: 'services', id: 'servicios' },
  { key: 'projects', id: 'proyectos' },
  { key: 'contact',  id: 'contacto'  }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setMenuOpen(v => !v);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <img
        src={`${import.meta.env.BASE_URL}img/Logo-negro.webp`}
        alt="Logo Gerald.Dev"
        className="navbar-logo"
        onClick={() => scrollToSection('inicio')}
        style={{ cursor: 'pointer' }}
      />

      <div
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        role="button"
        tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
      >
        <span /><span /><span />
      </div>

      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        {items.map(item => (
          <li key={item.id}>
            <button
              className="navbar-button"
              onClick={() => scrollToSection(item.id)}
            >
              {t(`nav.${item.key}`)}
            </button>
          </li>
        ))}
        <li><LanguageSelector /></li>
      </ul>
    </nav>
  );
}