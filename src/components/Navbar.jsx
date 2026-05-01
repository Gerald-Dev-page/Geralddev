import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const NAV_ITEMS = [
  { key: 'home',     id: 'inicio'    },
  { key: 'about',    id: 'sobre'     },
  { key: 'services', id: 'servicios' },
  { key: 'projects', id: 'proyectos' },
  { key: 'contact',  id: 'contacto'  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

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
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className={[
          'fixed top-0 inset-x-0 z-50 w-full',
          'flex items-center justify-between',
          'px-6 md:px-12 lg:px-20',
          'transition-all duration-300 ease-out select-none',
          scrolled
            ? 'py-3 md:py-4 bg-[#000318]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 md:py-6 bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        <img
          src={`${import.meta.env.BASE_URL}img/Logo-negro.webp`}
          alt="Logo Gerald.Dev"
          onClick={() => scrollToSection('inicio')}
          className={[
            'cursor-pointer flex-shrink-0 w-auto',
            'transition-all duration-300 ease-out',
            'hover:opacity-90 hover:drop-shadow-[0_0_12px_rgba(181,222,247,0.3)]',
            'active:scale-95',
            scrolled
              ? 'h-10 md:h-12 lg:h-14'
              : 'h-12 md:h-16 lg:h-20',
          ].join(' ')}
        />

        <ul className="hidden md:flex md:flex-row md:items-center md:gap-1 lg:gap-2 list-none m-0 p-0">
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <DesktopNavBtn
                label={t(`nav.${item.key}`)}
                onClick={() => scrollToSection(item.id)}
              />
            </li>
          ))}
          <li className="ml-4 pl-4 border-l border-white/10 flex items-center">
            <LanguageSelector />
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
          className={[
            'md:hidden flex flex-col justify-center items-center gap-[5px]',
            'w-11 h-11 rounded-xl cursor-pointer',
            'bg-white/0 border border-transparent',
            'transition-all duration-200',
            'hover:bg-white/5 hover:border-white/10',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)]',
            'active:scale-95'
          ].join(' ')}
        >
          <span className={burgerLine(menuOpen, 'top')} />
          <span className={burgerLine(menuOpen, 'mid')} />
          <span className={burgerLine(menuOpen, 'bot')} />
        </button>
      </nav>

      {createPortal(
        <MobileMenu
          open={menuOpen}
          items={NAV_ITEMS}
          onNav={scrollToSection}
          onClose={() => setMenuOpen(false)}
          t={t}
        />,
        document.body
      )}
    </>
  );
}

function burgerLine(open, pos) {
  const base = 'block w-[22px] h-[2px] bg-white rounded-full transition-all duration-300 ease-out origin-center';
  if (pos === 'top') return `${base} ${open ? 'translate-y-[7px] rotate-45' : ''}`;
  if (pos === 'mid') return `${base} ${open ? 'opacity-0 scale-x-0' : 'opacity-100'}`;
  if (pos === 'bot') return `${base} ${open ? '-translate-y-[7px] -rotate-45' : ''}`;
}

function DesktopNavBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        'group relative overflow-hidden',
        'inline-flex items-center justify-center',
        'text-sm font-medium tracking-wide text-white/70',
        'px-4 py-2 rounded-full',
        'transition-all duration-300 ease-out',
        'hover:text-white hover:bg-white/5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)]',
        'active:scale-95'
      ].join(' ')}
    >
      <span className="relative z-10">{label}</span>
      <span className={[
        'absolute bottom-1.5 left-1/2 -translate-x-1/2',
        'w-1/2 h-[2px] rounded-full',
        'bg-gradient-to-r from-transparent via-[rgb(181,222,247)] to-transparent',
        'opacity-0 blur-sm group-hover:opacity-100 group-hover:blur-none',
        'transition-all duration-300 ease-out',
      ].join(' ')} />
    </button>
  );
}

function MobileMenu({ open, items, onNav, onClose, t }) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={[
          'fixed inset-0 z-[100]',
          'bg-[#000318]/60 backdrop-blur-sm',
          'transition-opacity duration-300 ease-out',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.openMenu')}
        className={[
          'fixed inset-y-0 right-0 z-[110]',
          'flex flex-col items-center justify-center w-full max-w-sm',
          'gap-4 px-6 py-8 shadow-2xl',
          'bg-[#000318]/95 backdrop-blur-xl border-l border-white/10',
          'transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'will-change-transform',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <button
          onClick={onClose}
          aria-label={t('nav.closeMenu')}
          className={[
            'absolute top-6 right-6',
            'w-11 h-11 flex items-center justify-center',
            'rounded-full bg-white/5 border border-white/10 text-white/70',
            'transition-all duration-200 ease-out',
            'hover:bg-white/10 hover:text-white hover:scale-105',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)]',
            'active:scale-95'
          ].join(' ')}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-stretch w-full gap-2 mt-8">
          {items.map((item, i) => (
            <div
              key={item.id}
              style={{ transitionDelay: open ? `${100 + i * 50}ms` : '0ms' }}
              className={[
                'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
              ].join(' ')}
            >
              <button
                onClick={() => onNav(item.id)}
                className={[
                  'w-full py-4 px-6 text-left',
                  'text-lg font-medium tracking-wide text-white/80',
                  'rounded-2xl transition-all duration-200 ease-out',
                  'hover:bg-white/5 hover:text-white hover:translate-x-2',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)]',
                ].join(' ')}
              >
                {t(`nav.${item.key}`)}
              </button>
            </div>
          ))}
        </div>

        <div
          style={{ transitionDelay: open ? `${100 + items.length * 50}ms` : '0ms' }}
          className={[
            'mt-8 w-full flex justify-center pt-8 border-t border-white/10',
            'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
        >
          <LanguageSelector />
        </div>
      </div>
    </>
  );
}