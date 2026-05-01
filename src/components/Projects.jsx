import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projectsList = t("projects.list", { returnObjects: true }) || [];

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="relative max-w-[1200px] mx-auto isolate py-24 md:py-32 px-6 lg:px-8"
    >
      {/* ── Light Leaks (Auroras) ── */}
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,200,180,0.15)_0%,transparent_60%)] blur-[100px] rounded-full pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.15)_0%,transparent_60%)] blur-[100px] rounded-full pointer-events-none -z-10"
      />

      {/* ── Header ── */}
      <header className="flex flex-col items-center text-center mb-20 md:mb-28">
        <h2
          id="projects-title"
          className="m-0 text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-tight text-white mb-6 drop-shadow-sm"
        >
          {t("projects.title")}
        </h2>
        <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)] opacity-90 shadow-[0_0_16px_rgba(181,222,247,0.4)]" />
      </header>

      {/* ── Grid ── */}
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
        {Array.isArray(projectsList) &&
          projectsList.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} index={index} />
          ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 1;

  return (
    <article className="group relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 lg:gap-20 items-center p-6 md:p-10 lg:p-12 rounded-[2.5rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))] border border-white/5 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:border-white/10 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
      
      {/* ── Ambient Card Glow ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        style={{
          background: isEven
            ? "radial-gradient(circle at 80% 50%, rgba(227,180,212,0.08) 0%, transparent 60%)"
            : "radial-gradient(circle at 20% 50%, rgba(181,222,247,0.08) 0%, transparent 60%)"
        }}
      />

      {/* ── Image Column ── */}
      <div
        className={[
          "relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white/5 p-2",
          "border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]",
          "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]",
          isEven ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#000318]/40 to-transparent z-10 opacity-60 mix-blend-multiply pointer-events-none" />
        <img
          src={`${import.meta.env.BASE_URL}img/${project.img}`}
          alt={`Captura del proyecto ${project.title}`}
          loading="lazy"
          className="w-full h-auto object-cover rounded-[1.25rem] md:rounded-[1.75rem] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
        />
      </div>

      {/* ── Content Column ── */}
      <div
        className={[
          "relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left",
          isEven ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <span className="inline-flex items-center px-3 py-1 mb-5 text-[0.7rem] md:text-xs font-bold tracking-[0.2em] uppercase text-[rgb(181,222,247)] bg-[rgba(181,222,247,0.05)] border border-[rgba(181,222,247,0.15)] rounded-full">
          {project.caption}
        </span>

        <h3 className="m-0 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white mb-5 drop-shadow-sm">
          {project.title}
        </h3>

        <p className="m-0 text-base md:text-lg leading-relaxed text-white/70 max-w-[45ch] mb-8 font-medium">
          {project.desc}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "group/btn inline-flex items-center justify-center gap-3 w-full sm:w-auto",
            "px-7 py-3.5 rounded-full font-semibold text-[0.95rem] text-white",
            "bg-white/5 border border-white/10 backdrop-blur-md",
            "transition-all duration-300 ease-out",
            "hover:bg-[rgba(181,222,247,0.1)] hover:border-[rgba(181,222,247,0.3)] hover:text-[rgb(181,222,247)]",
            "hover:shadow-[0_8px_24px_rgba(181,222,247,0.15)] hover:-translate-y-1",
            "active:translate-y-0 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318]"
          ].join(" ")}
        >
          {project.button}
          <svg 
            className="w-4 h-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}