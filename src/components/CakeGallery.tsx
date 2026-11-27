import React, { useState } from 'react';
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
                className={`px-5 py-2 rounded-full font-display text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-pinkDark text-white shadow-md shadow-pink-200'
                    : 'bg-brand-pinkLight text-brand-cocoa hover:bg-brand-pink/60'
                }`}
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
                      `Olá Gaby! Gostaria de um orçamento para o modelo: ${cake.title} (${cake.servings}).`
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
