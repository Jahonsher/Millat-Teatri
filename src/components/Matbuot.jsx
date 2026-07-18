import { NEWS } from '../data/content.js';

export default function Matbuot() {
  return (
    <section id="matbuot">
      <div className="qism">
        <div className="qism-bosh osh">
          <span className="akt">IV</span>
          <h2>
            Matbuot <span className="urgu">xizmati</span>
          </h2>
        </div>
        <div className="xabarlar">
          {NEWS.map((n, i) => (
            <a key={i} href="#matbuot" className="xabar osh">
              <div className="sana">{n.sana}</div>
              <div>
                <div className="titr">{n.titr}</div>
                <div className="qisqa">{n.qisqa}</div>
              </div>
              <div className="ok">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
