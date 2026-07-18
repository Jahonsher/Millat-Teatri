import { STATS } from '../data/content.js';

export default function Founder() {
  return (
    <section id="teatr">
      <div className="qism">
        <div className="qism-bosh osh">
          <span className="akt">I</span>
          <h2>
            Sahna ortidagi <span className="urgu">siymo</span>
          </h2>
        </div>
        <p className="qism-izoh osh">Teatr tarixi bir inson qissasidan boshlanadi.</p>
        <div className="gazeta">
          <div className="portret-doira osh">
            <svg className="aylanma" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path
                  id="doira-yol"
                  d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"
                />
              </defs>
              <text>
                <textPath href="#doira-yol">
                  ASOSCHI · REJISSYOR · DRAMATURG · SAHNA USTASI ·&#160;
                </textPath>
              </text>
            </svg>
            <div className="halqa">
              <span className="yuz">🎭</span>
            </div>
          </div>
          <div className="gazeta-matn">
            <div className="osh">
              <h3 className="ism-katta">
                O'lmas <span>Temur</span>
              </h3>
              <div className="unvon">Asoschi va badiiy rahbar</div>
            </div>
            <p className="matn osh">
              O'lmas Temur — o'zbek sahnasida <b>Fyodor Dostoyevskiy</b> dramalari hamda{' '}
              <b>«Romeo va Julietta»</b> singari jahon mumtoz asarlarini jonlantirgani bilan
              tanilgan ijodkor. Uning talqinidagi har bir spektakl — tomoshabin bilan sahna
              orasidagi devorni buzadigan jonli drama. Millat teatri aynan shu e'tiqod ustiga
              qurilgan: teatr tomosha emas — ishtirokdir. Har oqshom parda ochilar ekan, zal
              sahnaning bir qismiga aylanadi.
            </p>
            <div className="iqtibos-rom osh">
              <p>
                Teatr — bu ko'zgu emas. Teatr — bu eshik: tomoshabin undan o'tib, o'zini boshqa
                hayotda ko'radi.
              </p>
              <div className="kimdan">— O'lmas Temur</div>
            </div>
            <div className="stat-chiptalar">
              {STATS.map((st) => (
                <div key={st.nomi} className="stat-chipta osh">
                  <div className="son" data-son={st.son} data-q={st.q}>
                    0{st.q}
                  </div>
                  <div className="nomi">{st.nomi}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
