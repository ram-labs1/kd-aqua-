import WhatsAppOrderForm from "./WhatsAppOrderForm";
import { CONTACT } from "../config/contact";

export default function FloatingButtons() {
  const phone = CONTACT.phone;

  const callPath =
    "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z";

  return (
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-6 z-[999999]">

      {/* Order button */}
      <WhatsAppOrderForm />

      {/* Call button (original round aqua style restored) */}
      <a
        href={`tel:+${phone}`}
        aria-label="Call us"
        className="relative w-14 h-14 mr-10 mb-20 rounded-full bg-aqua-600 hover:bg-aqua-500 flex items-center justify-center shadow-xl transition-all hover:scale-110 pulse-ring"
        style={{ isolation: "isolate" }}
      >
        <svg className="w-6 h-6 relative z-10" fill="white" viewBox="0 0 24 24">
          <path d={callPath} />
        </svg>

        <span className="absolute inset-0 rounded-full bg-aqua-500 opacity-40 animate-ping" />
      </a>

    </div>
  );
}