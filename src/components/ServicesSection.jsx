import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <p className="services-label">
            ELABORATED CODE AND CREATIVE DESIGN
          </p>
          <h2 className="services-title">OUR SERVICES</h2>

          <div className="services-dots">
            <span className="service-dot"></span>
            <span className="service-dot"></span>
            <span className="service-dot"></span>
          </div>

          <p className="services-intro">
            Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-icon-box">
              <i className="fa-solid fa-glass-water"></i>
            </div>
            <p className="services-label">
              TUTORIALS TO HELP
            </p>
            <h5 className="service-name">PROMOTION AGENCY</h5>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-icon-box">
              <i className="fa-solid fa-wrench"></i>
            </div>
            <p className="services-label">
              TUTORIALS TO HELP
            </p>
            <h5 className="service-name">CONSTRUCTIONS BUILDING</h5>
            <p className="service-desc">
              Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-icon-box">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <p className="services-label">
              TUTORIALS TO HELP
            </p>
            <h5 className="service-name">EDUCATION ONLINE</h5>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-icon-box">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </div>
            <p className="services-label">
              TUTORIALS TO HELP
            </p>
            <h5 className="service-name">FASHION DESIGN</h5>
            <p className="service-desc">
              Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
