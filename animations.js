(function () {
  'use strict';

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = matchMedia('(pointer: coarse)').matches;

  const style = document.createElement('style');
  style.textContent = `
    .mt-reveal{opacity:0;transform:translateY(40px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1);will-change:opacity,transform;}
    .mt-reveal.mt-inview{opacity:1;transform:none;}
    .mt-word{display:inline-block;opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease;will-change:opacity,transform;}
    .mt-word.mt-in{opacity:1;transform:none;}
    .mt-accent{position:relative;display:inline-block;}
    .mt-accent::after{content:'';position:absolute;left:0;bottom:-6px;height:1px;width:0;background:linear-gradient(90deg,#d4af5a,transparent);transition:width .9s cubic-bezier(.2,.7,.2,1) .2s;}
    .mt-accent.mt-in::after{width:64px;}
    #afisha article{transform-style:preserve-3d;}

    /* Magic wand cursor */
    html.mt-wand-on,html.mt-wand-on *{cursor:none!important;}
    #mt-wand{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;will-change:transform;opacity:0;transition:opacity .3s ease;}
    #mt-wand.mt-wand-visible{opacity:1;}
    #mt-wand-inner{width:44px;height:44px;transform-origin:8px 8px;transform:rotate(-18deg);transition:transform .28s cubic-bezier(.34,1.56,.64,1),filter .3s ease;}
    #mt-wand.mt-wand-hover #mt-wand-inner{transform:rotate(-18deg) scale(1.2);}
    #mt-wand.mt-wand-hover{filter:drop-shadow(0 0 6px rgba(240,230,210,.7)) drop-shadow(0 0 16px rgba(212,175,90,.6));}
    #mt-wand.mt-wand-down #mt-wand-inner{transform:rotate(-34deg) scale(.86);}
    .mt-star-glow{transform-origin:8px 8px;animation:mt-star-pulse 2.4s ease-in-out infinite;}
    @keyframes mt-star-pulse{0%,100%{opacity:.4;transform:scale(1);}50%{opacity:.9;transform:scale(1.28);}}

    /* Sparkle particles */
    .mt-sparkle{position:fixed;pointer-events:none;z-index:9998;border-radius:50%;left:0;top:0;background:radial-gradient(circle,#fff8e6,#d4af5a 42%,transparent 72%);will-change:transform,opacity;}
    .mt-sparkle-trail{box-shadow:0 0 8px rgba(240,230,210,.75),0 0 14px rgba(212,175,90,.45);animation:mt-trail var(--dur,1.4s) ease-out forwards;}
    .mt-sparkle-burst{box-shadow:0 0 12px rgba(240,230,210,.9),0 0 24px rgba(212,175,90,.7);animation:mt-burst var(--dur,.9s) cubic-bezier(.14,.72,.32,1) forwards;}
    @keyframes mt-trail{
      0%{transform:translate(-50%,-50%) scale(.5);opacity:0;}
      15%{opacity:1;}
      100%{transform:translate(calc(-50% + var(--dx,0px)),calc(-50% + var(--dy,50px))) scale(.15);opacity:0;}
    }
    @keyframes mt-burst{
      0%{transform:translate(-50%,-50%) scale(.3);opacity:1;}
      100%{transform:translate(calc(-50% + var(--dx,0)),calc(-50% + var(--dy,0))) scale(1.5);opacity:0;}
    }

    @media (prefers-reduced-motion:reduce){
      .mt-reveal,.mt-word,.mt-accent::after{transition:none!important;opacity:1!important;transform:none!important;width:64px!important;}
      #mt-wand,.mt-sparkle{display:none!important;}
      html.mt-wand-on,html.mt-wand-on *{cursor:auto!important;}
    }
  `;
  document.head.appendChild(style);

  function waitForContent(cb) {
    if (document.querySelector('section#haqida')) return cb();
    const mo = new MutationObserver(() => {
      if (document.querySelector('section#haqida')) {
        mo.disconnect();
        cb();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => { try { mo.disconnect(); } catch (e) {} cb(); }, 6000);
  }

  function init() {
    if (reduce) return;
    installScrollReveal();
    installWordReveal();
    installAccentLine();
    installStatCounters();
    installMarqueeControl();
    if (!isTouch) {
      installTilt();
      installMagicWand();
      installShadowCursorFix();
    }
  }

  function installScrollReveal() {
    const targets = [
      ...document.querySelectorAll('section'),
      ...document.querySelectorAll('#afisha article'),
      ...document.querySelectorAll('#truppa .grid > div'),
      ...document.querySelectorAll('#yangiliklar a'),
      ...document.querySelectorAll('footer#kontakt > div:first-child > div'),
    ];
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('mt-inview');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px' }
    );
    targets.forEach((el, i) => {
      el.classList.add('mt-reveal');
      const delay = Math.min((i % 6) * 80, 400);
      el.style.transitionDelay = delay + 'ms';
      io.observe(el);
    });
  }

  function installWordReveal() {
    const headings = document.querySelectorAll('h1.font-berlin, h2.font-berlin');
    headings.forEach(h => {
      if (h.dataset.mtWorded) return;
      h.dataset.mtWorded = '1';
      const text = h.textContent.trim();
      h.textContent = '';
      const words = text.split(/(\s+)/);
      let wi = 0;
      words.forEach(w => {
        if (/^\s+$/.test(w) || w === '') {
          h.appendChild(document.createTextNode(w));
          return;
        }
        const span = document.createElement('span');
        span.className = 'mt-word';
        span.textContent = w;
        span.style.transitionDelay = wi * 90 + 'ms';
        h.appendChild(span);
        wi++;
      });
    });
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.mt-word').forEach(w => w.classList.add('mt-in'));
          }
        });
      },
      { threshold: 0.35 }
    );
    headings.forEach(h => io.observe(h));
  }

  function installAccentLine() {
    const labels = document.querySelectorAll('section .text-crimson.font-bold, section .text-gold.font-bold');
    labels.forEach(l => l.classList.add('mt-accent'));
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('mt-in');
        });
      },
      { threshold: 0.6 }
    );
    labels.forEach(l => io.observe(l));
  }

  function installStatCounters() {
    const targets = document.querySelectorAll('#haqida .font-berlin.text-gold');
    targets.forEach(el => {
      const raw = el.textContent.trim();
      const m = raw.match(/^(\d+)(.*)$/);
      if (!m) return;
      el.dataset.mtTarget = m[1];
      el.dataset.mtSuffix = m[2] || '';
      el.textContent = '0' + (m[2] || '');
    });
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !e.target.dataset.mtCounted && e.target.dataset.mtTarget) {
            e.target.dataset.mtCounted = '1';
            animateCount(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    targets.forEach(el => io.observe(el));
  }

  function animateCount(el) {
    const target = parseInt(el.dataset.mtTarget, 10);
    const suffix = el.dataset.mtSuffix || '';
    const dur = 1600;
    const start = performance.now();
    function tick(t) {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function installTilt() {
    document.querySelectorAll('#afisha article').forEach(card => {
      let raf;
      card.style.willChange = 'transform';
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transition = 'transform .12s ease-out';
          card.style.transform =
            'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' +
            (x * 7).toFixed(2) + 'deg) translateY(-10px)';
        });
      });
      card.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        card.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)';
        card.style.transform = '';
      });
    });
  }

  function installMarqueeControl() {
    document.querySelectorAll('[data-screen-label="Marquee"] > div').forEach(m => {
      m.addEventListener('mouseenter', () => (m.style.animationPlayState = 'paused'));
      m.addEventListener('mouseleave', () => (m.style.animationPlayState = 'running'));
    });
  }

  function installShadowCursorFix() {
    function inject(node) {
      if (!node || node.nodeType !== 1) return;
      const slots = node.tagName && node.tagName.toLowerCase() === 'image-slot'
        ? [node]
        : (node.querySelectorAll ? Array.from(node.querySelectorAll('image-slot')) : []);
      slots.forEach(slot => {
        const sr = slot.shadowRoot;
        if (!sr || sr.querySelector('#mt-cursor-fix')) return;
        const s = document.createElement('style');
        s.id = 'mt-cursor-fix';
        s.textContent = ':host,:host *,*{cursor:none!important;}';
        sr.appendChild(s);
      });
    }

    inject(document.body);
    setTimeout(() => inject(document.body), 400);
    setTimeout(() => inject(document.body), 1200);

    const mo = new MutationObserver(muts => {
      for (const m of muts) {
        for (const n of m.addedNodes) inject(n);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  function installMagicWand() {
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
    let mx = -100, my = -100;
    let wx = -100, wy = -100;
    let prevWx = -100, prevWy = -100;
    let trailAccumulator = 0;
    let hasMoved = false;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      if (!hasMoved) {
        wx = mx; wy = my;
        prevWx = wx; prevWy = wy;
        wand.classList.add('mt-wand-visible');
        hasMoved = true;
      }
    });

    function frame() {
      wx += (mx - wx) * 0.28;
      wy += (my - wy) * 0.28;
      wand.style.transform = 'translate(' + (wx - 8) + 'px,' + (wy - 8) + 'px)';

      const dx = wx - prevWx, dy = wy - prevWy;
      const speed = Math.hypot(dx, dy);
      trailAccumulator += speed;
      if (trailAccumulator > 14 && hasMoved) {
        spawnTrailSparkle(wx, wy);
        trailAccumulator = 0;
      }
      prevWx = wx; prevWy = wy;

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    setInterval(() => {
      if (!hasMoved || document.hidden) return;
      spawnTrailSparkle(wx + (Math.random() - 0.5) * 6, wy + (Math.random() - 0.5) * 6);
    }, 380);

    document.addEventListener('mouseleave', () => wand.classList.remove('mt-wand-visible'));
    document.addEventListener('mouseenter', () => hasMoved && wand.classList.add('mt-wand-visible'));

    document.addEventListener('mouseover', e => {
      const t = e.target;
      if (t && t.closest && t.closest('a, button, [role="button"], [onclick]')) {
        wand.classList.add('mt-wand-hover');
      }
    });
    document.addEventListener('mouseout', e => {
      const t = e.target;
      if (t && t.closest && t.closest('a, button, [role="button"], [onclick]')) {
        wand.classList.remove('mt-wand-hover');
      }
    });

    document.addEventListener('mousedown', () => {
      wand.classList.add('mt-wand-down');
      spawnBurst(wx, wy);
    });
    document.addEventListener('mouseup', () => wand.classList.remove('mt-wand-down'));

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
        s.style.left = (x + (Math.random() - 0.5) * 16) + 'px';
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => waitForContent(init));
  } else {
    waitForContent(init);
  }
})();
