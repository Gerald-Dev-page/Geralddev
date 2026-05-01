import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const languages = [
  { code: 'es', img: '/img/argentina.webp',   alt: 'Español'   },
  { code: 'en', img: '/img/estados-unidos.webp', alt: 'English'    },
  { code: 'pt', img: '/img/brasil.webp',         alt: 'Português'  },
];

export default function LanguageSelector() {
  const { i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language || 'es';

  return (
    <div className="flex items-center justify-center gap-2 md:ml-4 md:pl-4 md:border-l md:border-[rgba(181,222,247,0.15)]">
      {languages.map(lang => {
        const isActive = currentLang.startsWith(lang.code);
        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-label={lang.alt}
            aria-pressed={isActive}
            title={lang.alt}
            className={[
              "group relative flex items-center justify-center p-1.5 cursor-pointer outline-none rounded-xl",
              "transition-all duration-300 ease-out",
              isActive
                ? "bg-[rgba(181,222,247,0.12)] border border-[rgba(181,222,247,0.3)] shadow-[0_4px_16px_rgba(181,222,247,0.15)]"
                : "bg-transparent border border-transparent hover:bg-[rgba(181,222,247,0.06)] hover:border-[rgba(181,222,247,0.15)]",
              "focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318]"
            ].join(' ')}
          >
            <img
              src={lang.img}
              alt={lang.alt}
              width={30}
              height={22}
              className={[
                "block w-[30px] h-[22px] object-cover rounded-[4px] flex-shrink-0",
                "border border-[rgba(255,255,255,0.1)] shadow-sm",
                "transition-all duration-300 ease-out",
                isActive
                  ? "opacity-100 scale-105 drop-shadow-[0_2px_8px_rgba(181,222,247,0.35)]"
                  : "opacity-60 saturate-50 group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-[1.02]"
              ].join(' ')}
            />
          </button>
        );
      })}
    </div>
  );
}