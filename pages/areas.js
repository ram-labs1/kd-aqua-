import Head from 'next/head';
import Link from 'next/link';

const areas = [
  { name: 'Bhind City', zones: ['Civil Lines', 'Rajendra Nagar', 'Prem Nagar', 'Indira Colony', 'Mela Ground Area'], active: true },
  { name: 'Mehgaon Road', zones: ['Mehgaon Chowk', 'Sector 5', 'Transport Nagar'], active: true },
  { name: 'Gohad Road Area', zones: ['Gohad Road Colony', 'New Housing Board'], active: true },
  { name: 'Ater Road', zones: ['Ater Road Residential', 'Balaji Colony'], active: true },
  { name: 'Lahar (Expanding)', zones: ['Lahar Town', 'Surrounding villages'], active: false },
  { name: 'Gohad (Expanding)', zones: ['Gohad Town area'], active: false },
];

export default function Areas() {
  return (
    <>
      <Head>
        <title>Service Areas – KD Aqua | Water Delivery Coverage in Bhind, MP</title>
        <meta name="description" content="KD Aqua currently delivers water in Bhind and surrounding areas. Check if your locality is covered or request expansion to your area." />
      </Head>

      <section className="water-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Service Areas</h1>
          <p className="text-aqua-200 text-lg">Delivering pure water across Bhind and nearby areas.</p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" fill="white"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-aqua-900 mb-8 text-center">Coverage Map</h2>
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-aqua-200 mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57624.21!2d78.7904!3d26.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976f1d5d8a2cd7b%3A0xcf87d0d0d6a6e6f8!2sBhind%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="KD Aqua Service Area Map"
            />
          </div>

          {/* Areas grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((a) => (
              <div key={a.name} className={`rounded-2xl p-5 border-2 ${a.active ? 'border-aqua-200 bg-aqua-50' : 'border-dashed border-gray-200 bg-gray-50'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-3 h-3 rounded-full ${a.active ? 'bg-green-400' : 'bg-amber-400'}`}/>
                  <h3 className="font-bold text-aqua-900">{a.name}</h3>
                  <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${a.active ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {a.active ? 'Active' : 'Coming Soon'}
                  </span>
                </div>
                <ul className="space-y-1">
                  {a.zones.map(z => (
                    <li key={z} className="text-sm text-aqua-600 flex items-center gap-1.5">
                      <span className="text-aqua-400">›</span>{z}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Request expansion */}
          <div className="mt-12 text-center bg-aqua-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-aqua-900 mb-2">Don't see your area?</h3>
            <p className="text-aqua-600 mb-5">We're expanding rapidly. Call or WhatsApp us to request delivery to your locality.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/91XXXXXXXXXX?text=Hi! Can you deliver water to my area?" className="bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-full transition-all">
                Request on WhatsApp
              </a>
              <Link href="/contact" className="bg-aqua-600 hover:bg-aqua-700 text-white font-semibold px-7 py-3 rounded-full transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
