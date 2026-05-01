export default function WhatsAppFab({
  phone = '5492664952528',
  message = '¡Hola! Quiero hacer una consulta.',
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      title="Escribinos por WhatsApp"
      className={[
        "fixed z-[220] group outline-none",
        "right-[clamp(16px,3vw,32px)] bottom-[calc(24px+env(safe-area-inset-bottom,0px))] md:bottom-[calc(32px+env(safe-area-inset-bottom,0px))]",
        
        "flex items-center justify-center",
        "w-14 h-14 md:w-[60px] md:h-[60px] rounded-full",
        
        "bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]",
        "border border-white/10 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
        
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        
        "hover:-translate-y-1.5 hover:scale-105",
        "hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]",
        "hover:border-[rgba(181,222,247,0.3)]",
        "hover:shadow-[0_16px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(181,222,247,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]",
        
        "active:translate-y-0 active:scale-95",
        "focus-visible:ring-2 focus-visible:ring-[rgb(181,222,247)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000318]",
        
        "whatsapp-fab",
      ].join(" ")}
    >
      {/* ── Glow interior animado ── */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(circle at center, rgba(181,222,247,0.25) 0%, transparent 70%)"
        }}
      />

      {/* ── Ring exterior decorativo en hover ── */}
      <div 
        aria-hidden="true" 
        className="absolute inset-[-4px] rounded-full border border-[rgba(181,222,247,0.15)] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none"
      />

      <picture className="relative z-10 flex items-center justify-center">
        <source
          srcSet={`${import.meta.env.BASE_URL}img/whatsapp.webp`}
          type="image/webp"
        />
        <img
          src={`${import.meta.env.BASE_URL}img/whatsapp.png`}
          alt=""
          aria-hidden="true"
          className={[
            "block w-7 h-7 md:w-8 md:h-8 object-contain",
            "drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]",
          ].join(" ")}
        />
      </picture>
    </a>
  );
}