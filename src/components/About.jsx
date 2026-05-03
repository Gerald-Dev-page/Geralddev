import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="sobre"
      className="relative max-w-[1200px] mx-auto py-20 md:py-32 px-6 lg:px-8 isolate z-10"
    >
      {/* ── Ambient Light Leaks ── */}
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,200,180,0.12)_0%,transparent_60%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.12)_0%,transparent_60%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        
        {/* ── Contenido de Texto ── */}
        <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] border border-white/5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          
          {/* Logo difuminado de fondo (Solo visible en Mobile/Tablet) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center lg:hidden pointer-events-none select-none opacity-[0.05] mix-blend-screen">
            <img
              src={`${import.meta.env.BASE_URL}img/Logo.webp`}
              alt=""
              aria-hidden="true"
              className="w-[85%] max-w-[320px] object-contain blur-[2px]"
            />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
            <h2 className="m-0 mb-6 text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-white [&_.celeste]:text-[rgb(181,222,247)] [&_.celeste]:drop-shadow-[0_0_12px_rgba(181,222,247,0.3)] [&_.rosa]:text-[rgb(227,180,212)] drop-shadow-sm">
              <Trans i18nKey="about.title">
                About <span className="celeste">Gerald</span><span className="rosa">.Dev</span>
              </Trans>
            </h2>

            <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)] opacity-90 mb-8 shadow-[0_0_16px_rgba(181,222,247,0.4)]" />

            <div className="flex flex-col gap-5 text-[0.95rem] md:text-[1.05rem] leading-relaxed text-[rgba(220,230,245,0.85)] font-medium max-w-[55ch]">
              {['about.p1', 'about.p2', 'about.p3', 'about.p4'].map((key) => (
                <p key={key} className="m-0">
                  {t(key)}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Logo Principal (Solo visible en Desktop) ── */}
        <div className="hidden lg:flex relative z-10 items-center justify-center w-full min-h-[350px]">
          <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(181,222,247,0.08)_0%,transparent_60%)] rounded-full blur-3xl pointer-events-none" />
          
          <img
            src={`${import.meta.env.BASE_URL}img/Logo.webp`}
            alt="Gerald.Dev"
            loading="lazy"
            className="relative z-10 w-[22rem] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:drop-shadow-[0_20px_40px_rgba(181,222,247,0.15)] hover:-translate-y-2"
          />
        </div>

      </div>
    </section>
  );
};

export default About;