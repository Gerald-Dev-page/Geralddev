// src/components/LanguageSelector.jsx
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const languages = [
  { code: 'es', img: '/img/argentina.webp', alt: 'Español' },
  { code: 'en', img: '/img/estados-unidos.webp', alt: 'English' },
  { code: 'pt', img: '/img/brasil.webp', alt: 'Português' }
];

export default function LanguageSelector() {
  const { i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language || 'es';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar-lang-selector">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`lang-btn${currentLang.startsWith(lang.code) ? ' active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          aria-label={lang.alt}
          tabIndex={0}
        >
          <img
            src={lang.img}
            alt={lang.alt}
          />
        </button>
      ))}
    </div>
  );
}
