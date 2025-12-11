import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import "./MobileMenu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
      >
        {isOpen ? <IoClose size={35} /> : <IoMenu size={35} />}
      </button>

      {isOpen && <div className="overlay" onClick={closeMenu} />}

      <motion.div
        className="mobile-menu"
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav>
          <ul className="menu-list">
            <li>
              <Link to="/" onClick={closeMenu}>
                Úvod
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                O nás
              </Link>
            </li>
            <li>
              <Link to="/galerie" onClick={closeMenu}>
                Galerie
              </Link>
            </li>
            <li>
              <Link to="/kontakt" onClick={closeMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default MobileMenu;