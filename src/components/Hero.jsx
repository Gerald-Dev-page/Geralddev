import { useTranslation, Trans } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center text-center min-h-[90vh] md:min-h-screen max-w-[1000px] mx-auto px-6 -mt-14 z-10 text-white"
    >
      {/* ── Brillo de fondo central para mejorar contraste del texto ── */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none -z-10 blur-2xl"
      />

      <Aurora
        className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] top-[15%] -right-[5%]"
        color="radial-gradient(circle at center, rgba(0,200,180,0.55) 0%, rgba(70,150,180,0.25) 50%, transparent 80%)"
        animation="aurora1"
      />
      <Aurora
        className="w-[240px] h-[240px] md:w-[400px] md:h-[400px] bottom-[10%] left-[2%]"
        color="radial-gradient(circle at center, rgba(227,180,212,0.50) 0%, rgba(227,180,212,0.20) 50%, transparent 80%)"
        animation="aurora2"
      />

      <h1 className="m-0 mb-6 font-black text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tighter drop-shadow-sm [&_.celeste]:text-[rgb(181,222,247)] [&_.celeste]:drop-shadow-[0_0_24px_rgba(181,222,247,0.3)] [&_.rosa]:text-[rgb(227,180,212)] [&_.rosa]:drop-shadow-[0_0_24px_rgba(227,180,212,0.3)]">
        <Trans
          i18nKey="hero.title"
          components={[
            <span className="celeste relative inline-block" />,
            <br />,
            <span className="rosa relative inline-block" />,
          ]}
        />
      </h1>

      <p className="m-0 mb-10 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-[rgba(210,225,242,0.8)] drop-shadow-sm">
        <Trans i18nKey="hero.subtitle" />
      </p>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full sm:w-auto mb-16 md:mb-12">
        <CtaLink href="#contacto" variant="primary">
          {t("hero.cta.contact")}
        </CtaLink>
        <CtaLink href="#servicios" variant="secondary">
          {t("hero.cta.services")}
        </CtaLink>
      </div>

      <div
        aria-hidden="true"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center opacity-60 transition-opacity duration-300 hover:opacity-100"
      >
        <div className="w-[2px] h-16 rounded-full bg-gradient-to-b from-[rgba(181,222,247,0.8)] via-[rgba(181,222,247,0.2)] to-transparent animate-[scrollDrop_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}

function Aurora({ className, color, animation }) {
  return (
    <div
      aria-hidden="true"
      style={{
        background: color,
        animationName: animation === "aurora1" ? "auroraMoveScale1" : "auroraMoveScale2",
        animationDuration: animation === "aurora1" ? "8s" : "10s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDirection: animation === "aurora2" ? "reverse" : "normal",
      }}
      className={[
        "absolute rounded-full pointer-events-none -z-10 mix-blend-screen blur-[90px] md:blur-[120px] opacity-60",
        className,
      ].join(" ")}
    />
  );
}

function CtaLink({ href, variant, children }) {
  const base = [
    "inline-flex items-center justify-center w-full sm:w-auto",
    "px-8 py-3.5 md:px-10 md:py-4",
    "rounded-[1.25rem] font-bold text-[0.95rem] md:text-base",
    "no-underline cursor-pointer backdrop-blur-md",
    "transition-all duration-300 ease-out",
    "hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318]"
  ];

  const variants = {
    primary: [
      "bg-[rgba(181,222,247,0.12)] border border-[rgba(181,222,247,0.3)] text-white",
      "shadow-[0_8px_32px_rgba(181,222,247,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]",
      "hover:bg-[rgba(181,222,247,0.95)] hover:text-[#000318] hover:border-transparent hover:shadow-[0_12px_40px_rgba(181,222,247,0.4)]",
      "focus-visible:ring-[rgb(181,222,247)]"
    ],
    secondary: [
      "bg-transparent border border-[rgba(227,180,212,0.3)] text-[rgba(227,180,212,0.95)]",
      "shadow-[0_4px_20px_rgba(227,180,212,0.08)]",
      "hover:bg-[rgba(227,180,212,0.1)] hover:border-[rgba(227,180,212,0.6)] hover:text-white hover:shadow-[0_8px_32px_rgba(227,180,212,0.25)]",
      "focus-visible:ring-[rgb(227,180,212)]"
    ],
  };

  return (
    <a href={href} className={[...base, ...variants[variant]].join(" ")}>
      {children}
    </a>
  );
}