"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./HeroSection.css";

const slides = [
  {
    type: "worker",
    badge: "HIGH QUALITY GARANTIED",
    title: "Constructing Is Our Life Business",
    image: "/images/slide-worker.jpg",
    buttonServices: "OUR SERVICES",
    buttonAbout: "ABOUT US",
  },
  {
    type: "center",
    title: "We Construct Your Seccess",
    subtitle: "Providing all kind of construction services",
    image: "/images/slide-1.jpg",
    buttonText: "OUR SERVICES",
    buttonLink: "#services",
  },
  {
    type: "card",
    badge: "HIGH QUALITY GARANTIED",
    title: "WE'RE READY TO BRING THE MOSTCOMPLEX PROJECTS TO LIFE",
    description:
      "Our skilled team of engineers, designers and workers will create a project for your needs and ensure that the result will become unsurpassed!",
    image: "/images/slide-2.jpg",
    buttonServices: "OUR SERVICES",
    buttonAbout: "ABOUT US",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      className={`hero-section hero-slide-${slide.type}`}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay afhankelijk van type slide */}
      {slide.type === "worker" && <div className="hero-worker-overlay"></div>}
      {slide.type === "center" && <div className="hero-center-overlay"></div>}

      {/* Navigatie pijlen links en rechts */}
      <button
        onClick={prevSlide}
        className="hero-arrow hero-arrow-prev"
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button
        onClick={nextSlide}
        className="hero-arrow hero-arrow-next"
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
{/* slide 1 */}
      <div className="hero-container">
        {slide.type === "worker" && (
          <div className="hero-worker-content">
            <div className="hero-worker-accent"></div>
            <span className="hero-worker-subtitle">{slide.badge}</span>
            <h1 className="hero-worker-title">{slide.title}</h1>
            <div className="hero-worker-buttons">
              <Link href="#services" className="hero-btn-amber">
                {slide.buttonServices}
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
              <Link href="#about" className="hero-btn-dark">
                {slide.buttonAbout}
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        )}
        {/* slide 2 */}
        {slide.type === "center" && (
          <div className="hero-center-content">
            <h1 className="hero-center-title">{slide.title}</h1>
            <p className="hero-center-subtitle">{slide.subtitle}</p>
            <Link href={slide.buttonLink} className="hero-btn-amber">
              {slide.buttonText}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        )}
        {/* slide 3 */}
        {slide.type === "card" && (
          <div className="hero-card">
            <div className="hero-card-header">{slide.badge}</div>
            <div className="hero-card-body">
              <h2 className="hero-card-title">{slide.title}</h2>
              <div className="hero-card-accent"></div>
              <p className="hero-card-desc">{slide.description}</p>
              <div className="hero-card-buttons">
                <Link href="#services" className="hero-btn-amber">
                  {slide.buttonServices}
                  <i className="fa-solid fa-chevron-right"></i>
                </Link>
                <Link href="#about" className="hero-btn-amber">
                  {slide.buttonAbout}
                  <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
