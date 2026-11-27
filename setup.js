const fs = require('fs');
const path = require('path');

const files = {
  'package.json': JSON.stringify(
    {
      name: 'gaby-meira-confeitaria',
      private: true,
      version: '1.0.0',
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'tsc && vite build',
        preview: 'vite preview',
      },
      dependencies: {
        'lucide-react': '^0.454.0',
        react: '^18.3.1',
        'react-dom': '^18.3.1',
      },
      devDependencies: {
        '@types/react': '^18.3.12',
        '@types/react-dom': '^18.3.1',
        '@vitejs/plugin-react': '^4.3.3',
        autoprefixer: '^10.4.20',
        postcss: '^8.4.49',
        tailwindcss: '^3.4.15',
        typescript: '^5.6.3',
        vite: '^5.4.11',
      },
    },
    null,
    2
  ),

  'tsconfig.json': JSON.stringify(
    {
      compilerOptions: {
        target: 'ES2020',
        useDefineForClassFields: true,
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        module: 'ESNext',
        skipLibCheck: true,
        moduleResolution: 'bundler',
        allowImportingTsExtensions: true,
        isolatedModules: true,
        moduleDetection: 'force',
        noEmit: true,
        jsx: 'react-jsx',
        strict: true,
        noUnusedLocals: false,
        noUnusedParameters: false,
        noFallthroughCasesInSwitch: true,
      },
      include: ['src'],
    },
    null,
    2
  ),

  'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`,

  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F4C2D7',
          pinkDark: '#E91E63',
          pinkLight: '#FDF2F7',
          cocoa: '#3B2322',
          gold: '#D4AF37',
          cyan: '#00BCD4',
          yellow: '#FFD54F',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
`,

  'index.html': `<!doctype html>
<html lang="pt-BR" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gaby Meira | Confeitaria Gourmet - Bolos e Doces em Barueri</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Great+Vibes&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="bg-white text-brand-cocoa antialiased selection:bg-brand-pink selection:text-brand-cocoa">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,

  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

