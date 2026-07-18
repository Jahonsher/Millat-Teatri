import { useEffect } from 'react';

export function useMagicWand() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.documentElement.classList.add('mt-wand-on');

    const wand = document.createElement('div');
    wand.id = 'mt-wand';
    wand.innerHTML = `
      <div id="mt-wand-inner">
        <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="mt-glow-g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#f0e6d2" stop-opacity=".9"/>
              <stop offset="55%" stop-color="#d4af5a" stop-opacity=".45"/>
              <stop offset="100%" stop-color="#d4af5a" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="mt-stick-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f0e6d2"/>
              <stop offset="55%" stop-color="#d4af5a"/>
              <stop offset="100%" stop-color="#6b4310"/>
            </linearGradient>
          </defs>
          <circle class="mt-star-glow" cx="8" cy="8" r="11" fill="url(#mt-glow-g)"/>
          <line x1="11" y1="11" x2="41" y2="41" stroke="#4a2d08" stroke-width="3.2" stroke-linecap="round" opacity=".55"/>
          <line x1="11" y1="11" x2="41" y2="41" stroke="url(#mt-stick-g)" stroke-width="2" stroke-linecap="round"/>
          <line x1="15" y1="15" x2="38" y2="38" stroke="#f0e6d2" stroke-width="0.6" stroke-linecap="round" stroke-dasharray="1 4" opacity=".55"/>
          <g>
            <path d="M8 1.5 L10.1 6 L14.5 8 L10.1 10 L8 14.5 L5.9 10 L1.5 8 L5.9 6 Z" fill="#f0e6d2" stroke="#d4af5a" stroke-width=".7" stroke-linejoin="round"/>
            <circle cx="8" cy="8" r="1.5" fill="#a01d24"/>
          </g>
        </svg>
      </div>
    `;
    document.body.appendChild(wand);

    let raf;
    let mx = -100,
      my = -100;
    let wx = -100,
      wy = -100;
    let prevWx = -100,
      prevWy = -100;
    let trailAccumulator = 0;
    let hasMoved = false;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!hasMoved) {
        wx = mx;
        wy = my;
        prevWx = wx;
        prevWy = wy;
        wand.classList.add('mt-wand-visible');
        hasMoved = true;
      }
    };

    const frame = () => {
      wx += (mx - wx) * 0.28;
      wy += (my - wy) * 0.28;
      wand.style.transform = 'translate(' + (wx - 8) + 'px,' + (wy - 8) + 'px)';

      const dx = wx - prevWx,
        dy = wy - prevWy;
      const speed = Math.hypot(dx, dy);
      trailAccumulator += speed;
      if (trailAccumulator > 14 && hasMoved) {
        spawnTrailSparkle(wx, wy);
        trailAccumulator = 0;
      }
      prevWx = wx;
      prevWy = wy;

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const idleInterval = setInterval(() => {
      if (!hasMoved || document.hidden) return;
      spawnTrailSparkle(wx + (Math.random() - 0.5) * 6, wy + (Math.random() - 0.5) * 6);
    }, 380);

    const onMouseLeave = () => wand.classList.remove('mt-wand-visible');
    const onMouseEnter = () => hasMoved && wand.classList.add('mt-wand-visible');

    const onMouseOver = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest('a, button, [role="button"], [onclick]')) {
        wand.classList.add('mt-wand-hover');
      }
    };
    const onMouseOut = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest('a, button, [role="button"], [onclick]')) {
        wand.classList.remove('mt-wand-hover');
      }
    };

    const onMouseDown = () => {
      wand.classList.add('mt-wand-down');
      spawnBurst(wx, wy);
    };
    const onMouseUp = () => wand.classList.remove('mt-wand-down');

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    function spawnTrailSparkle(x, y) {
      const s = document.createElement('div');
      s.className = 'mt-sparkle mt-sparkle-trail';
      const size = 3 + Math.random() * 4;
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      const dx = (Math.random() - 0.5) * 40;
      const dy = 25 + Math.random() * 45;
      const dur = 1.1 + Math.random() * 0.6;
      s.style.setProperty('--dx', dx + 'px');
      s.style.setProperty('--dy', dy + 'px');
      s.style.setProperty('--dur', dur + 's');
      document.body.appendChild(s);
      setTimeout(() => s.remove(), dur * 1000 + 100);
    }

    function spawnBurst(x, y) {
      const n = 14;
      for (let i = 0; i < n; i++) {
        const s = document.createElement('div');
        s.className = 'mt-sparkle mt-sparkle-burst';
        const size = 4 + Math.random() * 6;
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = x + 'px';
        s.style.top = y + 'px';
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.5;
        const dist = 30 + Math.random() * 40;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist + 15;
        const dur = 0.7 + Math.random() * 0.5;
        s.style.setProperty('--dx', dx + 'px');
        s.style.setProperty('--dy', dy + 'px');
        s.style.setProperty('--dur', dur + 's');
        document.body.appendChild(s);
        setTimeout(() => s.remove(), dur * 1000 + 100);
      }
      const fallCount = 8;
      for (let i = 0; i < fallCount; i++) {
        const s = document.createElement('div');
        s.className = 'mt-sparkle mt-sparkle-trail';
        const size = 3 + Math.random() * 4;
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = x + (Math.random() - 0.5) * 16 + 'px';
        s.style.top = y + 'px';
        const dx = (Math.random() - 0.5) * 60;
        const dy = 40 + Math.random() * 60;
        const dur = 1.2 + Math.random() * 0.6;
        s.style.setProperty('--dx', dx + 'px');
        s.style.setProperty('--dy', dy + 'px');
        s.style.setProperty('--dur', dur + 's');
        document.body.appendChild(s);
        setTimeout(() => s.remove(), dur * 1000 + 100);
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(idleInterval);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      wand.remove();
      document.documentElement.classList.remove('mt-wand-on');
    };
  }, []);
}
