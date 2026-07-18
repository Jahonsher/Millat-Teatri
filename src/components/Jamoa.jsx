import { ACTORS } from '../data/content.js';

export default function Jamoa() {
  return (
    <section id="jamoa">
      <div className="qism">
        <div className="qism-bosh osh">
          <span className="akt">III</span>
          <h2>
            Teatr <span className="urgu">jamoasi</span>
          </h2>
        </div>
        <p className="qism-izoh osh">Har rol ortida — bir umr mehnat va sahnaga muhabbat.</p>
        <div className="jamoa-qator">
          {ACTORS.map((a, i) => (
            <div key={i} className="azo osh">
              <div className="surat">
                <span className="belgi">🎭</span>
              </div>
              <div className="ism">{a.ism}</div>
              <div className="rol">{a.rol}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
