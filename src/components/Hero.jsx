export default function Hero() {
  return (
    <header id="sahna">
      <div className="lambrikin"></div>
      <div className="yon-parda chap"></div>
      <div className="yon-parda ong"></div>
      <div className="konus k1"></div>
      <div className="konus k2"></div>
      <div className="sahna-pol"></div>
      <div className="sahna-ichik">
        <div className="mavsum">2026 · 2027 mavsumi</div>
        <h1>
          <span className="satr">
            <span>Millat</span>
          </span>
          <span className="satr">
            <span>teatri</span>
          </span>
        </h1>
        <p className="sahna-tagsoz">
          Siz shunchaki tomoshabin emassiz — <b>sahnadasiz</b>.
          <br />
          Dostoyevskiy dramalari, Shekspir fojialari va o'zbek milliy ruhi bir maskanda.
        </p>
        <div className="sahna-tugmalar">
          <a href="#spektakllar" className="tugma-asosiy">
            Afishani ko'rish
          </a>
          <a href="#teatr" className="tugma-oddiy">
            Teatr bilan tanishing
          </a>
        </div>
      </div>
      <div className="pastga">
        <span>Sahnaga kiring</span>
        <span className="ip"></span>
      </div>
    </header>
  );
}
