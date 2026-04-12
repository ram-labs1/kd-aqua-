import Head from 'next/head';
import Link from 'next/link';

const values = [
  { icon: '💧', title: 'Purity First', desc: 'We never compromise on water quality. Every can is tested to meet strict standards before delivery.' },
  { icon: '🤝', title: 'Community Focused', desc: 'Born in Bhind, built for Bhind. We are your neighbours, not a distant corporation.' },
  { icon: '⏰', title: 'Punctuality', desc: 'Your time matters. We plan our routes to ensure deliveries arrive when we say they will.' },
  { icon: '💚', title: 'Eco-Conscious', desc: 'We encourage reusable 20L cans to reduce plastic waste and support a greener Bhind.' },
];

const timeline = [
  { year: '2018', event: 'KD Aqua established in Bhind with a single RO unit and a small delivery team.' },
  { year: '2020', event: 'Expanded to cover all major colonies in Bhind. Upgraded to 6-stage purification.' },
  { year: '2022', event: 'Added bulk office supply and event camper water services. Serving 300+ homes.' },
  { year: '2024', event: 'Now serving 500+ families, with plans to expand to Lahar and Gohad.' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About KD Aqua – Your Trusted Water Supplier in Bhind, MP</title>
        <meta name="description" content="KD Aqua was founded in Bhind, Madhya Pradesh to provide reliable, affordable, pure RO water to homes and businesses. Learn our story and values." />
      </Head>

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

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-aqua-900 mb-5">Our Story</h2>
              <p className="text-aqua-700 leading-relaxed mb-4">
                KD Aqua was founded with a simple mission: to make safe, clean drinking water accessible and affordable for every family in Bhind, Madhya Pradesh. We noticed that many households relied on expensive bottled water or unsafe tap water — and we set out to change that.
              </p>
              <p className="text-aqua-700 leading-relaxed mb-4">
                Starting with a single RO plant and a small delivery team, we have grown to serve over 500 homes and businesses across Bhind. Every expansion has been driven by one thing: trust from our community.
              </p>
              <p className="text-aqua-700 leading-relaxed">
                We are a local business — our team lives here, our families drink our water, and our reputation matters to us every single day.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-aqua-100 to-aqua-200 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-7xl">💧</div>
                  <div className="mt-3 font-extrabold text-aqua-800 text-lg">KD AQUA</div>
                  <div className="text-aqua-600 text-sm">Est. 2018 · Bhind, MP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-aqua-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-aqua-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-aqua-100">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-aqua-900 mb-2">{v.title}</h3>
                <p className="text-aqua-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
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
                  <div className="flex-1 bg-aqua-50 rounded-xl p-4 self-center border border-aqua-100">
                    <p className="text-aqua-800 text-sm leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
