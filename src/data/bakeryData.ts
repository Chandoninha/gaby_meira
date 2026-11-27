import { BakeryInfo, CakeItem, HeroSlide } from '../types/bakery';

export const BAKERY_INFO: BakeryInfo = {
  name: 'Gaby Meira Confeitaria Gourmet',
  tagline: 'Transformando sonhos em doces memórias',
  instagramHandle: '@gabymeira_confeitaria',
  instagramUrl: 'https://www.instagram.com/gabymeira_confeitaria/',
  whatsappNumber: '5511992316909', // Substitua pelo WhatsApp oficial da confeitaria
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
