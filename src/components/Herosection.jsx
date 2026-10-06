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
    <section className={`hero ${slide === 1 ? "hero-bg-1" : "hero-bg-2"}`}>
      <button className="hero-arrow left" onClick={volgendeSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button className="hero-arrow right" onClick={volgendeSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="hero-container">
        {slide === 1 && (
          <div className="hero-row">
            <div className="hero-content">
              <div>
                <span className="hero-title-box">
                  Welcome to Our Company
                </span>
              </div>
              <div className="hero-subtitle-wrap">
                <span className="hero-subtitle-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <div className="hero-buttons">
                <a href="#" className="hero-btn">
                  SERVICES
                </a>
                <a href="#" className="hero-btn">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="hero-image-col">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Hero"
                className="hero-img"
              />
            </div>
          </div>
        )}

        {slide === 2 && (
          <div className="hero-row">
            <div className="hero-content">
              <div>
                <span className="hero-title-box">
                  Business YOUR SATISFICTION
                </span>
              </div>
              <div className="hero-subtitle-wrap">
                <span className="hero-subtitle-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <div className="hero-buttons">
                <a href="#" className="hero-btn">
                  LOGIN
                </a>
                <a href="#" className="hero-btn">
                  REGISTER
                </a>
              </div>
            </div>
            <div className="hero-image-col">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80"
                alt="Hero"
                className="hero-img"
              />
            </div>
          </div>
        )}

        <div className="hero-dots">
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
