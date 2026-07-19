import { useEffect, useState } from 'react';

export default function Curtain() {
  const [ochil, setOchil] = useState(false);
  const [ketdi, setKetdi] = useState(false);
  const [shrift, setShrift] = useState(false);

  useEffect(() => {
    let tirik = true;
    if (document.fonts?.load) {
      Promise.race([
        document.fonts.load('1em "Berlin Collection"'),
        new Promise((r) => setTimeout(r, 2500)),
      ]).then(() => tirik && setShrift(true));
    } else {
      setShrift(true);
    }
    return () => {
      tirik = false;
    };
  }, []);

  useEffect(() => {
    const kam = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setOchil(true), kam ? 150 : 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ochil) return;
    const t = setTimeout(() => setKetdi(true), 2300);
    return () => clearTimeout(t);
  }, [ochil]);

  if (ketdi) return null;

  return (
    <div id="parda" className={ochil ? 'ochil' : ''} onClick={() => setOchil(true)}>
      <div className="qanot chap"></div>
      <div className="qanot ong"></div>
      <div className="markaz">
        <img
          className="logo"
          src="/uploads/Oq%20fonda%20ishlatish%20uchun%20yozuvsiz.png"
          alt=""
        />
        <h1 className={shrift ? 'shrift-tayyor' : ''}>Millat teatri</h1>
        <div className="satr">Parda ochilmoqda</div>
      </div>
    </div>
  );
}
