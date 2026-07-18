import Shtrix from './Shtrix.jsx';

export default function ChiptaCTA() {
  return (
    <section id="chipta">
      <div className="katta-chipta osh">
        <div className="asosiy-q">
          <div className="k-yorliq">So'nggi akt · Bugun oqshom</div>
          <h2>O'z o'rningizni band qiling</h2>
          <p>Chiptalar onlayn va teatr kassasida. Eng yaxshi o'rinlar tez band bo'ladi.</p>
          <a href="#kontakt" className="t-oq2">
            🎟 Chipta sotib olish
          </a>
        </div>
        <div className="uzish">
          <span className="vert">Millat teatri</span>
          <Shtrix className="shtrix2" />
          <span className="vert">№ 2026</span>
        </div>
      </div>
    </section>
  );
}
