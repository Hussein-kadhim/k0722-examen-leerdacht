import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-md-5">
        <div className="text-center mb-5">
          <p className="text-primary fw-bold text-uppercase small mb-2">
            ELABORATED CODE AND CREATIVE DESIGN
          </p>
          <h2 className="fw-bold display-6 mb-3">OUR SERVICES</h2>

          <div className="d-flex justify-content-center gap-1 mb-3">
            <span className="bg-secondary opacity-50 d-inline-block service-dot"></span>
            <span className="bg-secondary opacity-50 d-inline-block service-dot"></span>
            <span className="bg-secondary opacity-50 d-inline-block service-dot"></span>
          </div>

          <p className="text-muted mx-auto services-intro">
            Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-4 service-icon-box">
              <i className="fa-solid fa-glass-water fs-2"></i>
            </div>
            <p className="text-primary fw-bold text-uppercase small mb-2">
              TUTORIALS TO HELP
            </p>
            <h5 className="fw-bold text-uppercase mb-3">PROMOTION AGENCY</h5>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-4 service-icon-box">
              <i className="fa-solid fa-wrench fs-2"></i>
            </div>
            <p className="text-primary fw-bold text-uppercase small mb-2">
              TUTORIALS TO HELP
            </p>
            <h5 className="fw-bold text-uppercase mb-3">CONSTRUCTIONS BUILDING</h5>
            <p className="text-muted small">
              Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-4 service-icon-box">
              <i className="fa-solid fa-book-open fs-2"></i>
            </div>
            <p className="text-primary fw-bold text-uppercase small mb-2">
              TUTORIALS TO HELP
            </p>
            <h5 className="fw-bold text-uppercase mb-3">EDUCATION ONLINE</h5>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-4 service-icon-box">
              <i className="fa-solid fa-arrow-trend-up fs-2"></i>
            </div>
            <p className="text-primary fw-bold text-uppercase small mb-2">
              TUTORIALS TO HELP
            </p>
            <h5 className="fw-bold text-uppercase mb-3">FASHION DESIGN</h5>
            <p className="text-muted small">
              Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
