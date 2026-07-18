/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0708',
        bg2: '#170a0c',
        bg3: '#0e0809',
        bg4: '#090506',
        cream: '#f0e6d2',
        gold: '#d4af5a',
        crimson: '#a01d24',
        'crimson-dark': '#701216',
        'crimson-mid': '#8a161c',
        'crimson-light': '#b8232b',
      },
      fontFamily: {
        berlin: ['"Berlin Collection"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      keyframes: {
        curtainL: { to: { transform: 'translateX(-102%)' } },
        curtainR: { to: { transform: 'translateX(102%)' } },
        curtainFade: { to: { opacity: '0', visibility: 'hidden' } },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: { '0%,100%': { opacity: '.55' }, '50%': { opacity: '.9' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        flicker: {
          '0%,100%': { opacity: '.85' },
          '45%': { opacity: '.6' },
          '55%': { opacity: '.95' },
        },
        menuFade: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        curtainL: 'curtainL 1.4s cubic-bezier(.7,0,.3,1) 1.1s forwards',
        curtainR: 'curtainR 1.4s cubic-bezier(.7,0,.3,1) 1.1s forwards',
        curtainFade: 'curtainFade .6s ease 2.6s forwards',
        curtainInner: 'curtainFade .5s ease 1s forwards',
        'rise-03': 'riseIn 1s ease .3s backwards',
        'rise-045': 'riseIn 1s ease .45s backwards',
        'rise-06': 'riseIn 1.1s ease .6s backwards',
        'rise-08': 'riseIn 1.1s ease .8s backwards',
        'rise-10': 'riseIn 1.1s ease 1s backwards',
        'rise-115': 'riseIn 1s ease 1.15s backwards',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        flicker: 'flicker 7s ease-in-out infinite',
        flicker2: 'flicker 8s ease-in-out 1.2s infinite',
        menuFade: 'menuFade .3s ease',
      },
      backgroundImage: {
        'nav-fade': 'linear-gradient(180deg,rgba(11,7,8,.92),rgba(11,7,8,.75))',
        'gold-star':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cpath d='M18 5 L21.5 14.5 L31 18 L21.5 21.5 L18 31 L14.5 21.5 L5 18 L14.5 14.5 Z' fill='none' stroke='%23d4af5a' stroke-width='1.1'/%3E%3Ccircle cx='18' cy='18' r='1.6' fill='%23d4af5a'/%3E%3C/svg%3E\")",
        'gold-star-sm':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath d='M15 4 L18 12 L26 15 L18 18 L15 26 L12 18 L4 15 L12 12 Z' fill='none' stroke='%23d4af5a' stroke-width='1'/%3E%3C/svg%3E\")",
        'gold-star-lg':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 8 L33 23 L48 28 L33 33 L28 48 L23 33 L8 28 L23 23 Z' fill='none' stroke='%23d4af5a' stroke-width='.8'/%3E%3C/svg%3E\")",
        'curtain-l':
          'repeating-linear-gradient(90deg,#5c0f14 0 26px,#8a1a20 26px 46px,#6d1318 46px 72px),linear-gradient(180deg,#3d0a0d,#7a161c)',
        'curtain-r':
          'repeating-linear-gradient(90deg,#6d1318 0 26px,#8a1a20 20px 46px,#5c0f14 46px 72px),linear-gradient(180deg,#3d0a0d,#7a161c)',
        'hero-glow':
          'radial-gradient(ellipse 90% 60% at 50% -10%,rgba(160,29,36,.55),transparent 60%),radial-gradient(ellipse 60% 45% at 50% 108%,rgba(212,175,90,.16),transparent 65%),linear-gradient(180deg,#170a0c 0%,#0b0708 55%,#120809 100%)',
        'hero-flicker-l': 'linear-gradient(195deg,rgba(240,220,170,.10),transparent 70%)',
        'hero-flicker-r': 'linear-gradient(165deg,rgba(240,220,170,.10),transparent 70%)',
        'afisha-glow':
          'radial-gradient(ellipse 70% 50% at 50% 0%,rgba(160,29,36,.28),transparent 65%)',
        'crimson-btn': 'linear-gradient(135deg,#a01d24,#701216)',
        'crimson-btn-hover': 'linear-gradient(135deg,#b8232b,#8a161c)',
        'marquee-bg': 'linear-gradient(90deg,#170a0c,#241014,#170a0c)',
        'article-card': 'linear-gradient(180deg,#170c0e,#100a0b)',
        'chipta-radial':
          'radial-gradient(ellipse 80% 90% at 50% 50%,rgba(160,29,36,.5),transparent 75%),linear-gradient(180deg,#150a0c,#1d0d10,#150a0c)',
      },
    },
  },
  plugins: [],
};
