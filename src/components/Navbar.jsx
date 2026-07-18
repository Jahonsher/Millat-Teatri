import { useState } from 'react';
import { LANGS, NAV_ITEMS } from '../data/content.js';

const RIM = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function Tillar({ lang, setLang, className = '' }) {
  return (
    <div className={`tillar ${className}`}>
      {LANGS.map((l) => (
        <button
          key={l}
          className={lang === l ? 'faol' : ''}
          onClick={() => setLang(l)}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [lang, setLang] = useState('UZ');
  const [ochiq, setOchiq] = useState(false);
  const [ochiqBand, setOchiqBand] = useState(null);

  const yop = () => {
    setOchiq(false);
    document.body.style.overflow = '';
  };
  const toggle = () => {
    const yangi = !ochiq;
    setOchiq(yangi);
    document.body.style.overflow = yangi ? 'hidden' : '';
  };

  return (
    <>
      <nav className="bosh">
        <a href="#sahna" className="brend">
          <img
            src="/uploads/Oq%20fonda%20ishlatish%20uchun%20yozuvsiz.png"
            alt="Millat teatri logotipi"
          />
          <span className="nomi">Millat teatri</span>
        </a>
        <div className="nav-orta">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button className="tepa">{item.label} ▾</button>
                  <div className="ostki">
                    {item.children.map((c, i) => (
                      <a key={i} href={c.href}>
                        {c.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a className="tepa" href={item.href}>
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="nav-ong">
          <Tillar lang={lang} setLang={setLang} />
          <a href="#chipta" className="nav-chipta">
            Chipta olish
          </a>
        </div>
        <button
          id="burger"
          className={ochiq ? 'ochiq' : ''}
          aria-label="Menyu"
          onClick={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div id="menyu" className={ochiq ? 'ochiq' : ''}>
        <div className="fon" onClick={yop}></div>
        <div className="ichi">
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`band ${item.children ? 'ostli' : ''} ${ochiqBand === i ? 'ochiq' : ''}`}
            >
              {item.children ? (
                <>
                  <button
                    style={{ transitionDelay: `${0.05 + i * 0.04}s` }}
                    onClick={() => setOchiqBand(ochiqBand === i ? null : i)}
                  >
                    <span>
                      <span className="raq">{RIM[i]}</span>
                      {item.label}
                    </span>
                    <span className="ok">→</span>
                  </button>
                  <div className="ost">
                    {item.children.map((c, j) => (
                      <a key={j} href={c.href} onClick={yop}>
                        {c.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  style={{ transitionDelay: `${0.05 + i * 0.04}s` }}
                  onClick={yop}
                >
                  <span>
                    <span className="raq">{RIM[i]}</span>
                    {item.label}
                  </span>
                </a>
              )}
            </div>
          ))}
          <Tillar lang={lang} setLang={setLang} className="m-tillar" />
          <a href="#chipta" className="m-chipta" onClick={yop}>
            Chipta olish
          </a>
        </div>
      </div>
    </>
  );
}
