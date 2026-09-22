import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} ALTECO Business Template. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
