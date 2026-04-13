import Head from 'next/head';
import Link from 'next/link';

const values = [
  { icon: '💧', title: 'Purity First', desc: 'We never compromise on water quality. Every can is tested to meet strict standards before delivery.' },
  { icon: '🤝', title: 'Punctuality', desc: 'Your time matters. We plan our routes to ensure deliveries arrive when we say they will.' },
  { icon: '💚', title: 'Eco-Conscious', desc: 'We encourage reusable 20L cans to reduce plastic waste and support a greener Bhind.' },
  { icon: '🏆', title: 'Experience', desc: '12+ years of water purification expertise means you get the best quality every single time.' },
];

const timeline = [
  { year: '2018', event: 'KD Aqua established in Bhind with a single RO unit and a small delivery team.' },
  { year: '2020', event: 'Expanded to cover all major colonies in Bhind. Upgraded to 6-stage purification.' },
  { year: '2022', event: 'Added bulk office supply and event camper water services. Serving 300+ homes.' },
  { year: '2024', event: 'Now serving 500+ families, with plans to expand to Lahar and Gohad.' },
];

const stats = [
  { number: '12+', label: 'Years Experience' },
  { number: '500+', label: 'Happy Families' },
  { number: '6', label: 'Purification Stages' },
  { number: '100%', label: 'Quality Guarantee' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About KD Aqua – Your Trusted Water Supplier in Bhind, MP</title>
        <meta name="description" content="KD Aqua was founded in Bhind, Madhya Pradesh to provide reliable, affordable, pure RO water to homes and businesses. Learn our story and values." />
      </Head>

      {/* ══ HERO ══ */}
      <section className="water-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About KD Aqua</h1>
          <p className="text-aqua-200 text-lg max-w-xl mx-auto">
            A local water brand, built from the ground up in Bhind to serve the people of Bhind.
          </p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" fill="white"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/></svg>
        </div>
      </section>

      {/* ══ OWNER SECTION ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Owner Photo */}
            <div className="flex-shrink-0 text-center">
              <div className="relative inline-block">
                <img
                  src="/images/owner.jpeg"
                  alt="Manish Sharma - Founder KD Aqua"
                  className="w-64 h-72 object-cover object-top rounded-3xl shadow-2xl border-4 border-aqua-100"
                />
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-aqua-600 text-white rounded-2xl px-4 py-2 shadow-lg text-center">
                  <div className="text-2xl font-extrabold">12+</div>
                  <div className="text-xs font-semibold">Years Expert</div>
                </div>
              </div>
              {/* Name & title */}
              <div className="mt-8">
                <h3 className="text-xl font-extrabold text-aqua-900">Manish Sharma</h3>
                <p className="text-aqua-500 font-medium text-sm mt-1">Founder & Water Quality Expert</p>
                <p className="text-aqua-400 text-xs mt-1">KD Aqua, Bhind MP</p>
              </div>
            </div>

            {/* Owner Story */}
            <div className="flex-1">
              <span className="inline-block bg-aqua-100 text-aqua-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-extrabold text-aqua-900 mb-5">
                12+ Years of Pure Water Expertise
              </h2>
              <p className="text-aqua-700 leading-relaxed mb-4">
                Hi, I'm <strong>Manish Sharma</strong>, founder of KD Aqua. With over 12 years of hands-on experience in water purification and RO technology, I started KD Aqua with one goal — to give every family in Bhind access to truly pure, safe drinking water at an affordable price.
              </p>
              <p className="text-aqua-700 leading-relaxed mb-4">
                Unlike other RO plants, I personally oversee every aspect of our purification process. My 12+ years of expertise means I understand water quality at a deeper level — from TDS calibration to UV sterilization — so you get water that is genuinely safe for your entire family.
              </p>
              <p className="text-aqua-700 leading-relaxed mb-6">
                We are not just a business — we are your neighbors. Our team lives in Bhind, our children drink this water, and your trust is what drives us every single day.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-aqua-50 rounded-2xl p-4 text-center border border-aqua-100">
                    <div className="text-2xl font-extrabold text-aqua-700">{s.number}</div>
                    <div className="text-xs text-aqua-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ WHY MANISH IS DIFFERENT ══ */}
      <section className="py-16 bg-aqua-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-aqua-900">Why Our Experience Matters</h2>
            <p className="text-aqua-600 mt-3 max-w-xl mx-auto">
              12+ years means we have seen every water quality problem — and know exactly how to solve it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-aqua-100">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-aqua-900 mb-2">Deep Technical Knowledge</h3>
              <p className="text-aqua-600 text-sm leading-relaxed">We understand RO membranes, TDS controllers, UV filters, and water chemistry — not just how to operate a machine.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-aqua-100">
              <div className="text-4xl mb-3">⚠️</div>
              <h3 className="font-bold text-aqua-900 mb-2">Problem Prevention</h3>
              <p className="text-aqua-600 text-sm leading-relaxed">Years of experience means we detect and fix water quality issues before they ever reach your home.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-aqua-100">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-aqua-900 mb-2">Community Trust</h3>
              <p className="text-aqua-600 text-sm leading-relaxed">500+ families trust us because we have consistently delivered pure water for years — not just promises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-aqua-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-aqua-50 rounded-2xl p-6 text-center shadow-sm border border-aqua-100">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-aqua-900 mb-2">{v.title}</h3>
                <p className="text-aqua-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="py-16 bg-aqua-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-aqua-900 text-center mb-10">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-aqua-200"/>
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-6 relative">
                  <div className="w-16 h-16 rounded-full bg-aqua-600 text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0 z-10 shadow-lg">
                    {t.year}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 self-center border border-aqua-100 shadow-sm">
                    <p className="text-aqua-800 text-sm leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-16 water-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Join 500+ Happy Families</h2>
          <p className="text-aqua-200 mb-6">Experience the KD Aqua difference. Pure water, delivered with care.</p>
          <Link href="/contact" className="inline-block bg-white text-aqua-700 hover:bg-aqua-50 font-bold px-10 py-4 rounded-full transition-all hover:shadow-lg">
            Order Your First Can →
          </Link>
        </div>
      </section>
    </>
  );
}