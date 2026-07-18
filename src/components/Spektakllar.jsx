import Shtrix from './Shtrix.jsx';
import { PLAYS } from '../data/content.js';

export default function Spektakllar() {
  return (
    <section id="spektakllar">
      <div className="qism">
        <div className="qism-bosh osh">
          <span className="akt">II</span>
          <h2>
            Bugun <span className="urgu">sahnada</span>
          </h2>
        </div>
        <p className="qism-izoh osh">Uchta afisha — uchta olam. O'rningizni tanlang.</p>
        <div className="afisha-oqimi">
          {PLAYS.map((p) => (
            <article key={p.raqam} className="spek osh">
              <div className="plakat-yuz">
                <span className="fon-raqam">{p.raqam}</span>
                <span className="janr-tam">{p.janr}</span>
                <div className="p-muallif">{p.muallif}</div>
                <h3 className="p-nom plakat">
                  {p.nom1} <br />
                  <span className="ikkinchi">{p.nom2}</span>
                </h3>
                <div className="p-yulduz">✦ ✦ ✦</div>
                <div className="p-sana">{p.sana}</div>
              </div>
              <div className="pastki-q">
                <span className="narxi">{p.narx}</span>
                <a href="#chipta" className="olish">
                  Chipta
                </a>
              </div>
              <div className="ch-past">
                <Shtrix className="shtrix3" />
                <span className="ch-raqam">{p.chiptaRaqam}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="surish">
          <span>Suring</span>
          <span className="str">→</span>
        </div>
      </div>
    </section>
  );
}
