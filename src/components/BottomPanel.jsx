import { useEffect, useState } from 'react';

export default function BottomPanel() {
  const [bor, setBor] = useState(false);

  useEffect(() => {
    const onScroll = () => setBor(window.scrollY > window.innerHeight * 0.55);
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="panel" className={bor ? 'bor' : ''}>
      <a href="#spektakllar" className="p-afisha">
        🎭 Afisha
      </a>
      <a href="#chipta" className="p-chipta">
        🎟 Chipta olish
      </a>
    </div>
  );
}
