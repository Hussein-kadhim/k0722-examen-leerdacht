"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger knop voor mobiel */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Navigatie links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link active">
              HOME
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#about" className="nav-link">
              ABOUT
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#services" className="nav-link">
              SERVICES <i className="fa-solid fa-chevron-down dropdown-icon"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="#construction" className="dropdown-item">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="#renovation" className="dropdown-item">
                  Renovation
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="dropdown-item">
                  Architecture
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="#projects" className="nav-link">
              PROJECTS <i className="fa-solid fa-chevron-down dropdown-icon"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="#featured" className="dropdown-item">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#commercial" className="dropdown-item">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="#residential" className="dropdown-item">
                  Residential
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="#news" className="nav-link">
              NEWS
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#contact" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Zoek icoontje */}
        <button className="search-btn" aria-label="Zoeken">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </nav>
  );
}
