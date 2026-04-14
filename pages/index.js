import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import WhatsAppOrderForm from "../components/WhatsAppOrderForm";

const services = [
  {
    icon: '🏠',
    title: '20L Can Home Delivery',
    desc: 'Fresh RO-purified water delivered to your doorstep. Order single or set up a regular schedule.',
    badge: 'Most Popular',
  },
  {
    icon: '🏢',
    title: 'Bulk Office Supply',
    desc: 'Reliable bulk water supply for offices, factories, and commercial establishments in Bhind.',
    badge: 'Business',
  },
  {
    icon: '🎊',
    title: 'Event Camper Supply',
    desc: 'Large-scale pure water supply for weddings, events, and gatherings via water tanker.',
    badge: 'Events',
  },
  {
    icon: '🔄',
    title: 'Self-Pickup Refill',
    desc: 'Visit our plant directly and refill your 20L can for just ₹20. Quick and affordable.',
    badge: '₹20 / 20L',
  },
];

const trustFeatures = [
  { icon: '💧', title: 'RO Multi-Stage Filtration', desc: 'Advanced RO + UV + TDS controller ensures every drop is pure and safe.' },
  { icon: '📊', title: 'TDS Level Guarantee', desc: 'We maintain optimal TDS levels — safe for all ages, verified regularly.' },
  { icon: '⚡', title: 'Same-Day Issue Resolution', desc: 'Report any issue before noon — resolved the same day, guaranteed.' },
  { icon: '🚚', title: 'On-Time Delivery', desc: 'We respect your time. Our delivery routes are planned for punctuality.' },
  { icon: '🔁', title: 'Replacement Guarantee', desc: 'Unhappy with quality? We replace the can — no questions asked.' },
  { icon: '🏆', title: 'Trusted by 500+ Homes', desc: 'Over 500 families in Bhind rely on KD Aqua every single day.' },
];

const gallery = [
  { src: '/images/dilevery.png', title: 'Our Delivery Team', desc: 'Friendly, on-time delivery every day' },
  { src: '/images/cans.jpg',     title: 'Pure Water Cans',   desc: '20L RO purified cans ready to deliver' },
  { src: '/images/can.jpg',      title: 'Quality Assured',   desc: 'Every can checked before delivery' },
  { src: '/images/pickup.jpg',   title: 'Self Pickup — ₹20', desc: 'Visit our plant and refill affordably' },
];

