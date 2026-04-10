import { useTranslation, Trans } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about-section" id="sobre">
      <div className="about-image-container">
        <img src={`${import.meta.env.BASE_URL}img/Logo.webp`} alt="Logo Gerald.Dev" className="about-image" />
      </div>
      <div className="about-text">
        <h2 className="about-title">
          <Trans i18nKey="about.title">
            About <span className="celeste">Gerald</span><span className="rosa">.Dev</span>
          </Trans>
        </h2>
        <div className="about-title-divider"></div>
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
        <p>{t('about.p4')}</p>
      </div>
    </section>
  );
};

export default About;