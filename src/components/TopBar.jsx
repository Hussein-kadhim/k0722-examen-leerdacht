import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="container-fluid px-4 px-md-5 d-flex flex-wrap justify-content-center justify-content-md-end align-items-center gap-3">
        <div className="d-flex align-items-center gap-3">
          <span className="d-none d-sm-inline">
            <i className="fa-solid fa-envelope me-2"></i>
            infoyoursite@mail.com
          </span>
          <span className="text-secondary d-none d-sm-inline">|</span>
          <span>
            <i className="fa-solid fa-phone me-2"></i>
            +77 000 453
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <span className="text-secondary">|</span>
          <a href="#">
            <i className="fa-brands fa-google"></i>
          </a>
          <span className="text-secondary">|</span>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        <a
          href="#"
          className="btn btn-primary btn-sm rounded-pill px-3 py-2 fw-bold topbar-btn"
        >
          GET A QUOTE &raquo;
        </a>
      </div>
    </div>
  );
}

export default TopBar;