export default function Home() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  return (
    <>
      <Head>
        <title>KD Aqua – Pure Water Delivery in Bhind, MP | On Time. Every Time.</title>
        <meta name="description" content="KD Aqua delivers RO-purified 20L water cans to homes, offices, and events in Bhind, Madhya Pradesh. Same-day delivery. Lowest prices. Call now." />
        <meta name="keywords" content="water delivery Bhind, 20L can delivery MP, RO water Bhind, pure water Madhya Pradesh, KD Aqua" />
        <meta property="og:title" content="KD Aqua – Pure Water Delivery Bhind, MP" />
        <meta property="og:description" content="RO-purified water delivered to your home and office. Pure. On Time. Affordable." />
        <meta property="og:type" content="website" />
      </Head>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="water-bg min-h-screen flex items-center pt-20 pb-10 relative">
        {/* Decorative bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-float"
              style={{
                width:  `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                left:   `${10 + i * 11}%`,
                top:    `${15 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-white/15 text-aqua-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                📍 Serving Bhind, Madhya Pradesh
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Pure Water.<br/>
                <span className="text-aqua-300">On Time.</span><br/>
                Every Time.
              </h1>
              <p className="text-aqua-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                KD Aqua delivers RO-purified water to your home, office, and events across Bhind. Trusted by 500+ families for safe, affordable, on-time delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contact" className="bg-white text-aqua-700 hover:bg-aqua-50 font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 text-center">
                  Order Now →
                </Link>
                <a href="tel:+919229806435" className="border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all text-center backdrop-blur-sm">
                  📞 Call to Order
                </a>
              </div>

              {/* Quick stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
                {[['500+', 'Happy Homes'], ['₹20', 'Per Can Refill'], ['0–24hr', 'Delivery Time']].map(([num, lbl]) => (
                  <div key={lbl} className="text-center">
                    <div className="text-2xl font-extrabold text-white">{num}</div>
                    <div className="text-xs text-aqua-200 mt-0.5">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Hero Image (delivery person) ── */}
            <div className="flex-shrink-0 w-64 lg:w-80 relative animate-float">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                <img
                  src="/images/dilevery.png"
                  alt="KD Aqua Delivery Person"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                ✓ Safe TDS
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white text-aqua-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                💧 RO Purified
              </div>
            </div>

          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 wave-divider">
          <svg viewBox="0 0 1440 80" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"/>
          </svg>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={addRef} className="fade-up text-center mb-12">
            <span className="text-aqua-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-aqua-900 mt-2">Our Services</h2>
            <p className="text-aqua-600 mt-3 max-w-xl mx-auto">From daily home delivery to large event supply — we cover every water need in Bhind.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                ref={addRef}
                className="fade-up service-card glass-card rounded-2xl p-6 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <span className="inline-block bg-aqua-100 text-aqua-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{s.badge}</span>
                <h3 className="font-bold text-aqua-900 text-lg mb-2">{s.title}</h3>
                <p className="text-aqua-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block bg-aqua-600 hover:bg-aqua-700 text-white font-semibold px-8 py-3 rounded-full transition-all hover:shadow-lg">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PHOTO GALLERY ══════════════════════════════════════════════ */}
      <section className="py-20 bg-aqua-50">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={addRef} className="fade-up text-center mb-12">
            <span className="text-aqua-500 font-semibold text-sm uppercase tracking-widest">See Us In Action</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-aqua-900 mt-2">Our Delivery & Water Cans</h2>
            <p className="text-aqua-600 mt-3 max-w-xl mx-auto">
              Real photos from our team — see the quality and care behind every delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, i) => (
              <div
                key={item.title}
                ref={addRef}
                className="fade-up rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-aqua-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-aqua-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-white to-aqua-50">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={addRef} className="fade-up text-center mb-12">
            <span className="text-aqua-500 font-semibold text-sm uppercase tracking-widest">Why KD Aqua</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-aqua-900 mt-2">Our Promises to You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFeatures.map((f, i) => (
              <div
                key={f.title}
                ref={addRef}
                className="fade-up trust-badge rounded-xl p-5 flex gap-4"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-aqua-900 mb-1">{f.title}</h3>
                  <p className="text-aqua-700 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING HIGHLIGHT ════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div ref={addRef} className="fade-up bg-gradient-to-br from-aqua-700 to-aqua-900 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"/>
              <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-white translate-x-1/4 translate-y-1/4"/>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Plant Refill at Just <span className="text-aqua-300">₹20</span></h2>
              <p className="text-aqua-200 text-lg mb-6">Visit our plant in Bhind, refill your 20L can, and save more. Clean, RO-purified — same great quality.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-aqua-700 hover:bg-aqua-50 font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg">
                  Get Directions →
                </Link>
                <Link href="/services" className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all">
                  See All Prices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAP PREVIEW ══════════════════════════════════════════════ */}
      <section className="py-16 bg-aqua-50">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={addRef} className="fade-up text-center mb-8">
            <h2 className="text-3xl font-extrabold text-aqua-900">Find Us in Bhind</h2>
            <p className="text-aqua-600 mt-2">Come for self-pickup or just see where we are.</p>
          </div>
          <div ref={addRef} className="fade-up rounded-2xl overflow-hidden shadow-xl border border-aqua-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57624.21!2d78.7904!3d26.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976f1d5d8a2cd7b%3A0xcf87d0d0d6a6e6f8!2sBhind%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KD Aqua Location in Bhind, MP"
            />
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════════════ */}
      <section className="py-16 water-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready for Pure Water?</h2>
          <p className="text-aqua-100 text-lg mb-8">Order now and get your first delivery today. Call us or message on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919229806435"
              className="bg-white text-aqua-700 hover:bg-aqua-50 font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
      <WhatsAppOrderForm />
    </> 
  );
}