export default function FloatingButtons() {
  const phone = '919625782252';
  const waMsg = encodeURIComponent('Hello KD Aqua! I want to order water.');
}

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">

      {/* Call button */}
      <a
        href={`tel:+${phone}`}
        aria-label="Call us"
        className="relative w-12 h-12 rounded-full bg-aqua-600 hover:bg-aqua-500 flex items-center justify-center shadow-xl transition-all hover:scale-110 pulse-ring"
        style={{ isolation: 'isolate' }}
      >
        <svg className="w-5 h-5 text-white relative z-10" fill="white" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-aqua-500 opacity-40 animate-ping" />
      </a>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${phone}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="float-btn flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:shadow-green-400/40"
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.845L.054 23.25l5.569-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.213-3.305.868.883-3.225-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
        </svg>
        <span className="text-sm font-semibold whitespace-nowrap">Order on WhatsApp</span>
      </a>
    </div>
  );
}
