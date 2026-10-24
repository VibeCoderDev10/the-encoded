'use client';

import { useState } from 'react';
import LogoBadge from './LogoBadge';
import { NAV_LINKS } from '../lib/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="The Encoded home">
          <LogoBadge size={54} />
          <span className="te-brand text-base text-slate-900 sm:text-xl">
            THE ENCODED
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#inquire"
            className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 sm:inline-block"
          >
            Book Strategy Call
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 md:hidden"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-6 pb-5 pt-3 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-slate-100 last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base font-medium text-slate-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#inquire"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Strategy Call
          </a>
        </nav>
      )}
    </header>
  );
}
