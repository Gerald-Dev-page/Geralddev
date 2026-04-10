import { useTranslation } from "react-i18next";
import "./Testimonial.css";

export default function Testimonial() {
  const { t } = useTranslation();
  const testimonials = t("testimonial.list", { returnObjects: true }) || [];

  return (
    <section className="testimonial-section" id="testimonios" aria-labelledby="testimonial-title">
      <header className="testimonial-header">
        
        <h2 className="testimonial-title" id="testimonial-title">
          {t("testimonial.title")}
        </h2>
        <p className="testimonial-subtitle">{t("testimonial.subtitle")}</p>
        <div className="testimonial-title-divider" />
      </header>

      <div className="testimonial-container">
        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          testimonials.map((item, index) => (
            <div className="testimonial-card" key={`testimonial-${index}`}>

              <div className="testimonial-copy">
                <span className="quote-mark" aria-hidden="true">"</span>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <span className="author-name">{item.author}</span>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>

              <div className="testimonial-avatar">
                <div className="avatar-ring">
                  <img
                    src={`${import.meta.env.BASE_URL}img/${item.img}`}
                    alt={item.author}
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", opacity: 0.5 }}>...</p>
        )}
      </div>
    </section>
  );
}