import React from 'react';
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
