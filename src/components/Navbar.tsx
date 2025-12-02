import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import "./navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDropdownMouseEnter = (dropdown: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); // ⬅ ZDE NASTAVÍŠ PRODLEVU ZAVŘENÍ
    setTimeoutId(id);
  };

  return (
    <div className="Link">
      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className="Logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/home.svg`} alt="logo" />
          </Link>
        </div>
      )}

      {!isMobile && (
        <div className="currentLink">
          {/* Úvod */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => handleDropdownMouseEnter("uvod")}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <Link to="/">Úvod*</Link>
            {activeDropdown === "uvod" && (
              <ul className="dropdown">
                <li><Link to="/uvod/about">O škole</Link></li>
                <li><Link to="/uvod/soucasnost">Současnost</Link></li>
              </ul>
            )}
          </div>

          {/* Obory */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => handleDropdownMouseEnter("obory")}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <Link to="/obory">Obory*</Link>
            {activeDropdown === "obory" && (
              <ul className="dropdown">
                <li><Link to="/obory/hudebni">Hudební Obor</Link></li>
                <li><Link to="/obory/tanecni">Taneční Obor</Link></li>
                <li><Link to="/obory/vytvarni">Výtvarný Obor</Link></li>
              </ul>
            )}
          </div>

          {/* Galerie */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => handleDropdownMouseEnter("galerie")}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <Link to="#">Galerie*</Link>
            {activeDropdown === "galerie" && (
              <ul className="dropdown">
                <li><Link to="/galerie/foto">Fotky</Link></li>
                <li><Link to="/galerie/video">Videa</Link></li>
              </ul>
            )}
          </div>

          <Link to="/kontakt">Kontakt</Link>
          <Link to="/uvod/about">O nás</Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;
