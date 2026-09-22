import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);

  function openMenu() {
    setActive(true);
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <header className="container-fluid px-4 px-md-5 py-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <i className="fa-solid fa-gear text-primary fs-1 me-2"></i>
        <div>
          <h3 className="fw-bold m-0 lh-1">ALTECO</h3>
          <p className="text-muted fw-bold mb-0">Business Template</p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <nav className={`navbar ${active ? "active" : ""}`}>
          <button className="close-menu" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>

          <ul className="d-flex list-unstyled gap-4 m-0 fw-bold menu-list">
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

        <div className="bg-light p-2 px-3">
          <a href="#" className="text-dark">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>

        <button className="hamburger" onClick={openMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {active && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Navbar;
