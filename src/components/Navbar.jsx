import { useState, useEffect, useCallback } from "react";
import "./Navbar.css";

function useScrollPosition(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrolled;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Navbar() {
  const [active, setActive] = useState(false);
  const scrolled = useScrollPosition(50);

  function openMenu() {
    setActive(true);
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <>
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">
          <i className="fa-solid fa-gear navbar-logo-icon"></i>
          <div>
            <h3 className="navbar-logo-title">ALTECO</h3>
            <p className="navbar-logo-sub">Business Template</p>
          </div>
        </div>

        <div className="navbar-right">
          <nav className={`navbar ${active ? "active" : ""}`}>
            <button className="close-menu" onClick={closeMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <ul className="menu-list">
              <li>
                <a href="#" className="navbar-link" onClick={closeMenu}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link" onClick={closeMenu}>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link" onClick={closeMenu}>
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link" onClick={closeMenu}>
                  PAGES
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link" onClick={closeMenu}>
                  SHOP
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link" onClick={closeMenu}>
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link" onClick={closeMenu}>
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar-search">
            <a href="#">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>

          <button className="hamburger" onClick={openMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {active && <div className="overlay" onClick={closeMenu}></div>}
      </header>

      {scrolled && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default Navbar;
