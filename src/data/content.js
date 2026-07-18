export const LANGS = ['UZ', 'ЎЗ', 'RU', 'EN'];

export const NAV_ITEMS = [
  { label: 'Bosh sahifa', href: '#sahna' },
  {
    label: 'Spektakllar',
    children: [
      { label: 'Repertuar', href: '#spektakllar' },
      { label: 'Afisha', href: '#spektakllar' },
    ],
  },
  {
    label: 'Teatr',
    children: [
      { label: 'Teatr tarixi', href: '#teatr' },
      { label: 'Teatr studiyasi', href: '#teatr' },
      { label: 'Tomoshabin zali', href: '#teatr' },
    ],
  },
  {
    label: 'Teatr jamoasi',
    children: [
      { label: 'Teatr rahbariyati', href: '#teatr' },
      { label: 'Rejissyorlar', href: '#jamoa' },
      { label: 'Aktyorlar', href: '#jamoa' },
      { label: 'Dramaturglar', href: '#jamoa' },
    ],
  },
  {
    label: 'Matbuot',
    children: [
      { label: 'Yangiliklar', href: '#matbuot' },
      { label: 'Foto jamlanma', href: '#matbuot' },
      { label: 'Video jamlanma', href: '#matbuot' },
    ],
  },
  { label: "Bog'lanish", href: '#kontakt' },
];

export const MARQUEE_ITEMS = [
  'Romeo va Julietta',
  'Jinoyat va Jazo',
  "O'tkan kunlar",
  'Hamlet',
  'Telba',
];

export const STATS = [
  { son: 15, q: '+', nomi: "Yillik sahna yo'li" },
  { son: 40, q: '+', nomi: 'Sahna asari' },
  { son: 25, q: '', nomi: "Truppa a'zosi" },
];

export const PLAYS = [
  {
    raqam: '1',
    janr: 'Fojia',
    muallif: 'Uilyam Shekspir',
    nom1: 'Romeo',
    nom2: 'va Julietta',
    sana: '18-IYUL · 19:00',
    narx: "80 000 so'mdan",
    chiptaRaqam: 'Kirish № 0718',
  },
  {
    raqam: '2',
    janr: 'Drama',
    muallif: 'Fyodor Dostoyevskiy',
    nom1: 'Jinoyat',
    nom2: 'va Jazo',
    sana: '24-IYUL · 18:30',
    narx: "70 000 so'mdan",
    chiptaRaqam: 'Kirish № 0724',
  },
  {
    raqam: '3',
    janr: 'Milliy roman',
    muallif: 'Abdulla Qodiriy',
    nom1: "O'tkan",
    nom2: 'kunlar',
    sana: '31-IYUL · 19:00',
    narx: "75 000 so'mdan",
    chiptaRaqam: 'Kirish № 0731',
  },
];

export const ACTORS = [
  { ism: "O'lmas Temur", rol: 'Bosh rejissyor' },
  { ism: 'Aktyor ismi', rol: 'Yetakchi aktyor' },
  { ism: 'Aktrisa ismi', rol: 'Yetakchi aktrisa' },
  { ism: 'Aktyor ismi', rol: 'Xarakterli rollar' },
];

export const NEWS = [
  {
    sana: '12-iyul',
    titr: "«O'tkan kunlar» premyerasi anshlag bilan o'tdi",
    qisqa: "Yangi mavsumning ilk premyerasi to'liq zal oldida namoyish etildi",
  },
  {
    sana: '05-iyul',
    titr: "Yangi mavsum repertuari e'lon qilindi",
    qisqa: '2026–2027 mavsumida 8 ta yangi sahna asari',
  },
  {
    sana: '28-iyun',
    titr: 'Truppaga yosh aktyorlar qabul qilinmoqda',
    qisqa: '1-avgustgacha davom etadi',
  },
];
