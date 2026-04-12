import Head from 'next/head';

const stages = [
  { step: '01', icon: '🪨', title: 'Sediment Pre-Filter', desc: 'Removes sand, rust, dirt, and large particles. First line of defence for your water.' },
  { step: '02', icon: '🪵', title: 'Activated Carbon Filter', desc: 'Removes chlorine, bad taste, odour, and organic chemicals from the water.' },
  { step: '03', icon: '🔬', title: 'RO Membrane (0.0001µm)', desc: 'The core of the system — removes dissolved salts, heavy metals, bacteria, and viruses.' },
  { step: '04', icon: '☀️', title: 'UV Sterilisation', desc: 'High-intensity UV light kills any remaining bacteria and viruses, ensuring 100% safe water.' },
  { step: '05', icon: '⚗️', title: 'TDS Controller', desc: 'Balances TDS to the ideal range (50–150 ppm) for great taste and essential minerals.' },
  { step: '06', icon: '✅', title: 'Post Carbon Polish', desc: 'Final polish removes any residual taste/odour. Water is now crisp, clean, and ready to drink.' },
];

const params = [
  { label: 'TDS Level',   value: '50–150 ppm',   ideal: true },
  { label: 'pH Level',    value: '7.0 – 7.5',    ideal: true },
  { label: 'Turbidity',   value: '< 1 NTU',      ideal: true },
  { label: 'Hardness',    value: '< 100 mg/L',   ideal: true },
  { label: 'Bacteria',    value: '0 CFU / 100ml', ideal: true },
  { label: 'Heavy Metals', value: 'Non-detectable', ideal: true },
];

export default function Quality() {
  return (
    <>
      <Head>
        <title>Water Quality – KD Aqua | RO Purified, Safe TDS Bhind</title>
        <meta name="description" content="KD Aqua uses advanced 6-stage RO + UV purification. Guaranteed safe TDS levels, pH balance, and zero bacteria in every can delivered across Bhind, MP." />
      </Head>

      {/* Hero */}
      <section className="water-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Water Quality</h1>
          <p className="text-aqua-200 text-lg max-w-xl mx-auto">
            Every drop that leaves our plant passes through 6 purification stages. Here's exactly what we do.
          </p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" fill="white"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/></svg>
        </div>
      </section>

      {/* Purification steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-aqua-900 text-center mb-12">6-Stage Purification Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((s) => (
              <div key={s.step} className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-3 right-4 text-5xl font-extrabold text-aqua-50 select-none">{s.step}</div>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-aqua-900 mb-2">{s.title}</h3>
                <p className="text-aqua-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water parameters */}
      <section className="py-16 bg-gradient-to-b from-aqua-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-aqua-900 text-center mb-3">Our Water Parameters</h2>
          <p className="text-aqua-600 text-center mb-10">Tested regularly to ensure consistent quality.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {params.map((p) => (
              <div key={p.label} className="bg-white border border-aqua-100 rounded-2xl p-5 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-aqua-700 mb-1">{p.value}</div>
                <div className="text-sm text-aqua-500 font-medium">{p.label}</div>
                {p.ideal && <div className="mt-2 inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">✓ Ideal</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TDS explainer */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-aqua-700 to-aqua-900 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-extrabold mb-4">What is TDS & Why It Matters</h2>
            <p className="text-aqua-200 leading-relaxed mb-4">
              TDS (Total Dissolved Solids) measures the concentration of dissolved minerals, salts, and metals in water. Very high TDS water tastes bitter or salty and may contain harmful heavy metals. Very low TDS water lacks essential minerals.
            </p>
            <p className="text-aqua-200 leading-relaxed mb-4">
              The BIS standard for drinking water in India recommends TDS below 500 ppm. However, the ideal range for taste and health is <strong className="text-white">50–150 ppm</strong>, which is exactly what KD Aqua maintains.
            </p>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold text-aqua-300">50–150 ppm</div>
              <div className="text-aqua-200 text-sm mt-1">KD Aqua's guaranteed TDS range</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
