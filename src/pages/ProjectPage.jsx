// src/pages/ProjectPage.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mywork_data from "../assets/mywork_data";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // find project by id (id might be numeric string or index fallback)
  const project = useMemo(() => {
    // try numeric index
    const numeric = Number(id);
    const foundById = mywork_data.find((w) => (w.id ?? "").toString() === id);
    if (foundById) return foundById;
    if (!Number.isNaN(numeric) && mywork_data[numeric]) return mywork_data[numeric];
    // fallback to first if not found
    return mywork_data[0] ?? null;
  }, [id]);

  const images = project?.w_images ?? (project?.w_img ? [project.w_img] : []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0); // reset when project changes
  }, [project]);

  // keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, navigate]);

  if (!project) return <div className="project-page">Project not found</div>;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <main className="project-page">
      <div className="project-top">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          ← Back
        </button>
      </div>

      <section className="project-grid">
        <div className="carousel">
          <div className="carousel-viewport">
            <img
              src={images[index]}
              alt={`${project.w_name ?? "Project"} screenshot ${index + 1}`}
              className="carousel-image"
              loading="lazy"
            />
          </div>

          {images.length > 1 && (
            <>
              <button className="carousel-prev" onClick={prev} aria-label="Previous image">
                ‹
              </button>
              <button className="carousel-next" onClick={next} aria-label="Next image">
                ›
              </button>

              <div className="carousel-dots" role="tablist" aria-label="Image thumbnails">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === index ? "active" : ""}`}
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="project-info">
          <h1 className="project-title">{project.w_name}</h1>
          <p className="project-desc">{project.w_description ?? "No description provided."}</p>

          {project.tags && (
            <div className="project-tags">
              {project.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="project-links">
            {project.live && (
              <a className="btn primary" href={project.live} target="_blank" rel="noreferrer">
                View live
              </a>
            )}
            {project.code && (
              <a className="btn outline" href={project.code} target="_blank" rel="noreferrer">
                View code
              </a>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default ProjectPage;
