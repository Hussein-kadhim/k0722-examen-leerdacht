"use client";

import { useState } from "react";
import Link from "next/link";
import "./FeaturedProjects.css";

const projectsData = [
  {
    id: 1,
    title: "Luxury Palm Villa",
    category: "BUILDING",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    description: "Modern architectural villa with perimeter infinity pool, open-concept floor plan, and sustainable natural materials.",
  },
  {
    id: 2,
    title: "Shreveport, Bossier City",
    category: "BUILDING",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    description: "This luxury resort and senior independent living facility with a fitness center, pool, spa, sauna, hair salon, classroom space and...",
  },
  {
    id: 3,
    title: "Coastal Seaside Residence",
    category: "BUILDING",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "Breathtaking beachfront architectural marvel featuring panoramic sea views, cantilevered terraces, and high-durability finishes.",
  },
  {
    id: 4,
    title: "Minimalist Modern Facade",
    category: "CONSULTING",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Architectural consultation and structural engineering for clean geometric lines, acoustic isolation, and natural ventilation.",
  },
  {
    id: 5,
    title: "Timber Loft & Interior Living",
    category: "INTERIOR",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    description: "Warm Nordic timber accents combined with custom cabinetry, integrated ambient lighting, and bespoke minimalist styling.",
  },
  {
    id: 6,
    title: "Commercial Center Pavilion",
    category: "OFFICE",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    description: "An expansive private campus with outdoor pavilion, collaborative open workspaces, and landscaped drought-tolerant greenery.",
  },
];

const categories = ["ALL", "BUILDING", "CONSULTING", "INTERIOR", "OFFICE"];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleProjects, setVisibleProjects] = useState(projectsData);

  function filterProjects(selectedCategory) {
    setActiveCategory(selectedCategory);

    if (selectedCategory === "ALL") {
      setVisibleProjects(projectsData);
    } else {
      const filtered = projectsData.filter(
        (project) => project.category.toUpperCase() === selectedCategory.toUpperCase()
      );
      setVisibleProjects(filtered);
    }
  }

  return (
    <section className="featured-projects" id="projects">
      <h2 className="projects-title">FEATURED PROJECTS</h2>

      {/* Category filter buttons */}
      <div className="filter-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => filterProjects(cat)}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <div key={project.id} className="project-item">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />

            <div className="project-overlay">
              <div className="project-overlay-content">
                <h4 className="project-item-title">{project.title}</h4>
                <p className="project-item-desc">{project.description}</p>
                <Link href="#learn-more" className="project-learn-link">
                  LEARN MORE
                  <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
