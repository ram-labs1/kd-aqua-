import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', service: '', qty: '', note: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*New Order – KD Aqua*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📍 *Address:* ${form.address}\n` +
      `🛒 *Service:* ${form.service}\n` +
      `🔢 *Quantity:* ${form.qty}\n` +
      `📝 *Note:* ${form.note || 'None'}`
    );
    window.open(`https://wa.me/919229806435?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <Head>
        <title>Order Now – KD Aqua | Contact Water Delivery Bhind, MP</title>
        <meta name="description" content="Order RO-purified water delivery from KD Aqua in Bhind, MP. Call, WhatsApp, or fill our order form for same-day delivery." />
      </Head>

      <section className="water-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Order Now</h1>
          <p className="text-aqua-200 text-lg">Pure water at your doorstep. Fill the form, or contact us directly.</p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" fill="white"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact methods */}
            <div>
              <h2 className="text-2xl font-extrabold text-aqua-900 mb-6">Get in Touch</h2>

              {/* WhatsApp */}
              <a href="https://wa.me/919229806435?text=Hi%20KD%20Aqua!%20I%20want%20to%20order%20water." target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-2xl p-5 mb-4 transition-all group">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.845L.054 23.25l5.569-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.213-3.305.868.883-3.225-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/></svg>
                </div>
                <div>
                  <div className="font-bold text-green-800">WhatsApp Order</div>
                  <div className="text-green-600 text-sm">Fastest way to order. Tap to chat.</div>
                  <div className="text-green-700 font-semibold mt-0.5">+91 XXXXX XXXXX</div>
                </div>
              </a>

              {/* Call */}
              <a href="tel:+919229806435"
                className="flex items-center gap-4 bg-aqua-50 border-2 border-aqua-200 hover:border-aqua-400 rounded-2xl p-5 mb-4 transition-all group">
                <div className="w-12 h-12 rounded-full bg-aqua-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <div className="font-bold text-aqua-900">Call to Order</div>
                  <div className="text-aqua-600 text-sm">Mon–Sat, 7am–8pm</div>
                  <div className="text-aqua-700 font-semibold mt-0.5">+91 XXXXX XXXXX</div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 bg-gray-50 border-2 border-gray-100 rounded-2xl p-5 mb-8">
                <div className="w-12 h-12 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0 text-xl">📍</div>
                <div>
                  <div className="font-bold text-aqua-900">Plant / Pickup Location</div>
                  <div className="text-aqua-600 text-sm mt-0.5">KD Aqua Water Plant<br/>Bhind, Madhya Pradesh – 477001</div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-aqua-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57624.21!2d78.7904!3d26.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976f1d5d8a2cd7b%3A0xcf87d0d0d6a6e6f8!2sBhind%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="KD Aqua Location"
                />
              </div>

              {/* Future: payments note */}
              <div className="mt-6 p-4 bg-aqua-50 rounded-xl border border-aqua-100 text-sm text-aqua-700">
                <strong>🔜 Coming Soon:</strong> Online payments, subscription plans, and live order tracking. Stay tuned!
              </div>
            </div>

            {/* Order form → sends to WhatsApp */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-extrabold text-aqua-900 mb-2">Quick Order Form</h2>
              <p className="text-aqua-600 text-sm mb-6">Fill this form and it'll open as a WhatsApp message — easy!</p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-aqua-900 mb-2">Order Sent via WhatsApp!</h3>
                  <p className="text-aqua-600 text-sm mb-6">We'll confirm your order shortly. Thank you!</p>
                  <button onClick={() => setSent(false)} className="bg-aqua-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-aqua-700 transition-all">
                    Place Another Order
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-aqua-800 mb-1">Your Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full border border-aqua-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-aqua-800 mb-1">Mobile Number *</label>
                    <input required name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 " type="tel"
                      className="w-full border border-aqua-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-aqua-800 mb-1">Delivery Address *</label>
                    <input required name="address" value={form.address} onChange={handleChange}
                      placeholder="Mohalla / Colony / Landmark, Bhind"
                      className="w-full border border-aqua-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-aqua-800 mb-1">Service Required *</label>
                    <select required name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-aqua-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white">
                      <option value="">Select a service</option>
                      <option value="Home Delivery (20L Can)">Home Delivery (20L Can)</option>
                      <option value="Bulk Office Supply">Bulk Office Supply</option>
                      <option value="Event / Wedding Camper">Event / Wedding Camper</option>
                      <option value="Self Pickup (Plant Refill ₹20)">Self Pickup (Plant Refill ₹20)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-aqua-800 mb-1">Quantity (no. of cans / litres)</label>
                    <input name="qty" value={form.qty} onChange={handleChange}
                      placeholder="e.g. 2 cans, 200L, etc."
                      className="w-full border border-aqua-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-aqua-800 mb-1">Additional Note</label>
                    <textarea name="note" value={form.note} onChange={handleChange}
                      placeholder="Timing preference, gate number, etc." rows={3}
                      className="w-full border border-aqua-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-400 bg-white resize-none"
                    />
                  </div>
                  <button type="submit"
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-full transition-all hover:shadow-lg flex items-center justify-center gap-2 text-base">
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.845L.054 23.25l5.569-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.213-3.305.868.883-3.225-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/></svg>
                    Send Order via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
