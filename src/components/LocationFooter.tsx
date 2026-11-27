import React from 'react';
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
