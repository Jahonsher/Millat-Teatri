# Millat teatri

Millat teatri — O'lmas Temur teatri veb-sayti. React + Vite + Tailwind CSS.

## Ishga tushirish

```bash
npm install
npm run dev
```

Sahifa `http://localhost:5173` da ochiladi.

## Ishlab chiqarish uchun build

```bash
npm run build
npm run preview
```

## Dizayn

Qorong'u qizil-oltin teatr temasi:
- **Parda preloader** — kirishda baxmal parda ochiladi
- **Hero** — sahna ko'rinishi: yon pardalar, lambrikin, projektor konuslari, sahna poli
- **O'lmas Temur** — asoschi bo'limi, aylanuvchi «kaseta» portret bilan
- **Spektakllar** — kirish chiptasi dizaynidagi kartalar (perforatsiya, shtrix-kod)
- **Chipta CTA** — uziladigan qismli katta chipta
- **Sehrli tayoqcha** — desktopda kursor o'rnida uchqun sochuvchi tayoqcha
- Mobil: gorizontal afisha surish, pastki «Afisha / Chipta» panel, akkordeon menyu
- Navbar: uzddt.uz sahifalari strukturasi + til almashtirgich (UZ/ЎЗ/RU/EN)

## Struktura

```
├── index.html
├── vite.config.js / tailwind.config.js / postcss.config.js
├── public/uploads/          # Logo, rasm, Berlin Collection shrifti
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css            # Barcha uslublar (custom CSS + tailwind directivalar)
│   ├── data/content.js      # Nav, spektakllar, aktyorlar, yangiliklar
│   ├── hooks/
│   │   ├── usePageEffects.js  # scroll reveal, stat sanagich, tap uchqun
│   │   └── useMagicWand.js    # sehrli tayoqcha kursor
│   └── components/
│       ├── Curtain.jsx      # Parda preloader
│       ├── Navbar.jsx       # Nav + dropdown + til + mobil menyu
│       ├── Hero.jsx         # Sahna
│       ├── Marquee.jsx      # Aylanma lenta
│       ├── Founder.jsx      # O'lmas Temur
│       ├── Spektakllar.jsx  # Chipta-kartalar
│       ├── Jamoa.jsx        # Truppa
│       ├── Matbuot.jsx      # Yangiliklar
│       ├── ChiptaCTA.jsx    # Katta chipta
│       ├── Footer.jsx
│       ├── BottomPanel.jsx  # Mobil pastki panel
│       └── Shtrix.jsx       # Shtrix-kod generatori
```
