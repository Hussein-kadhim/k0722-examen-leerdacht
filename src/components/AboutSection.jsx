import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="py-5 overflow-hidden">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 p-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="About us"
            className="img-fluid w-100 about-img"
          />
        </div>

        <div className="col-lg-6 px-4 px-md-5 py-4">
          <p className="text-primary fw-bold text-uppercase small mb-2">
            ELABORATED CODE AND CREATIVE DESIGN
          </p>
          <h1 className="fw-bold mb-3 display-5">WHAT WE OFFERS</h1>

          <div className="border-start border-primary border-3 ps-3 mb-4 text-muted fst-italic">
            <p className="mb-1">
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsuy veli.
            </p>
            <p className="mb-0">
              Nam nec tellus a odio tincidunt auctor
            </p>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <i className="fa-solid fa-chess-knight fs-1 text-secondary mb-3"></i>
              <h4 className="fw-bold">Clean Modern Code</h4>
              <p className="text-muted">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...
              </p>
              <a href="#" className="text-decoration-none fw-bold text-dark">
                READ MORE &raquo;
              </a>
            </div>

            <div className="col-md-6">
              <i className="fa-solid fa-shield-halved fs-1 text-secondary mb-3"></i>
              <h4 className="fw-bold">Design To Brag About</h4>
              <p className="text-muted">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...
              </p>
              <a href="#" className="text-decoration-none fw-bold text-dark">
                READ MORE &raquo;
              </a>
            </div>
          </div>

          <a href="#" className="btn btn-dark rounded-0 px-5 py-3 fw-bold text-uppercase">
            VIEW ALL OFFERS &raquo;
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
