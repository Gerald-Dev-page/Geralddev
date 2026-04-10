import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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

  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="contact-aurora contact-aurora--left" aria-hidden="true" />
      <div className="contact-aurora contact-aurora--right" aria-hidden="true" />

      <header className="contact-header">
        
        <h2 className="contact-title" id="contact-title">{t("contact.title")}</h2>
        <p className="contact-subtitle">{t("contact.subtitle")}</p>
        <div className="contact-title-divider" />
      </header>

      <div className="contact-grid">
        <aside className="contact-aside">
          <p className="contact-aside-title">{t("contact.channels")}</p>
          <div className="contact-actions">
            <a className="icon-btn" href="https://wa.me/5492664952528"
              target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <img src={`${import.meta.env.BASE_URL}img/whatsapp.webp`} alt="WhatsApp" />
            </a>
            <a className="icon-btn" href="mailto:lorenzo.geraldo.munoz@gmail.com"
              aria-label="Email" title="Email">
              <img src={`${import.meta.env.BASE_URL}img/gmail.webp`} alt="Gmail" />
            </a>
            <a className="icon-btn" href="https://www.instagram.com/gerald.dev07/"
              target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <img src={`${import.meta.env.BASE_URL}img/instagram.webp`} alt="Instagram" />
            </a>
          </div>
          <div className="contact-aside-card">
            <p className="contact-aside-card-text">{t("contact.asideNote") || "Respondó en menos de 24hs. ¡No dudes en escribirme!"}</p>
          </div>
        </aside>

        <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">{t("contact.form.name")}</label>
              <input id="name" name="user_name" type="text" placeholder={t("contact.form.name")} required />
            </div>
            <div className="form-field">
              <label htmlFor="email">{t("contact.form.email")}</label>
              <input id="email" name="user_email" type="email" placeholder={t("contact.form.email")} required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="service">{t("contact.form.interest")}</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>{t("contact.form.interestPlaceholder")}</option>
              <option value="web">{t("contact.interestOptions.web")}</option>
              <option value="ecommerce">{t("contact.interestOptions.ecommerce")}</option>
              <option value="landing">{t("contact.interestOptions.landing")}</option>
              <option value="custom">{t("contact.interestOptions.custom")}</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea id="message" name="message" rows={5}
              placeholder={t("contact.form.messagePlaceholder")} required />
          </div>

          <div className="form-footer">
            <button className="contact-submit" type="submit" disabled={sending}>
              {sending ? t("contact.form.sending") : t("contact.form.submit")}
            </button>
            {status && (
              <p className={`contact-status ${status.ok ? "ok" : "err"}`}>{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}