import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-contact">
          <span className="topbar-email">
            <i className="fa-solid fa-envelope"></i>
            infoyoursite@mail.com
          </span>
          <span className="topbar-divider">|</span>
          <span>
            <i className="fa-solid fa-phone"></i>
            +77 000 453
          </span>
        </div>

        <div className="topbar-socials">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <span className="topbar-divider">|</span>
          <a href="#">
            <i className="fa-brands fa-google"></i>
          </a>
          <span className="topbar-divider">|</span>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        <a href="#" className="topbar-btn">
          GET A QUOTE &raquo;
        </a>
      </div>
    </div>
  );
}

export default TopBar;
