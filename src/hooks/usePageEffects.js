import { useEffect } from 'react';

const kamHarakat = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* scroll reveal — .osh elementlarga .bor qo'shadi */
export function useReveal() {
  useEffect(() => {
    if (kamHarakat()) {
      document.querySelectorAll('.osh').forEach((el) => el.classList.add('bor'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('bor');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px' }
    );
    document.querySelectorAll('.osh').forEach((el, i) => {
      el.style.transitionDelay = Math.min((i % 4) * 100, 300) + 'ms';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* stat sanagichlar — [data-son] */
export function useStatCounters() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-son]');
    if (kamHarakat()) {
      targets.forEach((el) => {
        el.textContent = el.dataset.son + (el.dataset.q || '');
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const n = +el.dataset.son;
          const q = el.dataset.q || '';
          io.unobserve(el);
          const t0 = performance.now();
          const qadam = (t) => {
            const p = Math.min((t - t0) / 1400, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(n * eased) + q;
            if (p < 1) requestAnimationFrame(qadam);
          };
          requestAnimationFrame(qadam);
        });
      },
      { threshold: 0.6 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* mobil (touch) qurilmalarda bosilganda oltin uchqun */
export function useTapSparkle() {
  useEffect(() => {
    if (kamHarakat()) return;
    if (!window.matchMedia('(pointer: coarse)').matches) return;

    const onDown = (e) => {
      for (let i = 0; i < 8; i++) {
        const s = document.createElement('div');
        s.style.cssText =
          'position:fixed;left:0;top:0;z-index:1400;pointer-events:none;border-radius:50%;' +
          'width:5px;height:5px;background:radial-gradient(circle,#fff8e6,#d4af5a 55%,transparent);' +
          'box-shadow:0 0 10px rgba(243,216,150,.8);';
        const burchak = (Math.PI * 2 * i) / 8 + Math.random() * 0.6;
        const masofa = 24 + Math.random() * 34;
        const dx = Math.cos(burchak) * masofa;
        const dy = Math.sin(burchak) * masofa + 12;
        s.animate(
          [
            { transform: `translate(${e.clientX}px,${e.clientY}px) scale(.4)`, opacity: 1 },
            { transform: `translate(${e.clientX + dx}px,${e.clientY + dy}px) scale(1.3)`, opacity: 0 },
          ],
          { duration: 600 + Math.random() * 300, easing: 'cubic-bezier(.14,.72,.32,1)' }
        );
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1000);
      }
    };
    addEventListener('pointerdown', onDown, { passive: true });
    return () => removeEventListener('pointerdown', onDown);
  }, []);
}
