import Link from "next/link";
import "./TopBar.css";

export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="top-bar-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="logo-bars">
            <span className="logo-bar logo-bar-1"></span>
            <span className="logo-bar logo-bar-2"></span>
            <span className="logo-bar logo-bar-3"></span>
            <span className="logo-bar logo-bar-4"></span>
          </div>
          <div className="logo-text">
            <span className="logo-title">
              Build<span className="logo-highlight">Icon</span>
            </span>
            <span className="logo-subtitle">CONSTRUCTION COMPANY</span>
          </div>
        </Link>

        {/* Contact info & quote button */}
        <div className="top-bar-info">
          <div className="info-item info-phone">
            <i className="fa-solid fa-mobile-screen-button info-icon"></i>
            <div className="info-text">
              <span className="info-label">CUSTOM SUPPORT & SALE</span>
              <a href="tel:+74951234567" className="info-value">
                +7-495-1234567
              </a>
            </div>
          </div>

          <div className="info-item info-working-time">
            <i className="fa-regular fa-clock info-icon"></i>
            <div className="info-text">
              <span className="info-label">WORKING TIME</span>
              <span className="info-value">MON-SAT: 08:00-18:00</span>
            </div>
          </div>

          <Link href="#quote" className="quote-btn">
            <i className="fa-solid fa-envelope"></i>
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}
