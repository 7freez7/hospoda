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
          <h1>Vítejte na stránkách ZUŠ Heřmanův Městec</h1>
          <p>
            Naše škola je zřízená jako příspěvková organizace městem Heřmanův
            Městec. Je zařazena do školského rejstříku.
          </p>
          <p>
            Své umělecké vzdělání poskytuje dětem v Heřmanově Městci a na
            dalších čtyřech pobočkách: v Prachovicích, Třemošnici, Ronově nad
            Doubravou a Seči.
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
            <h2>Hudební obor</h2>
            <p>
              Žáci v hudebním oboru poznávají hudbu mnoha žánrů. Samotný obor
              nabízí zaměření i na zpěv.
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
            <h2>Taneční Obor</h2>
            <p>
              Žácí ve výtvarném oboru nachází svůj motivační podnět k uměleckému
              vztahu ke světu a k sebe sama v něm.
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
            <h2>Výtvarný Obor</h2>
            <p>
              Žáci v tanečním oboru rozvíjí své prostorové, hudební a taneční
              cítění.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Uvod;
