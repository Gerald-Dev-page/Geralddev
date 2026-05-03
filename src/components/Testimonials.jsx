import { useTranslation } from "react-i18next";

export default function Testimonial() {
  const { t } = useTranslation();
  const testimonials = t("testimonial.list", { returnObjects: true }) || [];

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonial-title"
      className="relative max-w-[1200px] mx-auto py-20 md:py-32 px-6 lg:px-8 text-white isolate z-10"
    >
      {/* ── Ambient Light Leaks ── */}
      <div
        aria-hidden="true"
        className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,200,180,0.1)_0%,transparent_60%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.1)_0%,transparent_60%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />

      {/* ── Header ── */}
      <header className="flex flex-col items-center text-center mb-16 md:mb-24">
        <h2
          id="testimonial-title"
          className="m-0 text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-tight text-white mb-5 drop-shadow-sm"
        >
          {t("testimonial.title")}
        </h2>
        <p className="m-0 text-base md:text-lg text-[rgba(210,220,235,0.8)] font-medium max-w-2xl mb-8 leading-relaxed">
          {t("testimonial.subtitle")}
        </p>
        <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)] opacity-90 shadow-[0_0_16px_rgba(181,222,247,0.4)]" />
      </header>

      {/* ── Cards Container ── */}
      <div className="flex flex-col gap-8 md:gap-12 max-w-4xl mx-auto">
        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          testimonials.map((item, index) => (
            <TestimonialCard key={`testimonial-${index}`} item={item} />
          ))
        ) : (
          <div className="w-full flex justify-center py-12">
            <span className="w-8 h-8 border-4 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── TestimonialCard ─────────────────────────────────────────────────────── */
function TestimonialCard({ item }) {
  return (
    <article
      tabIndex={0}
      className={[
        "group relative flex flex-col md:flex-row items-center gap-8 md:gap-14",
        "p-8 md:p-12 lg:p-14 rounded-[2rem] md:rounded-[2.5rem] outline-none",
        "bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]",
        "border border-white/5 backdrop-blur-xl",
        "shadow-[0_15px_35px_rgba(0,0,0,0.2)]",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]",
        "hover:border-white/10 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]",
        "focus-visible:ring-2 focus-visible:ring-[rgb(181,222,247)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318]"
      ].join(" ")}
    >
      {/* ── Ambient Inner Glow ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 rounded-[inherit]"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(227,180,212,0.1) 0%, transparent 50%)"
        }}
      />

      {/* ── Top Highlight ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-[20%] left-[20%] h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(181,222,247,0.5), transparent)"
        }}
      />

      {/* ── Avatar Block ── */}
      <div className="relative order-1 md:order-2 flex-shrink-0 flex items-center justify-center">
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full p-[2px] bg-gradient-to-br from-[rgb(181,222,247)] to-[rgb(227,180,212)] opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(181,222,247,0.15)] group-hover:shadow-[0_0_40px_rgba(181,222,247,0.35)] group-hover:scale-105 group-hover:-rotate-3">
          <div className="w-full h-full rounded-full bg-[#000318] p-[3px] overflow-hidden">
            {/* Se agregaron width, height y decoding async para optimización de Lighthouse */}
            <img
              src={`${import.meta.env.BASE_URL}img/${item.img}`}
              alt={item.author}
              loading="lazy"
              decoding="async"
              width="160"
              height="160"
              className="w-full h-full object-cover rounded-full filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* ── Text Content ── */}
      <div className="relative flex-1 order-2 md:order-1 flex flex-col text-center md:text-left z-10 w-full">
        <svg 
          className="absolute -top-6 -left-4 md:-top-8 md:-left-6 w-12 h-12 md:w-16 md:h-16 text-[rgb(181,222,247)] opacity-[0.08] transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:opacity-[0.15] group-hover:scale-110 pointer-events-none" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <p className="relative z-10 m-0 mb-8 md:mb-10 text-[0.95rem] md:text-lg lg:text-[1.15rem] leading-[1.8] text-[rgba(232,235,245,0.9)] font-medium">
          {item.text}
        </p>

        <div className="mt-auto flex flex-col items-center md:items-end md:text-right border-t border-white/5 pt-6 w-full">
          <span className="font-extrabold text-white text-lg md:text-xl tracking-tight mb-1 group-hover:text-[rgb(181,222,247)] transition-colors duration-300 drop-shadow-sm">
            {item.author}
          </span>
          <span className="text-[rgb(227,180,212)] text-xs md:text-sm font-bold tracking-[0.15em] uppercase opacity-90 drop-shadow-sm">
            {item.role}
          </span>
        </div>
      </div>
    </article>
  );
}