import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link pro navigaci
import ZusHM from "../../public/assets/img/artt.jpg";

import Art from "../../public/assets/img/Art.jpg";
import Dance from "../../public/assets/img/Dance.jpg";
import Hudba from "../../public/assets/img/Hudba.jpg";

import hudbaIco from "../../public/assets/icons/music.svg";
import balletIco from "../../public/assets/icons/ballet.svg";
import palleteIco from "../../public/assets/icons/artpallete.svg";

const Uvod = () => {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".obor-druh")) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // stagger podle pořadí v DOMu
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
              src={`${process.env.PUBLIC_URL}/assets/icons/music.svg`}
              alt="Hudba"
              className="img"
            />
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
          </Link>
        </div>

        <div className="obor-druh">
          <Link to="/obory/tanecni">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/ballet.svg`}
              alt="Dance"
              className="img"
            />
            <h2>O Nás</h2>
            <p>
              Velice si vážíme návštěvníků našeho hostince i odběratelů a konzumentů našeho pěnivého moku, včetně těch budoucích.
            </p>
            <p>
              Našich webových stránek chceme využívat ke komunikaci s Vámi. Rádi bychom Vás informovali o všem, co se děje v našem hostinci i pivovaru, o všech novinkách i o tom, co pro Vás připravujeme.
            </p>
          </Link>
        </div>

        <div className="obor-druh">
          <Link to="/obory/vytvarni">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/artpallete.svg`}
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
    </div>
  );
};

export default Uvod;
