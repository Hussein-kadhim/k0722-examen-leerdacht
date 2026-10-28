import Link from "next/link";
import "./WhoWeAre.css";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    title: "CONSTRUCTION",
    description: "We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.",
    link: "#construction",
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    title: "ABOUT US",
    description: "BuildWall is completely client-oriented company. We are able meet schedule deadlines with top quality.",
    link: "#about",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: "EFFECTIVE TEAMWORK",
    description: "We have a very good team-based and team-work attitude, working together to find the best solutions.",
    link: "#teamwork",
  },
];

export default function WhoWeAre() {
  return (
    <section className="who-we-are" id="about">
      <div className="who-we-are-container">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="feature-card">
              <div className="card-image-wrapper">
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                />
              </div>

              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <div className="card-accent"></div>
                <p className="card-text">{card.description}</p>
                <Link href={card.link} className="card-link">
                  LEARN MORE
                  <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
