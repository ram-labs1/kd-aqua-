import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    icon: '🏠',
    title: '20L Can Home Delivery',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-100 text-blue-700',
    price: 'Call for pricing',
    features: [
      'RO + UV purified water',
      'Same-day delivery available',
      'Regular subscription option',
      'ISI-marked sealed cans',
      'Free delivery on bulk orders',
    ],
    desc: 'The easiest way to ensure clean drinking water at home. Order a single can or set up a weekly schedule. We deliver fresh, sealed, RO-purified water to your door across Bhind.',
  },
  {
    icon: '🏢',
    title: 'Bulk Office Supply',
    badge: 'Business',
    badgeColor: 'bg-purple-100 text-purple-700',
    price: 'Custom pricing',
    features: [
      'Volume discounts available',
      'Scheduled bulk delivery',
      'Dedicated account manager',
      'Invoice and billing support',
      'Multiple delivery points',
    ],
    desc: 'Keep your team hydrated without hassle. We supply bulk RO water to offices, factories, schools, hospitals, and commercial spaces. Flexible quantities and scheduled deliveries.',
  },
  {
    icon: '🎊',
    title: 'Event & Wedding Camper Supply',
    badge: 'Events',
    badgeColor: 'bg-pink-100 text-pink-700',
    price: 'Custom quote',
    features: [
      'Large-volume water tanker',
      'Suitable for 100–5000+ guests',
      'Advance booking required',
      'Covers weddings, bhandaras, events',
      'Reliable, on-time delivery',
    ],
    desc: 'Planning a wedding, bhandara, or large event in Bhind? Our water tanker/camper service ensures you never run short. Book in advance for best availability.',
  },
  {
    icon: '🔄',
    title: 'Self-Pickup Plant Refill',
    badge: '₹20 / 20L',
    badgeColor: 'bg-green-100 text-green-700',
    price: '₹20 per 20L can',
    features: [
      'Same RO-purified quality',
      'Bring your own clean can',
      'Instant refill at plant',
      'No minimum order',
      'Open Mon–Sat, 8am–7pm',
    ],
    desc: 'Visit our water plant in Bhind and refill your 20L can for just ₹20. The most affordable option — same great quality, directly from the source. Bring a clean, food-grade can.',
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services – KD Aqua | Water Delivery Bhind, MP</title>
        <meta name="description" content="KD Aqua offers home delivery, bulk office supply, event camper water, and plant self-pickup refill at ₹20 per 20L in Bhind, Madhya Pradesh." />
      </Head>

      {/* Hero */}
      <section className="water-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-aqua-200 text-lg max-w-xl mx-auto">
            From daily home delivery to large-event supply — every water need in Bhind, covered.
          </p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="glass-card service-card rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{s.icon}</span>
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${s.badgeColor}`}>{s.badge}</span>
                    <h2 className="text-xl font-extrabold text-aqua-900">{s.title}</h2>
                    <p className="text-aqua-500 text-sm font-semibold mt-1">{s.price}</p>
                  </div>
                </div>
                <p className="text-aqua-700 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-aqua-800">
                      <span className="w-5 h-5 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0 text-aqua-600 text-xs font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block w-full text-center bg-aqua-600 hover:bg-aqua-700 text-white font-semibold py-3 rounded-full transition-all hover:shadow-lg">
                  Order This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-aqua-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-aqua-900 mb-3">Not Sure Which to Pick?</h2>
          <p className="text-aqua-600 mb-6">Call us and we'll recommend the best option for your needs and budget.</p>
          <a href="tel:+919229806435" className="inline-block bg-aqua-600 hover:bg-aqua-700 text-white font-bold px-10 py-4 rounded-full transition-all hover:shadow-lg">
            📞 Call Us Free
          </a>
        </div>
      </section>
    </>
  );
}
