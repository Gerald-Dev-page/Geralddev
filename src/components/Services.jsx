import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const IMG_NAMES = ['Desarrollo2', 'Tiendas2', 'Portfolios2', 'Soluciones2', 'cm'];

export default function Services() {
  const { t } = useTranslation();
  const services = t('services.list', { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      // Se eliminó 'overflow-hidden' para evitar que las auroras se corten bruscamente y generen las líneas visibles
      className="relative max-w-[1400px] mx-auto py-20 md:py-32 px-4 md:px-8 isolate z-10"
    >
      {/* ── Background Glows (Auroras expandidas y suavizadas) ── */}
      <div
        aria-hidden="true"
        className="absolute top-[10%] -left-[15%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[radial-gradient(circle_at_center,rgba(0,200,180,0.1)_0%,transparent_60%)] blur-[100px] rounded-full pointer-events-none -z-10 animate-[auroraSway_10s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] -right-[15%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.1)_0%,transparent_60%)] blur-[100px] rounded-full pointer-events-none -z-10 animate-[auroraSway_12s_ease-in-out_infinite_reverse]"
      />

      {/* ── Top Line ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(181,222,247,0.4), rgba(227,180,212,0.3), transparent)' }}
      />

      {/* ── Header ── */}
      <header className="flex flex-col items-center text-center mb-14 md:mb-24">
        <h2
          id="services-title"
          className="m-0 text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-tight text-white mb-5 drop-shadow-sm [&_.celeste]:text-[rgb(181,222,247)] [&_.celeste]:drop-shadow-[0_0_12px_rgba(181,222,247,0.3)]"
        >
          <Trans i18nKey="services.title">
            Our <span className="celeste">Services</span>
          </Trans>
        </h2>
        <p className="m-0 text-base md:text-lg text-[rgba(210,220,235,0.8)] font-medium max-w-2xl mb-8 leading-relaxed">
          {t('services.subtitle')}
        </p>
        <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)] opacity-90 shadow-[0_0_16px_rgba(181,222,247,0.4)]" />
      </header>

      {/* ── Desktop Grid (3 arriba, 2 abajo centrados) ── */}
      <div className="hidden lg:flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto z-20">
        {services.map((s, i) => (
          <div key={i} className="w-[calc(33.333%-1.5rem)] max-w-[400px]">
            <ServiceCard title={s.title} desc={s.desc} img={`${import.meta.env.BASE_URL}img/${IMG_NAMES[i]}.webp`} />
          </div>
        ))}
      </div>

      {/* ── Tablet Grid ── */}
      <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-6 max-w-[900px] mx-auto z-20">
        {services.map((s, i) => (
          <div key={i} className="w-[calc(50%-1rem)] max-w-[400px]">
            <ServiceCard title={s.title} desc={s.desc} img={`${import.meta.env.BASE_URL}img/${IMG_NAMES[i]}.webp`} />
          </div>
        ))}
      </div>

      {/* ── Mobile Carousel ── */}
      <div className="md:hidden relative w-full h-[540px] flex items-center justify-center mt-4">
        
        <button
          onClick={prevSlide}
          aria-label="Servicio anterior"
          className="absolute left-1 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-[#000318]/60 backdrop-blur-xl border border-white/10 text-white/90 shadow-lg transition-all active:scale-90 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(181,222,247)]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {services.map((s, i) => {
            let offset = i - activeIndex;
            const len = services.length;
            if (offset < -Math.floor(len / 2)) offset += len;
            if (offset > Math.floor(len / 2)) offset -= len;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <div
                key={i}
                className="absolute w-[85%] sm:w-[75%] h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
                style={{
                  transform: `translateX(${offset * 105}%) scale(${isActive ? 1 : 0.92})`,
                  opacity: isActive ? 1 : isVisible ? 0.35 : 0,
                  zIndex: 20 - Math.abs(offset),
                  pointerEvents: isActive ? 'auto' : 'none',
                  filter: isActive ? 'none' : 'blur(2px)' // Suaviza los bordes de los inactivos para evitar líneas duras
                }}
              >
                <ServiceCard title={s.title} desc={s.desc} img={`${import.meta.env.BASE_URL}img/${IMG_NAMES[i]}.webp`} isMobile />
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Siguiente servicio"
          className="absolute right-1 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-[#000318]/60 backdrop-blur-xl border border-white/10 text-white/90 shadow-lg transition-all active:scale-90 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(181,222,247)]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-[rgb(181,222,247)] shadow-[0_0_8px_rgba(181,222,247,0.6)]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center mt-20 md:mt-24 relative z-20">
        <a
          href="#contacto"
          className={[
            "group inline-flex items-center justify-center gap-3",
            "px-10 py-4 rounded-full font-bold text-[0.95rem] text-[#000318]",
            "bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)]",
            "shadow-[0_4px_20px_rgba(181,222,247,0.25)]",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_8px_30px_rgba(181,222,247,0.5)] hover:-translate-y-1",
            "active:translate-y-0 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318] focus-visible:ring-[rgb(181,222,247)]"
          ].join(' ')}
        >
          {t('services.cta')}
          <svg 
            className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, img, isMobile }) {
  return (
    <article
      tabIndex={0}
      className={[
        "group relative flex flex-col w-full h-full text-center outline-none",
        "rounded-[1.5rem] md:rounded-[2rem] overflow-hidden",
        "bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]",
        "border border-white/5 backdrop-blur-xl",
        "shadow-[0_15px_35px_rgba(0,0,0,0.3)]",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]",
        "hover:border-[rgba(181,222,247,0.25)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(181,222,247,0.15)]",
        "focus-visible:ring-2 focus-visible:ring-[rgb(181,222,247)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318]",
        "will-change-transform" // Optimización de renderizado para evitar glitches en webkit
      ].join(' ')}
    >
      {/* ── Glow Overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 mix-blend-screen"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(181,222,247,0.15) 0%, transparent 60%)' }}
      />

      {/* ── Image Container (Optimizadas para Lighthouse CLS agregando explicit dimensions via css/props) ── */}
      <div className={`relative w-full ${isMobile ? 'h-[230px]' : 'h-[240px] lg:h-[260px]'} overflow-hidden bg-[linear-gradient(180deg,rgba(0,3,24,0.1),rgba(0,3,24,0.5))] border-b border-white/5`}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          width="600"
          height="400"
          className="relative z-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000318] to-transparent opacity-60 z-10 pointer-events-none" />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-grow items-center p-6 md:p-8 lg:p-10 relative z-20">
        <h3 className="m-0 text-xl md:text-2xl font-black tracking-tight text-white mb-4 transition-colors duration-300 group-hover:text-[rgb(181,222,247)] drop-shadow-sm">
          {title}
        </h3>
        <p className="m-0 text-[0.95rem] md:text-base text-[rgba(220,230,245,0.75)] leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </article>
  );
}