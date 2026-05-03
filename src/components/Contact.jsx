import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setSending(true);
      setStatus(null);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      formRef.current.reset();
      setStatus({ ok: true, msg: t("contact.form.ok") });
    } catch (err) {
      setStatus({ ok: false, msg: t("contact.form.err") });
    } finally {
      setSending(false);
    }
  };

  const inputStyles = [
    'w-full font-medium text-[0.95rem]',
    'text-white placeholder:text-white/30',
    'bg-white/5 border border-white/10',
    'rounded-xl py-3.5 px-5 outline-none',
    'transition-all duration-300 ease-out',
    'focus:bg-white/10 focus:border-[rgba(181,222,247,0.5)] focus:shadow-[0_0_15px_rgba(181,222,247,0.15)]',
    'hover:border-white/20'
  ].join(' ');

  const labelStyles = 'block text-[0.8rem] font-bold mb-2 text-white/70 tracking-wide uppercase';

  const CONTACT_CHANNELS = [
    { 
      href: "https://wa.me/5492664952528", 
      icon: "whatsapp.webp", 
      title: "WhatsApp", 
    },
    { 
      href: "mailto:lorenzo.geraldo.munoz@gmail.com", 
      icon: "gmail.webp", 
      title: "Email", 
    },
    { 
      href: "https://www.instagram.com/gerald.devv/", 
      icon: "instagram.webp", 
      title: "Instagram", 
    }
  ];

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="relative isolate max-w-[1200px] mx-auto py-20 md:py-32 px-6 lg:px-8 text-white z-10"
    >
      {/* ── Ambient Light Leaks ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,200,180,0.15)_0%,transparent_60%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.15)_0%,transparent_60%)] blur-[80px] rounded-full pointer-events-none -z-10"
      />

      <header className="flex flex-col items-center text-center mb-16 md:mb-20">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase text-[rgb(181,222,247)] bg-[rgba(181,222,247,0.08)] border border-[rgba(181,222,247,0.2)] mb-6 shadow-[0_0_12px_rgba(181,222,247,0.1)]">
          {t("contact.badge") || "Contacto"}
        </span>
        <h2
          id="contact-title"
          className="m-0 text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-tight text-white mb-5 drop-shadow-sm"
        >
          {t("contact.title")}
        </h2>
        <p className="m-0 text-base md:text-lg text-white/70 font-medium max-w-2xl mb-8 leading-relaxed">
          {t("contact.subtitle")}
        </p>
        <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)] opacity-90 shadow-[0_0_16px_rgba(181,222,247,0.4)]" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 md:gap-12 items-start">

        {/* ── Columna Izquierda: Canales de Contacto ── */}
        <aside className="flex flex-col gap-6 order-2 lg:order-1">
          {/* Fila de íconos para Mobile / Lista de tarjetas para Desktop */}
          <div className="flex flex-row justify-center md:justify-start lg:flex-col gap-4">
            {CONTACT_CHANNELS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.title !== 'Email' ? "_blank" : undefined}
                rel={link.title !== 'Email' ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-center lg:justify-start gap-5 w-14 h-14 lg:w-auto lg:h-auto lg:p-4 lg:rounded-2xl rounded-xl bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] border border-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)]"
                aria-label={link.title}
              >
                <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 lg:rounded-full lg:bg-white/5 lg:border lg:border-white/10 transition-transform duration-300 group-hover:scale-110 lg:group-hover:bg-white/10 lg:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <img
                    src={`${import.meta.env.BASE_URL}img/${link.icon}`}
                    alt={link.title}
                    className="w-6 h-6 lg:w-6 lg:h-6 object-contain drop-shadow-md"
                  />
                </div>
                <div className="hidden lg:flex flex-col">
                  <h3 className="text-white font-bold text-[1.05rem] md:text-[1.1rem] tracking-wide group-hover:text-[rgb(181,222,247)] transition-colors">
                    {link.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-2xl bg-[linear-gradient(145deg,rgba(181,222,247,0.05),transparent)] border border-[rgba(181,222,247,0.15)] p-6 mt-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(181,222,247,0.1),transparent_70%)] pointer-events-none" />
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(181,222,247)] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[rgb(181,222,247)] shadow-[0_0_8px_rgba(181,222,247,0.8)]"></span>
              </span>
              <h4 className="text-[rgb(181,222,247)] font-bold tracking-wide">
                {"Disponibilidad"}
              </h4>
            </div>
            <p className="m-0 text-[0.95rem] leading-relaxed text-white/70 font-medium text-center lg:text-left">
              {t("contact.asideNote") || "Respondo en menos de 24hs. ¡No dudes en escribirme para cotizar tu proyecto!"}
            </p>
          </div>
        </aside>

        {/* ── Columna Derecha: Formulario ── */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="order-1 lg:order-2 flex flex-col gap-6 p-8 md:p-10 lg:p-12 rounded-[2.5rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))] border border-white/5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelStyles}>{t("contact.form.name")}</label>
              <input id="name" name="user_name" type="text" placeholder="Ej: Juan Pérez" required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="email" className={labelStyles}>{t("contact.form.email")}</label>
              <input id="email" name="user_email" type="email" placeholder="hola@tuempresa.com" required className={inputStyles} />
            </div>
          </div>

          <div>
            <label htmlFor="service" className={labelStyles}>{t("contact.form.interest")}</label>
            <div className="relative">
              <select
                id="service"
                name="service"
                defaultValue=""
                className={[
                  inputStyles,
                  'appearance-none cursor-pointer',
                ].join(' ')}
              >
                <option value="" disabled className="text-white bg-[#000318]">{t("contact.form.interestPlaceholder")}</option>
                <option value="web" className="text-white bg-[#000318]">{t("contact.interestOptions.web")}</option>
                <option value="ecommerce" className="text-white bg-[#000318]">{t("contact.interestOptions.ecommerce")}</option>
                <option value="landing" className="text-white bg-[#000318]">{t("contact.interestOptions.landing")}</option>
                <option value="custom" className="text-white bg-[#000318]">{t("contact.interestOptions.custom")}</option>
                <option value="cm" className="text-white bg-[#000318]">{t("contact.interestOptions.cm")}</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelStyles}>{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t("contact.form.messagePlaceholder")}
              required
              className={`${inputStyles} resize-y min-h-[120px]`}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
            <button
              type="submit"
              disabled={sending}
              className={[
                "group w-full sm:w-auto inline-flex items-center justify-center gap-3",
                "px-10 py-4 rounded-xl font-bold text-[0.95rem] text-[#000318]",
                "bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)]",
                "shadow-[0_4px_20px_rgba(181,222,247,0.25)]",
                "transition-all duration-300 ease-out",
                "hover:shadow-[0_8px_30px_rgba(181,222,247,0.5)] hover:-translate-y-1",
                "active:translate-y-0 active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318] focus-visible:ring-[rgb(181,222,247)]",
                "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_4px_20px_rgba(181,222,247,0.25)]"
              ].join(" ")}
            >
              {sending ? (
                <>
                  <span className="w-5 h-5 border-2 border-[#000318]/20 border-t-[#000318] rounded-full animate-spin" />
                  {t("contact.form.sending")}
                </>
              ) : (
                <>
                  {t("contact.form.submit")}
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>

            {/* ── Mensaje de Estado Moderno ── */}
            {status && (
              <div 
                className={`flex-1 flex items-center justify-center sm:justify-start gap-3 px-5 py-3.5 rounded-xl border backdrop-blur-md animate-[fadeIn_0.3s_ease-out] w-full sm:w-auto ${
                  status.ok
                    ? 'text-[#4ade80] border-[#4ade80]/20 bg-[#4ade80]/10'
                    : 'text-[#f87171] border-[#f87171]/20 bg-[#f87171]/10'
                }`}
              >
                <div className={`flex items-center justify-center w-6 h-6 rounded-full ${status.ok ? 'bg-[#4ade80]/20' : 'bg-[#f87171]/20'}`}>
                  {status.ok ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  )}
                </div>
                <span className="text-[0.9rem] font-semibold">{status.msg}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}