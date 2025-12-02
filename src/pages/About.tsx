import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".section-card")) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const idx = items.indexOf(el);
            el.style.transitionDelay = `${idx * 100}ms`;
            el.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((it) => observer.observe(it));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hospoda-page">
      <div className="hero-section">
        <h1>Hostinec U Huška</h1>
        <p>Tradiční hospoda v Bělči nad Orlicí</p>
      </div>

      <div className="sections-container">
        {/* Sekce 1: O nás */}
        <section className="section-card">
          <div className="section-content">
            <h2>O Nás</h2>
            <p>
              Velice si vážíme návštěvníků našeho hostince i odběratelů a konzumentů našeho pěnivého moku, včetně těch budoucích.
            </p>
            <p>
              Našich webových stránek chceme využívat ke komunikaci s Vámi. Rádi bychom Vás informovali o všem, co se děje v našem hostinci i pivovaru, o všech novinkách i o tom, co pro Vás připravujeme.
            </p>
          </div>
          <div className="section-image">
            <div className="image-placeholder">
              <img src={`${process.env.PUBLIC_URL}/assets/img/tavern.jpg`} alt="Hospoda" />
            </div>
          </div>
        </section>

        {/* Sekce 2: Komunikace */}
        <section className="section-card reverse">
          <div className="section-image">
            <div className="image-placeholder">
              <img src={`${process.env.PUBLIC_URL}/assets/img/hospoda2.jpg`} alt="Komunikace" />
            </div>
          </div>
          <div className="section-content">
            <h2>Komunikujeme S Vámi</h2>
            <p>
              Zároveň budeme rádi, když bude komunikace obousměrná, takže využijte našich kontaktů pro rychlou odpověď na váš dotaz.
            </p>
            <p>
              Ke komunikaci s námi můžete využít:
            </p>
            <ul>
              <li><strong>Přímého kontaktu</strong> - pro rychlou reakci</li>
              <li><strong>E-mailu a telefonů</strong> - uvedených v kontaktech</li>
              <li><strong>Sociálních sítí</strong> - sledujte nás pro novinky</li>
            </ul>
            <p>
              Těšíme se na Vaši návštěvu nejen tady, na webových stránkách, ale i v našem hostinci s pivovarem v Bělči.
            </p>
          </div>
        </section>

        {/* Sekce 3: Pronájem prostoru */}
        <section className="section-card">
          <div className="section-content">
            <h2>Pronájem Pro Vaše Akce</h2>
            <p>
              Pokud přemýšlíte, kde uspořádat svatbu, firemní akci, malou či větší oslavu, zkuste to u nás!
            </p>
            <p>
              Rádi a kvalitně vám s tím pomůžeme. Naše hospoda je ideálním místem pro:
            </p>
            <ul>
              <li>Svatby a oslavy</li>
              <li>Firemní akce a setkání</li>
              <li>Rodinné oslavy a vycházky</li>
              <li>Privátní večery a porady</li>
            </ul>
            <p>
              Menší ochutnávku, jak může vaše akce vypadat, najdete v naší <strong>galerii</strong>.
            </p>
          </div>
          <div className="section-image">
            <div className="image-placeholder">
              <img src={`${process.env.PUBLIC_URL}/assets/img/hospoda3.jpg`} alt="Akce" />
            </div>
          </div>
        </section>

        {/* Sekce 4: Pivovar */}
        <section className="section-card reverse">
          <div className="section-image">
            <div className="image-placeholder">
              <img src={`${process.env.PUBLIC_URL}/assets/img/pivovar.jpg`} alt="Pivovar" />
            </div>
          </div>
          <div className="section-content">
            <h2>Náš Pivovar</h2>
            <p>
              Naší specialitou je výroba tradičního piva. Chutě generace chování hostince se odráží v každém skleničce našeho pěnivého moku.
            </p>
            <p>
              Používáme pouze ty nejkvalitnější suroviny a tradiční postupy vaření, aby mělo pivo ten pravý charakter.
            </p>
            <p>
              Přijďte si jej vychutnat přímo u nás, nebo si objednejte přesně podle vašich představ.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;