import { useTranslation } from "react-i18next";

export default function ProductData() {
  const { t } = useTranslation();

  return (
    <section
      id="producto"
      aria-labelledby="product-title"
      className="relative max-w-[1200px] mx-auto isolate py-20 md:py-32 px-5"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[80%] max-w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(181,222,247,0.15)_0%,transparent_60%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />

      <article className="relative grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-8 items-center bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] border border-white/5 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl overflow-hidden group">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(181,222,247,0.05)] via-transparent to-[rgba(227,180,212,0.05)] opacity-50 pointer-events-none" />

        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left p-8 md:p-12 lg:p-16 z-10">
          
          <span className="inline-flex items-center px-4 py-1.5 mb-8 text-[0.7rem] md:text-xs font-bold tracking-[0.15em] uppercase text-[rgb(181,222,247)] bg-[rgba(181,222,247,0.08)] border border-[rgba(181,222,247,0.2)] rounded-full shadow-[0_0_12px_rgba(181,222,247,0.1)]">
            {t("dataProduct.badge")}
          </span>

          <img 
            src={`${import.meta.env.BASE_URL}img/data-logo.png`} 
            alt="Logo .DATA" 
            className="h-10 md:h-14 w-auto object-contain mb-6 drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
          />

          <h3 
            id="product-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white mb-6 drop-shadow-sm"
          >
            {t("dataProduct.slogan")}
          </h3>

          <div className="flex flex-col gap-4 mb-10 text-base md:text-[1.05rem] leading-relaxed text-white/70 max-w-[50ch]">
            <p className="m-0">{t("dataProduct.p1")}</p>
            <p className="m-0 font-semibold text-[rgb(181,222,247)] drop-shadow-[0_0_8px_rgba(181,222,247,0.2)]">
              {t("dataProduct.p2")}
            </p>
            <p className="m-0">{t("dataProduct.p3")}</p>
            <p className="m-0">{t("dataProduct.p4")}</p>
          </div>

          <a
            href="https://demo-saas.geralddev.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "group/btn inline-flex items-center justify-center gap-3 w-full sm:w-auto",
              "px-8 py-4 rounded-full font-bold text-[0.95rem] text-[#000318]",
              "bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)]",
              "shadow-[0_4px_20px_rgba(181,222,247,0.3)]",
              "transition-all duration-300 ease-out",
              "hover:shadow-[0_8px_30px_rgba(181,222,247,0.5)] hover:-translate-y-1",
              "active:translate-y-0 active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318] focus-visible:ring-[rgb(181,222,247)]"
            ].join(" ")}
          >
            {t("dataProduct.button")}
            <svg 
              className="w-5 h-5 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-6 md:p-12 lg:p-0 lg:pr-16 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.15)_0%,transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative w-full max-w-[500px] lg:max-w-[120%] lg:-ml-12 rounded-[1.25rem] p-2 md:p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:-rotate-1">
            <img
              src={`${import.meta.env.BASE_URL}img/Demo-Saas.webp`}
              alt="Interfaz del sistema .DATA"
              loading="lazy"
              className="w-full h-auto block rounded-xl md:rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
            />
          </div>
        </div>

      </article>
    </section>
  );
}