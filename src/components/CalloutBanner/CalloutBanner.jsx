import Link from "next/link";
import "./CalloutBanner.css";

export default function CalloutBanner() {
  return (
    <section className="callout-banner">
      <div className="callout-container">
        <div className="callout-text-group">
          <h2 className="callout-heading">We Are BuildWall</h2>
          <p className="callout-description">
            We have been transforming the ideas and visions into award-winning projects.
          </p>
        </div>

        <Link href="#quote" className="callout-btn">
          <i className="fa-solid fa-envelope"></i>
          REQUEST A QUOTE
        </Link>
      </div>
    </section>
  );
}