.confetti-bg {
  background-color: #ffffff;
  background-image:
    radial-gradient(#F4C2D7 3px, transparent 3px),
    radial-gradient(#FFD54F 3px, transparent 3px),
    radial-gradient(#80DEEA 2.5px, transparent 2.5px),
    radial-gradient(#CE93D8 2.5px, transparent 2.5px);
  background-size: 90px 90px;
  background-position: 0 0, 45px 45px, 20px 65px, 70px 15px;
}
`,

  'src/types/bakery.ts': `export type CakeCategory = 'Todos' | 'Infantil & Temáticos' | 'Clássicos & Laços' | 'Sobremesas';

export interface CakeItem {
  id: string;
  title: string;
  category: Exclude<CakeCategory, 'Todos'>;
  description: string;
  servings: string;
  imageUrl: string;
  badge?: string;
}

export interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  accentColor: string;
}

export interface BakeryInfo {
  name: string;
  tagline: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string;
  city: string;
  address: string;
  hours: {
    days: string;
    time: string;
  }[];
  googleMapsEmbedUrl: string;
  googleMapsDirectUrl: string;
}
`,

  'src/data/bakeryData.ts': `import { BakeryInfo, CakeItem, HeroSlide } from '../types/bakery';

export const BAKERY_INFO: BakeryInfo = {
  name: 'Gaby Meira Confeitaria Gourmet',
  tagline: 'Transformando sonhos em doces memórias',
  instagramHandle: '@gabymeira_confeitaria',
  instagramUrl: 'https://www.instagram.com/gabymeira_confeitaria/',
  whatsappNumber: '5511999999999', // Substitua pelo WhatsApp oficial da confeitaria
  city: 'Barueri - SP',
  address: 'Barueri, São Paulo - SP (Atendimento sob encomenda e retirada agendada)',
  hours: [
    { days: 'Terça a Sexta', time: '09:00 às 18:30' },
    { days: 'Sábado', time: '09:00 às 16:00' },
    { days: 'Domingo e Segunda', time: 'Somente retiradas agendadas' },
  ],
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58536.68737371225!2d-46.91893645!3d-23.51121695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03dd6a2db311%3A0x8c709873b0967f66!2sBarueri%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  googleMapsDirectUrl: 'https://maps.google.com/?q=Barueri,SP',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'unicorn',
    tag: 'Bolos Temáticos Exclusivos',
    title: 'Bolos Incríveis, Histórias Únicas',
    subtitle: 'Detalhes artesanais em chantininho, cores vibrantes e recheios gourmet feitos sob medida para sua festa.',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80',
    accentColor: '#E91E63',
  },
  {
    id: 'coquette',
    tag: 'Tendência Vintage & Laços',
    title: 'Delicadeza em Cada Camada',
    subtitle: 'Acabamentos clássicos com bicos de confeitar, laços em cetim e sabores inesquecíveis.',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    accentColor: '#D81B60',
  },
  {
    id: 'kids',
    tag: 'Personagens & Aventuras',
    title: 'A Magia da Sua Comemoração',
    subtitle: 'Do universo Barbie às pistas de corrida, criamos o bolo perfeito para encantar todos os convidados.',
    imageUrl: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80',
    accentColor: '#00ACC1',
  },
];

export const CAKES_CATALOG: CakeItem[] = [
  {
    id: '1',
    title: 'Bolo Unicórnio Arco-Íris',
    category: 'Infantil & Temáticos',
    description: 'Massa fofinha de baunilha com recheio de Ninho trufado com morangos frescos e espatulado colorido.',
    servings: '20 a 25 fatias',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=700&q=80',
    badge: 'Mais Pedido',
  },
  {
    id: '2',
    title: 'Bolo Coquette Pink Laços',
    category: 'Clássicos & Laços',
    description: 'Estilo vintage com trabalho delicado em bicos, laços de cetim rosa e recheio de brigadeiro belga.',
    servings: '15 a 20 fatias',
    imageUrl: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=700&q=80',
    badge: 'Tendência',
  },
  {
    id: '3',
    title: 'Bolo Temático Corrida & Velocidade',
    category: 'Infantil & Temáticos',
    description: 'Personalizado com topper exclusivo, acabamento em chantininho acetinado e doce de leite suave.',
    servings: '25 a 30 fatias',
    imageUrl: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '4',
    title: 'Bolo Mundo Rosa & Flores',
    category: 'Infantil & Temáticos',
    description: 'Decoração floral em tons de rosa e lilás com brilho perolado e massa de chocolate 50% cacau.',
    servings: '20 a 25 fatias',
    imageUrl: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '5',
    title: 'Bolo Chocolate com Morangos Gourmet',
    category: 'Sobremesas',
    description: 'Ganache cremosa meio amarga, morangos selecionados e laço dourado para celebrações especiais.',
    servings: '15 a 18 fatias',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    badge: 'Clássico',
  },
  {
    id: '6',
    title: 'Kit Festa & Doces Personalizados',
    category: 'Sobremesas',
    description: 'Combinação de bolo decorado com brigadeiros gourmet, beijinhos e copinhos de sobremesa.',
    servings: '30 convidados',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80',
  },
];
`,

  'src/utils/whatsapp.ts': `import { BAKERY_INFO } from '../data/bakeryData';

export function buildWhatsAppLink(customMessage?: string): string {
  const defaultMsg =
    'Olá Gaby! Vim pelo site e gostaria de solicitar um orçamento de bolo/doces personalizados.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return \`https://wa.me/\${BAKERY_INFO.whatsappNumber}?text=\${text}\`;
}
`,

  'src/components/BrandLogo.tsx': `import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md' }) => {
  const dimensions = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  }[size];

  return (
    <div
      className={\`\${dimensions} rounded-full bg-brand-pink border-2 border-brand-cocoa flex flex-col items-center justify-center shadow-md select-none shrink-0 relative overflow-hidden\`}
      title="Gaby Meira Confeitaria Gourmet"
    >
      <div className="w-[88%] h-[88%] rounded-full border border-brand-cocoa/60 flex flex-col items-center justify-center px-1">
        <span className="text-[7px] tracking-[0.18em] font-semibold text-brand-cocoa uppercase leading-none">
          GABY MEIRA
        </span>
        <span className="font-script text-2xl sm:text-3xl text-brand-cocoa leading-none -my-0.5">
          gm
        </span>
        <span className="text-[5.5px] tracking-[0.12em] font-semibold text-brand-cocoa uppercase leading-none text-center">
          CONFEITARIA GOURMET
        </span>
      </div>
    </div>
  );
};
`,

  'src/components/Navbar.tsx': `import React, { useState } from 'react';
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
`,

  'src/components/HeroCarousel.tsx': `import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { HERO_SLIDES, BAKERY_INFO } from '../data/bakeryData';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = HERO_SLIDES[activeIndex];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="inicio" className="confetti-bg relative overflow-hidden py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/95 backdrop-blur-sm border-2 border-brand-pink rounded-3xl p-6 sm:p-12 shadow-xl shadow-pink-100/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pinkLight border border-brand-pink text-brand-pinkDark text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {current.tag}
              </span>

              <h1 className="font-display text-3xl sm:text-5xl font-bold text-brand-cocoa leading-tight">
                {current.title}
              </h1>

              <p className="text-base sm:text-lg text-brand-cocoa/80 leading-relaxed">
                {current.subtitle}
              </p>

              <p className="font-script text-2xl sm:text-3xl text-brand-pinkDark">
                “{BAKERY_INFO.tagline}”
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-pinkDark hover:bg-pink-700 text-white font-display font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-pink-200 transition-all hover:scale-105"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  Encomende seu Sonho de Bolo
                </a>
                <a
                  href="#catalogo"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-brand-pink text-brand-cocoa font-display font-semibold hover:bg-brand-pinkLight transition-colors"
                >
                  Ver Cardápio
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 pt-3">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={\`Slide \${idx + 1}\`}
                    className={\`h-2.5 rounded-full transition-all \${
                      idx === activeIndex ? 'w-8 bg-brand-pinkDark' : 'w-2.5 bg-brand-pink'
                    }\`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-brand-pink shadow-lg">
                <img
                  src={current.imageUrl}
                  alt={current.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cocoa/30 via-transparent to-transparent" />
              </div>

              <button
                onClick={prevSlide}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-brand-cocoa shadow-md flex items-center justify-center transition-transform hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Próximo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-brand-cocoa shadow-md flex items-center justify-center transition-transform hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`,

  'src/components/CakeGallery.tsx': `import React, { useState } from 'react';
import { MessageCircle, Cake } from 'lucide-react';
import { CAKES_CATALOG } from '../data/bakeryData';
import { CakeCategory } from '../types/bakery';
import { buildWhatsAppLink } from '../utils/whatsapp';

const CATEGORIES: CakeCategory[] = [
  'Todos',
  'Infantil & Temáticos',
  'Clássicos & Laços',
  'Sobremesas',
];

export const CakeGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory>('Todos');

  const filteredCakes =
    selectedCategory === 'Todos'
      ? CAKES_CATALOG
      : CAKES_CATALOG.filter((cake) => cake.category === selectedCategory);

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 text-brand-pinkDark font-bold text-xs uppercase tracking-widest">
            <Cake className="w-4 h-4" />
            Galeria de Criações
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-cocoa">
            Bolos Personalizados & Sobremesas
          </h2>
          <p className="text-brand-cocoa/75 text-sm sm:text-base">
            Escolha um estilo como inspiração ou envie o tema da sua festa para criarmos algo exclusivo.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={\`px-5 py-2 rounded-full font-display text-sm font-semibold transition-all \${
                  isActive
                    ? 'bg-brand-pinkDark text-white shadow-md shadow-pink-200'
                    : 'bg-brand-pinkLight text-brand-cocoa hover:bg-brand-pink/60'
                }\`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCakes.map((cake) => (
            <article
              key={cake.id}
              className="group bg-white rounded-3xl border-2 border-brand-pink/60 hover:border-brand-pinkDark overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-pinkLight">
                <img
                  src={cake.imageUrl}
                  alt={cake.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {cake.badge && (
                  <span className="absolute top-3 left-3 bg-brand-yellow text-brand-cocoa font-display font-bold text-xs px-3 py-1 rounded-full shadow">
                    {cake.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-brand-pinkDark uppercase tracking-wider">
                    {cake.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-brand-cocoa mt-1">
                    {cake.title}
                  </h3>
                  <p className="text-sm text-brand-cocoa/75 mt-2 leading-relaxed">
                    {cake.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-pink/40 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-brand-cocoa/70 bg-brand-pinkLight px-3 py-1 rounded-full">
                    {cake.servings}
                  </span>
                  <a
                    href={buildWhatsAppLink(
                      \`Olá Gaby! Gostaria de um orçamento para o modelo: \${cake.title} (\${cake.servings}).\`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-pinkDark hover:text-pink-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pedir Orçamento
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
`,

  'src/components/OrderSteps.tsx': `import React from 'react';
import { Palette, CalendarCheck, Gift } from 'lucide-react';

export const OrderSteps: React.FC = () => {
  const steps = [
    {
      icon: Palette,
      title: '1. Escolha o Tema & Sabor',
      desc: 'Conte sua ideia, cores da festa, quantidade de convidados e seus recheios favoritos.',
    },
    {
      icon: CalendarCheck,
      title: '2. Reserve sua Data',
      desc: 'Confirmamos a disponibilidade da agenda em Barueri e fechamos todos os detalhes do orçamento.',
    },
    {
      icon: Gift,
      title: '3. Celebre Doces Memórias',
      desc: 'Seu bolo é produzido artesanalmente com ingredientes selecionados para encantar sua festa.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-brand-pinkLight/70 border-y border-brand-pink/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-cocoa">
            Como Fazer sua Encomenda
          </h2>
          <p className="text-sm sm:text-base text-brand-cocoa/75 mt-2">
            Simples, rápido e totalmente personalizado para o seu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-white rounded-3xl p-7 border-2 border-brand-pink/60 text-center space-y-3 shadow-sm"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-pink flex items-center justify-center text-brand-cocoa">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-cocoa">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-cocoa/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
`,

  'src/components/LocationFooter.tsx': `import React from 'react';
import { MapPin, Clock, Instagram, Phone, ExternalLink, Heart } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import { BrandLogo } from './BrandLogo';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const LocationFooter: React.FC = () => {
  return (
    <footer id="localizacao" className="bg-brand-cocoa text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Coluna 1: Dados da Confeitaria */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <BrandLogo size="md" />
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-pink">
                  {BAKERY_INFO.name}
                </h2>
                <p className="font-script text-2xl text-brand-yellow">
                  {BAKERY_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Bolos personalizados, doces gourmet e sobremesas artesanais feitos com carinho para tornar cada celebração inesquecível.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{BAKERY_INFO.city}</p>
                  <p className="text-white/75">{BAKERY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Horário de Atendimento</p>
                  {BAKERY_INFO.hours.map((item) => (
                    <p key={item.days} className="text-white/75">
                      <span className="font-medium text-white/90">{item.days}:</span> {item.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-brand-pink shrink-0" />
                <a
                  href={BAKERY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-brand-pink underline underline-offset-4 transition-colors"
                >
                  {BAKERY_INFO.instagramHandle}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-pinkDark hover:bg-pink-600 text-white font-display font-semibold text-sm px-5 py-3 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                Cardápio & Orçamentos
              </a>
              <a
                href={BAKERY_INFO.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display font-semibold text-sm px-5 py-3 rounded-full transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Coluna 2: Mapa Interativo Google Maps */}
          <div className="lg:col-span-7">
            <div className="bg-white/10 p-2 rounded-3xl border border-white/15 h-full min-h-[320px] flex flex-col">
              <iframe
                title="Localização Gaby Meira Confeitaria em Barueri - SP"
                src={BAKERY_INFO.googleMapsEmbedUrl}
                className="w-full flex-1 min-h-[300px] rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {BAKERY_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="inline-flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-brand-pink fill-current" /> em Barueri - SP
          </p>
        </div>
      </div>
    </footer>
  );
};
`,

  'src/App.tsx': `import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { CakeGallery } from './components/CakeGallery';
import { OrderSteps } from './components/OrderSteps';
import { LocationFooter } from './components/LocationFooter';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <CakeGallery />
        <OrderSteps />
      </main>
      <LocationFooter />
    </div>
  );
}

export default App;
`,

  'src/main.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(process.cwd(), filePath);
  const dir = path.dirname(fullPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Criado: ${filePath}`);
}

console.log('\nEstrutura criada com sucesso! Agora rode:');
console.log('  npm install');
console.log('  npm run dev');