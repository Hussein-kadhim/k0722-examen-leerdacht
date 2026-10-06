import "./OffersSection.css";

function OffersSection() {
  return (
    <section className="offers-section">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 p-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="What we offer"
            className="offers-img"
          />
        </div>

        <div className="col-lg-6 offers-text">
          <p className="offers-label">
            ELABORATED CODE AND CREATIVE DESIGN
          </p>
          <h1 className="offers-title">WHAT WE OFFERS</h1>

          <div className="offers-quote">
            <p>
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsuy veli.
            </p>
            <p>
              Nam nec tellus a odio tincidunt auctor
            </p>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <i className="fa-solid fa-chess-knight offers-icon"></i>
              <h4 className="fw-bold">Clean Modern Code</h4>
              <p className="text-muted">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...
              </p>
              <a href="#" className="offers-readmore">
                READ MORE &raquo;
              </a>
            </div>

            <div className="col-md-6">
              <i className="fa-solid fa-shield-halved offers-icon"></i>
              <h4 className="fw-bold">Design To Brag About</h4>
              <p className="text-muted">
                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...
              </p>
              <a href="#" className="offers-readmore">
                READ MORE &raquo;
              </a>
            </div>
          </div>

          <a href="#" className="offers-btn">
            VIEW ALL OFFERS &raquo;
          </a>
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
