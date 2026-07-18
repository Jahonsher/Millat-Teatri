import { useState } from 'react';

/* shtrix-kod — tasodifiy chiziqlar */
export default function Shtrix({ className }) {
  const [bars] = useState(() =>
    Array.from({ length: 24 }, () => ({
      height: 30 + Math.random() * 70 + '%',
      wide: Math.random() > 0.7,
    }))
  );
  return (
    <span className={className} aria-hidden="true">
      {bars.map((b, i) => (
        <i key={i} style={{ height: b.height, ...(b.wide ? { width: '4px' } : {}) }} />
      ))}
    </span>
  );
}
