import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/services',   label: 'Services' },
  { href: '/quality',    label: 'Water Quality' },
  { href: '/areas',      label: 'Service Areas' },
  { href: '/about',      label: 'About' },
  { href: '/admin',      label: 'Staff Login' },
  { href: '/contact',    label: 'Order Now' },
];

function KDLogo({ scrolled }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 5 C30 5 5 32 5 47 C5 61 16 70 30 70 C44 70 55 61 55 47 C55 32 30 5 30 5Z" fill="#0ea5e9"/>
        <path d="M30 16 C30 16 14 35 14 46 C14 52 18 57 25 59 C17 55 14 48 16 41 C19 30 30 18 30 16Z" fill="#7dd3fc" opacity="0.5"/>
        <text x="30" y="52" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="white" textAnchor="middle">KD</text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold text-xl tracking-widest transition-colors ${
          scrolled ? 'text-aqua-800' : 'text-white'
        }`}>
          KD <span className="text-aqua-400">AQUA</span>
        </span>
        <span className={`text-xs tracking-widest font-medium transition-colors ${
          scrolled ? 'text-aqua-500' : 'text-aqua-200'
        }`}>
          PURE · SAFE · ON TIME
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        <Link href="/" className="group">
          <KDLogo scrolled={scrolled} />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
                {label === 'Order Now' ? (
                  <Link href={href} className="bg-aqua-600 hover:bg-aqua-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5">
                    Order Now
                  </Link>
                ) : label === 'Staff Login' ? (
                  <Link href={href} className={`text-xs opacity-70 hover:opacity-100 transition-colors ${
                    scrolled ? 'text-aqua-700' : 'text-white/70'
                  }`}>
                    Staff Login
                  </Link>
                ) : (
                  <Link href={href} className={`nav-link text-sm font-medium transition-colors ${
                    scrolled ? 'text-aqua-800 hover:text-aqua-500' : 'text-white/90 hover:text-white'
                  }`}>
                    {label}
                  </Link>
                )}
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-aqua-800' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-aqua-100 shadow-xl">
          <ul className="px-4 py-4 space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 font-medium text-aqua-800 hover:text-aqua-500 transition-colors ${
                    label === 'Order Now'
                      ? 'bg-aqua-600 text-white text-center rounded-full py-3 hover:bg-aqua-700 hover:text-white'
                      : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}