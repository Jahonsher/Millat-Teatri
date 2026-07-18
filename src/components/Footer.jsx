export default function Footer() {
  return (
    <footer id="kontakt">
      <div className="foot-ich">
        <div className="osh">
          <img
            className="foot-logo"
            src="/uploads/Oq%20fonda%20ishlatish%20uchun%20yozuvli.png"
            alt="Millat teatri"
          />
          <p className="foot-shior">Sahna — millat ko'zgusi. Har oqshom yangi hikoya.</p>
        </div>
        <div className="osh">
          <div className="f-sarl">Manzil</div>
          <div className="f-matn">
            Toshkent shahri,
            <br />
            Navoiy ko'chasi, 1-uy
            <br />
            <br />
            Kassa: har kuni 10:00 – 19:00
            <br />
            Tel: +998 71 200 00 00
          </div>
        </div>
        <div className="osh">
          <div className="f-sarl">Ijtimoiy tarmoqlar</div>
          <div className="f-hav">
            <a href="#kontakt">Instagram</a>
            <a href="#kontakt">Telegram</a>
            <a href="#kontakt">YouTube</a>
          </div>
        </div>
      </div>
      <div className="f-past">
        <span>© 2026 Millat teatri. Barcha huquqlar himoyalangan.</span>
        <span>O'zbekiston Respublikasi Madaniyat vazirligi tasarrufida</span>
      </div>
    </footer>
  );
}
