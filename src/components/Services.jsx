import { useTranslation, Trans } from 'react-i18next';
import './Services.css';

export default function Services() {
  const { t } = useTranslation();
  const services = t('services.list', { returnObjects: true });
  const imgNames = ['Desarrollo2', 'Tiendas2', 'Portfolios2', 'Soluciones2'];

  return (
    <section className="services-section" id="servicios" aria-labelledby="services-title">
      <div className="services-separator" aria-hidden="true" />
      <div className="services-aurora services-aurora--left" aria-hidden="true" />
      <div className="services-aurora services-aurora--right" aria-hidden="true" />

      <header className="services-header">
        
        <h2 className="services-title" id="services-title">
          <Trans i18nKey="services.title">
            Our <span className="celeste">Services</span>
          </Trans>
        </h2>
        <p className="services-subtitle">{t('services.subtitle')}</p>
        <div className="services-title-divider" />
      </header>

      <div className="services-grid">
        {services.map((s, i) => (
          <article className="service-card" key={i} tabIndex={0}>
            <div className="service-media">
              <img
                src={`${import.meta.env.BASE_URL}img/${imgNames[i]}.webp`}
                alt={s.title}
                loading="lazy"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="services-cta">
        <a className="services-button" href="#contacto">{t('services.cta')}</a>
      </div>
    </section>
  );
}