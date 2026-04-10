import { useTranslation, Trans } from "react-i18next";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="inicio" className="hero-container">


      <h1 className="hero-title">
        <Trans i18nKey="hero.title" components={[
          <span className="celeste" />,
          <br />,
          <span className="rosa" />
        ]} />
      </h1>

      <p className="hero-subtitle">
        <Trans i18nKey="hero.subtitle" />
      </p>

      <div className="hero-ctas">
        <a href="#contacto" className="hero-cta hero-cta--primary">
          {t("hero.cta.contact")}
        </a>
        <a href="#servicios" className="hero-cta hero-cta--secondary">
          {t("hero.cta.services")}
        </a>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
}