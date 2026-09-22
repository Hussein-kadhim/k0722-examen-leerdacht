import { useState, useEffect } from "react";
import "./Herosection.css";

function Herosection() {
  const [slide, setSlide] = useState(1);

  function volgendeSlide() {
    setSlide(slide === 1 ? 2 : 1);
  }

  useEffect(() => {
    const timer = setInterval(volgendeSlide, 4000);
    return () => clearInterval(timer);
  }, [slide]);

  return (
    <section className={`position-relative text-white ${slide === 1 ? "hero-bg-1" : "hero-bg-2"}`}>
      <button className="hero-arrow left" onClick={volgendeSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button className="hero-arrow right" onClick={volgendeSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="container-fluid px-4 px-md-5">
        {slide === 1 && (
          <div className="row align-items-center py-5">
            <div className="col-md-6">
              <div>
                <span className="bg-primary text-white display-6 fw-bold px-4 py-3 d-inline-block">
                  Welcome to Our Company
                </span>
              </div>
              <div className="mt-3">
                <span className="bg-black text-white fs-5 fw-bold px-4 py-2 d-inline-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="btn btn-outline-light rounded-0 px-5 py-3 fw-bold text-uppercase">
                  SERVICES
                </a>
                <a href="#" className="btn btn-outline-light rounded-0 px-5 py-3 fw-bold text-uppercase">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Hero"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        )}

        {slide === 2 && (
          <div className="row align-items-center py-5">
            <div className="col-md-6">
              <div>
                <span className="bg-primary text-white display-6 fw-bold px-4 py-3 d-inline-block">
                  Business YOUR SATISFICTION
                </span>
              </div>
              <div className="mt-3">
                <span className="bg-black text-white fs-5 fw-bold px-4 py-2 d-inline-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="btn btn-outline-light rounded-0 px-5 py-3 fw-bold text-uppercase">
                  LOGIN
                </a>
                <a href="#" className="btn btn-outline-light rounded-0 px-5 py-3 fw-bold text-uppercase">
                  REGISTER
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80"
                alt="Hero"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        )}

        <div className="d-flex justify-content-center gap-3 pb-4">
          <span
            className={slide === 1 ? "hero-dot active" : "hero-dot"}
            onClick={() => setSlide(1)}
          ></span>
          <span
            className={slide === 2 ? "hero-dot active" : "hero-dot"}
            onClick={() => setSlide(2)}
          ></span>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
