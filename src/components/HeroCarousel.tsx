import React, { useState } from 'react';
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
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === activeIndex ? 'w-8 bg-brand-pinkDark' : 'w-2.5 bg-brand-pink'
                    }`}
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
