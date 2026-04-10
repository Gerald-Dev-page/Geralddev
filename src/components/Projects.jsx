import { useTranslation } from "react-i18next";
import "./Projects.css";

export default function Projects() {
  const { t } = useTranslation();
  const projectsList = t("projects.list", { returnObjects: true }) || [];

  return (
    <section className="projects-section" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-aurora projects-aurora--left" aria-hidden="true" />
      <div className="projects-aurora projects-aurora--right" aria-hidden="true" />

      <header className="projects-header">
        
        <h2 className="projects-title" id="projects-title">{t("projects.title")}</h2>
        <div className="projects-title-divider" />
      </header>

      <div className="projects-grid">
        {Array.isArray(projectsList) && projectsList.map((project, index) => (
          <article className="project-card" key={`project-${index}`}>

            {/* Glow detrás de la imagen */}
            <div className="project-glow" aria-hidden="true" />

            <div className="project-media">
              <img
                src={`${import.meta.env.BASE_URL}img/${project.img}`}
                alt={`${project.title} — captura del proyecto`}
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <p className="project-caption">{project.caption}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-lead">{project.desc}</p>

              <a
                className="project-button"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.button}
                <span className="project-button-arrow" aria-hidden="true">→</span>
              </a>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}