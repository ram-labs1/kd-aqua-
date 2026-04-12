import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/services',   label: 'Services' },
  { href: '/quality',    label: 'Water Quality' },
  { href: '/areas',      label: 'Service Areas' },
  { href: '/about',      label: 'About' },
  { href: '/contact',    label: 'Order Now' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
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

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-aqua-500 to-aqua-800 flex items-center justify-center shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              <path d="M12 2c0 0-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-6-11-6-11z"/>
            </svg>
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${
            scrolled ? 'text-aqua-800' : 'text-white'
          }`}>
            KD <span className="text-aqua-400">AQUA</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              {label === 'Order Now' ? (
                <Link
                  href={href}
                  className="bg-aqua-600 hover:bg-aqua-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Order Now
                </Link>
              ) : (
                <Link
                  href={href}
                  className={`nav-link text-sm font-medium transition-colors ${
                    scrolled ? 'text-aqua-800 hover:text-aqua-500' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-aqua-800' : 'text-white'
          }`}
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

      {/* Mobile menu */}
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
