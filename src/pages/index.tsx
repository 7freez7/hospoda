import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link pro navigaci
import ZusHM from "../../public/assets/img/artt.jpg";

import hudbaIco from "../../public/assets/icons/music.svg";
import balletIco from "../../public/assets/icons/ballet.svg";
import palleteIco from "../../public/assets/icons/artpallete.svg";

import beerIco from "../../public/assets/icons/beer.svg";
import beerIco2 from "../../public/assets/icons/beer-mug.svg";




const Uvod = () => {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".obor-druh, .section-card")) as HTMLElement[];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          const idx = items.indexOf(el);
          const safeIdx = idx < 0 ? 0 : idx;
          el.style.transitionDelay = `${Math.min(safeIdx, 12) * 80}ms`;
          el.classList.add("in-view");
        } else {
          // pokud chceš, aby se animace opakovala při scrollnutí zpět nahoru, odkomentuj:
          el.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((it) => observer.observe(it));
  return () => observer.disconnect();
}, []);

  return (
    <div>
      <div className="headerImage">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/tavern.jpg`}
          alt="mainImg"
        />
        <div className="Description">
          <h1>Hostinec U Hušků</h1>
          <p>
            Tradiční hospoda v Bělči nad Orlicí s výborným pivem a skvělou
            kuchyní.
          </p>
        </div>
      </div>

      <div className="obor-container">
        <div className="obor-druh">
          <Link to="/obory/hudebni">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/beer.svg`}
              alt="Beer"
              className="img"
            />
            <h2>Náš Pivovar</h2>
            <p>
              Naší specialitou je výroba tradičního piva. Chutě generace chování hostince se odráží v každém skleničce našeho pěnivého moku.
            </p>
          </Link>
        </div>

        <div className="obor-druh">
          <Link to="/obory/tanecni">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/about-us.svg`}
              alt="Dance"
              className="img"
            />
            <h2>O Nás</h2>
            <p>
              Velice si vážíme návštěvníků našeho hostince i odběratelů a konzumentů našeho pěnivého moku, včetně těch budoucích.
            </p>
          </Link>
        </div>

        <div className="obor-druh">
          <Link to="/obory/vytvarni">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/communication.svg`}
              alt="Art"
              className="img"
            />
            <h2>Komunikujeme S Vámi</h2>
            <p>
              Zároveň budeme rádi, když bude komunikace obousměrná, takže využijte našich kontaktů pro rychlou odpověď na váš dotaz.
            </p>
          </Link>
        </div>
      </div>

      <div className="sections-container">
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

export default Uvod;
