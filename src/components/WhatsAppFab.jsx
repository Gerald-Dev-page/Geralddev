import './WhatsAppFab.css';

export default function WhatsAppFab({
  phone = '5492664952528',
  message = '¡Hola! Quiero hacer una consulta.',
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      title="Escribinos por WhatsApp"
    >
      <picture>
        <source srcSet={`${import.meta.env.BASE_URL}img/whatsapp.webp`} type="image/webp" />
        <img src={`${import.meta.env.BASE_URL}img/whatsapp.png`} alt="" aria-hidden="true" />
      </picture>
    </a>
  );
}
