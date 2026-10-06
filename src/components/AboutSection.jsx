import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 p-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="About us"
            className="about-img"
          />
        </div>

        <div className="col-lg-6 about-text">
          <p className="about-label">
            ELABORATED CODE AND CREATIVE DESIGN
          </p>
          <h1 className="about-title">WHAT WE OFFERS</h1>

          <div className="about-quote">
            <p>
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsuy veli.
            </p>
            <p>
              Nam nec tellus a odio tincidunt auctor
            </p>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <i className="fa-solid fa-chess-knight about-icon"></i>
              <h4 className="fw-bold">Clean Modern Code</h4>
              <p className="text-muted">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...
              </p>
              <a href="#" className="about-readmore">
                READ MORE &raquo;
              </a>
            </div>

            <div className="col-md-6">
              <i className="fa-solid fa-shield-halved about-icon"></i>
              <h4 className="fw-bold">Design To Brag About</h4>
              <p className="text-muted">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...
              </p>
              <a href="#" className="about-readmore">
                READ MORE &raquo;
              </a>
            </div>
          </div>

          <a href="#" className="about-btn">
            VIEW ALL OFFERS &raquo;
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
