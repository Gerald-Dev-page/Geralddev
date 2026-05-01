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
    'w-full font-inherit text-[0.95rem] font-normal',
    'text-[#eaf2ff] placeholder:text-[rgba(181,210,235,0.35)]',
    'bg-[rgba(255,255,255,0.04)] border border-[rgba(181,222,247,0.14)]',
    'rounded-xl py-3 px-4 outline-none',
    'transition-[border-color,box-shadow,background] duration-200 ease-in-out',
    'focus:border-[rgba(181,222,247,0.65)] focus:ring-[3px] focus:ring-[rgba(181,222,247,0.12)]',
    'focus:bg-[rgba(255,255,255,0.07)]',
    'motion-reduce:transition-none'
  ].join(' ');

  const labelStyles = 'text-[0.78rem] font-semibold mb-[0.45rem] text-[rgba(181,222,247,0.6)] tracking-widest uppercase';

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="relative isolate max-w-[1200px] mx-auto mt-16 mb-16 md:mt-24 md:mb-20 px-5 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 w-[500px] h-[500px] blur-[120px] opacity-30 pointer-events-none rounded-full -top-24 -left-40 bg-[radial-gradient(circle_at_center,rgba(0,200,180,0.7)_0%,rgba(70,150,180,0.3)_50%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -z-10 w-[500px] h-[500px] blur-[120px] opacity-25 pointer-events-none rounded-full -bottom-24 -right-32 bg-[radial-gradient(circle_at_center,rgba(227,180,212,0.7)_0%,rgba(227,180,212,0.3)_50%,transparent_80%)]"
      />

      <header className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase text-[rgba(181,222,247,0.65)] border border-[rgba(181,222,247,0.15)] bg-[rgba(181,222,247,0.05)] mb-4">
          Contacto
        </span>
        <h2
          id="contact-title"
          className="m-0 mb-3 font-black text-[clamp(2rem,5.5vw,2.9rem)] tracking-[-0.03em] leading-[1.1]"
        >
          {t("contact.title")}
        </h2>
        <p className="m-0 mb-5 text-[rgba(190,210,230,0.72)] font-normal text-[1rem] max-w-md mx-auto leading-relaxed">
          {t("contact.subtitle")}
        </p>
        <div className="w-10 h-[2px] rounded-full bg-gradient-to-r from-[rgb(181,222,247)] to-[rgb(227,180,212)] mx-auto opacity-60" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-6 items-start">

        <aside className="flex flex-col gap-5 order-first md:order-none py-7 px-6 rounded-[20px] bg-[linear-gradient(145deg,rgba(8,10,21,0.65),rgba(8,10,21,0.42))] border border-[rgba(181,222,247,0.12)] backdrop-blur-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.35)]">

          <div>
            <p className="m-0 mb-1 text-[0.72rem] font-semibold tracking-widest uppercase text-[rgba(181,222,247,0.5)]">
              {t("contact.channels")}
            </p>
            <div className="mt-3 flex flex-wrap gap-3 items-center justify-center md:justify-start">
              {[
                { href: "https://wa.me/5492664952528", icon: "whatsapp.webp", label: "WhatsApp" },
                { href: "mailto:lorenzo.geraldo.munoz@gmail.com", icon: "gmail.webp", label: "Email" },
                { href: "https://www.instagram.com/gerald.devv/", icon: "instagram.webp", label: "Instagram" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.label !== 'Email' ? "_blank" : undefined}
                  rel={link.label !== 'Email' ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-[rgba(181,222,247,0.07)] border border-[rgba(181,222,247,0.16)] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[rgba(181,222,247,0.16)] hover:scale-105 hover:border-[rgba(181,222,247,0.35)] hover:shadow-[0_0_16px_rgba(181,222,247,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.5)]"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}img/${link.icon}`}
                    alt={link.label}
                    className="w-5 h-5 object-contain opacity-85"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-[rgba(181,222,247,0.08)]" />

          <div className="rounded-[14px] bg-[rgba(181,222,247,0.04)] border border-[rgba(181,222,247,0.10)] px-4 py-4">
            <p className="m-0 text-[0.85rem] leading-[1.65] text-[rgba(190,210,230,0.65)]">
              {t("contact.asideNote") || "Respondo en menos de 24hs. ¡No dudes en escribirme!"}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(181,222,247)] opacity-60 animate-pulse" />
            <span className="text-[0.75rem] text-[rgba(181,222,247,0.4)] font-medium tracking-wide">gerald.devv</span>
          </div>
        </aside>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="relative grid gap-5 p-7 md:p-8 rounded-[20px] bg-[linear-gradient(145deg,rgba(8,10,21,0.65),rgba(8,10,21,0.42))] border border-[rgba(181,222,247,0.12)] backdrop-blur-[18px] shadow-[0_16px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(181,222,247,0.06)] motion-reduce:transition-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="name" className={labelStyles}>{t("contact.form.name")}</label>
              <input id="name" name="user_name" type="text" placeholder={t("contact.form.name")} required className={inputStyles} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className={labelStyles}>{t("contact.form.email")}</label>
              <input id="email" name="user_email" type="email" placeholder={t("contact.form.email")} required className={inputStyles} />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="service" className={labelStyles}>{t("contact.form.interest")}</label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className={[
                inputStyles,
                'appearance-none cursor-pointer',
                'bg-[linear-gradient(45deg,transparent_50%,rgba(181,222,247,0.7)_50%),linear-gradient(135deg,rgba(181,222,247,0.7)_50%,transparent_50%)]',
                'bg-[position:calc(100%-18px)_calc(50%-3px),calc(100%-12px)_calc(50%-3px)]',
                'bg-[length:6px_6px,6px_6px] bg-no-repeat'
              ].join(' ')}
            >
              <option value="" disabled className="text-[#111] bg-white">{t("contact.form.interestPlaceholder")}</option>
              <option value="web" className="text-[#111] bg-white">{t("contact.interestOptions.web")}</option>
              <option value="ecommerce" className="text-[#111] bg-white">{t("contact.interestOptions.ecommerce")}</option>
              <option value="landing" className="text-[#111] bg-white">{t("contact.interestOptions.landing")}</option>
              <option value="custom" className="text-[#111] bg-white">{t("contact.interestOptions.custom")}</option>
              <option value="cm" className="text-[#111] bg-white">{t("contact.interestOptions.cm")}</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className={labelStyles}>{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t("contact.form.messagePlaceholder")}
              required
              className={`${inputStyles} resize-y min-h-[130px]`}
            />
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={sending}
              className="group relative overflow-hidden w-full md:w-auto inline-flex items-center justify-center text-[0.93rem] tracking-[0.03em] font-semibold text-white px-8 py-[0.85rem] rounded-xl bg-[rgba(181,222,247,0.08)] border border-[rgba(181,222,247,0.20)] shadow-[0_0_12px_rgba(181,222,247,0.2)] cursor-pointer transition-all duration-[220ms] ease-in-out hover:bg-[rgba(181,222,247,0.88)] hover:text-[rgb(6,9,31)] hover:border-[rgba(181,222,247,0.6)] hover:shadow-[0_0_28px_rgba(181,222,247,0.5)] active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(181,222,247,0.55)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[rgba(181,222,247,0.08)] disabled:hover:text-white disabled:hover:shadow-none"
            >
              {sending ? t("contact.form.sending") : t("contact.form.submit")}
            </button>

            {status && (
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[0.85rem] font-semibold ${
                status.ok
                  ? 'text-[#7ee787] border-[rgba(126,231,135,0.2)] bg-[rgba(126,231,135,0.06)]'
                  : 'text-[#ffb4b4] border-[rgba(255,180,180,0.2)] bg-[rgba(255,180,180,0.06)]'
              }`}>
                <span>{status.ok ? '✓' : '✕'}</span>
                <span>{status.msg}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}