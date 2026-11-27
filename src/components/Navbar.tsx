import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Bolos & Sabores', href: '#catalogo' },
    { label: 'Como Encomendar', href: '#como-funciona' },
    { label: 'Localização & Contato', href: '#localizacao' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-pink/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <BrandLogo size="sm" />
          <div>
            <p className="font-display font-bold text-lg text-brand-cocoa leading-tight group-hover:text-brand-pinkDark transition-colors">
              Gaby Meira
            </p>
            <p className="text-xs font-medium text-brand-cocoa/70">
              Confeitaria Gourmet • Barueri
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brand-cocoa/80 hover:text-brand-pinkDark transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-pinkDark hover:bg-pink-700 text-white font-display font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-pink-200 transition-all hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            Encomendar Agora
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-brand-cocoa hover:bg-brand-pinkLight"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-brand-pink px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold text-brand-cocoa hover:text-brand-pinkDark"
            >
              {item.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-brand-pinkDark text-white font-display font-semibold text-sm py-3 rounded-full"
          >
            Encomendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};
