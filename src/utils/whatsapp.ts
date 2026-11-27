import { BAKERY_INFO } from '../data/bakeryData';

export function buildWhatsAppLink(customMessage?: string): string {
  const defaultMsg =
    'Olá Gaby! Vim pelo site e gostaria de solicitar um orçamento de bolo/doces personalizados.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${text}`;
}
