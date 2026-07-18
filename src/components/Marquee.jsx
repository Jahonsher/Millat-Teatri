import { MARQUEE_ITEMS } from '../data/content.js';

export default function Marquee() {
  const ikki = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="lenta">
      <div className="oqim">
        {ikki.map((m, i) => (
          <span key={i} style={{ display: 'inline-flex', gap: '48px', alignItems: 'center' }}>
            {m}
            <span className="yul">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
