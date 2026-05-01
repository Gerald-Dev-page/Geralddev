import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="sobre"
      className="relative max-w-[1200px] mx-auto py-20 md:py-32 px-5 isolate z-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center md:justify-end overflow-hidden"
      >
        <div
          className="absolute rounded-full blur-[72px] opacity-40 mix-blend-screen pointer-events-none w-[320px] h-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,200,180,0.50) 0%, rgba(70,150,180,0.25) 50%, transparent 80%)',
            animation: 'auroraFloat 7s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-[60px] opacity-30 mix-blend-screen pointer-events-none w-[250px] h-[250px] top-[55%] left-[48%] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(227,180,212,0.50) 0%, rgba(227,180,212,0.25) 50%, transparent 80%)',
            animation: 'auroraFloat 9s ease-in-out infinite reverse',
          }}
        />

        <img
          src={`${import.meta.env.BASE_URL}img/Logo.webp`}
          alt=""
          className="object-contain select-none w-[75vw] max-w-[320px] opacity-[0.04] md:w-[450px] md:max-w-none md:opacity-[0.06] transition-opacity duration-700 blur-[2px] md:blur-0 filter drop-shadow-[0_0_40px_rgba(181,222,247,0.1)]"
        />
      </div>

      <div className="relative z-10 w-full md:max-w-[65%] lg:max-w-[55%] p-8 md:p-12 rounded-[2rem] bg-[linear-gradient(145deg,rgba(8,10,21,0.85),rgba(8,10,21,0.65))] md:bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] backdrop-blur-2xl border border-[rgba(255,255,255,0.06)] shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-[rgba(181,222,247,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
        
        <h2 className="m-0 mb-6 text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] text-white text-center md:text-left [&_.celeste]:text-brand-celeste [&_.rosa]:text-brand-rosa drop-shadow-sm">
          <Trans i18nKey="about.title">
            About <span className="celeste">Gerald</span><span className="rosa">.Dev</span>
          </Trans>
        </h2>

        <div className="w-16 h-1.5 rounded-full bg-gradient-brand opacity-90 mb-8 mx-auto md:mx-0 shadow-[0_0_12px_rgba(181,222,247,0.4)]" />

        <div className="flex flex-col gap-5 text-center md:text-left text-[0.95rem] md:text-lg leading-relaxed text-[rgba(220,230,245,0.80)]">
          {['about.p1', 'about.p2', 'about.p3', 'about.p4'].map((key) => (
            <p key={key} className="m-0 max-w-[55ch] mx-auto md:mx-0">
              {t(key)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;