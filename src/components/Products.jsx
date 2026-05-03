import { useTranslation } from "react-i18next";

export default function ProductData() {
  const { t } = useTranslation();

  return (
    <section
      id="producto"
      aria-labelledby="product-title"
      className="relative max-w-[1300px] mx-auto isolate py-24 md:py-32 px-5 lg:px-8"
    >
      {/* ── Fondo Corporativo (Grid Tech Pattern) ── */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-20 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 80%)'
        }}
      />

      {/* ── Brillos sutiles ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[80%] max-w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(181,222,247,0.08)_0%,transparent_50%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />

      <article className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center bg-[#050714]/80 border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl overflow-hidden">
        
        {/* Resplandor interno sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(181,222,247,0.03)] via-transparent to-[rgba(227,180,212,0.03)] pointer-events-none" />

        {/* ── Columna Izquierda: Copywriting y Marketing ── */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left p-8 md:p-12 lg:p-16 z-10">
          
          {/* Badge "Live" */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span className="text-[0.7rem] md:text-xs font-bold tracking-[0.15em] uppercase text-white/90">
              {t("dataProduct.badge")}
            </span>
          </div>

          {/* Logo del SaaS */}
          <img 
            src={`${import.meta.env.BASE_URL}img/data-logo.png`} 
            alt="Logo .DATA" 
            width="140"
            height="70"
            className="h-10 md:h-12 w-auto object-contain mb-8 drop-shadow-[0_2px_12px_rgba(255,255,255,0.1)]"
          />

          <h3 
            id="product-title"
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.15] text-white mb-6 drop-shadow-sm"
          >
            {t("dataProduct.slogan")}
          </h3>

          <div className="flex flex-col gap-4 mb-10 text-base md:text-lg leading-relaxed text-[rgba(220,230,245,0.75)] max-w-[45ch]">
            <p className="m-0">{t("dataProduct.p1")}</p>
            <p className="m-0 font-semibold text-[rgb(181,222,247)]">
              {t("dataProduct.p2")}
            </p>
            <p className="m-0">{t("dataProduct.p3")}</p>
            <p className="m-0">{t("dataProduct.p4")}</p>
          </div>

          {/* Botón de Alta Conversión */}
          <a
            href="https://demo-saas.geralddev.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "group inline-flex items-center justify-center gap-3 w-full sm:w-auto",
              "px-8 py-4 rounded-xl font-bold text-[1rem] text-[#000318]",
              "bg-white transition-all duration-300 ease-out",
              "hover:bg-[rgb(181,222,247)] hover:shadow-[0_8px_25px_rgba(181,222,247,0.4)] hover:-translate-y-1",
              "active:translate-y-0 active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050714] focus-visible:ring-[rgb(181,222,247)]"
            ].join(" ")}
          >
            {t("dataProduct.button")}
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

        {/* ── Columna Derecha: Mockup del Software ── */}
        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-6 md:p-12 lg:p-12 z-10">
          
          {/* Resplandor detrás del mockup */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.12)_0%,transparent_60%)] pointer-events-none" />
          
          {/* Contenedor del Mockup (Estilo macOS Window) */}
          <div className="relative w-full max-w-[600px] lg:max-w-none rounded-[1rem] bg-[#0a0a0a] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
            
            {/* Barra superior del navegador/app */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <div className="ml-4 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[0.65rem] text-white/40 font-mono tracking-wider flex-1 text-center truncate">
                demo-saas.geralddev.com.ar
              </div>
            </div>

            {/* Imagen del Sistema */}
            <div className="relative bg-[#000318]">
              <img
                src={`${import.meta.env.BASE_URL}img/Demo-Saas.webp`}
                alt="Interfaz del sistema .DATA"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                className="w-full h-auto block object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
              />
            </div>

          </div>
        </div>

      </article>
    </section>
  );
}