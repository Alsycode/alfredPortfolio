// src/components/MyWork/MyWork.jsx
import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <section id="work" className="mywork" aria-label="My latest work">
      <div className="title-box">
        <h2>My latest work</h2>
        <img src={theme_pattern} alt="" aria-hidden="true" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          const key = work.id ?? index;
          return (
            <Link
              to={`/work/${key}`}
              className="work-card-link"
              key={key}
              aria-label={`Open project ${work.w_name ?? `#${index + 1}`}`}
            >
              <article className="work-card">
                <figure>
                  <img
                    src={work.w_img}
                    alt={work.w_name ? `${work.w_name} — preview` : `project ${index + 1}`}
                    loading="lazy"
                    className="work-thumb"
                  />
                  <figcaption className="work-title">{work.w_name}</figcaption>
                </figure>
              </article>
            </Link>
          );
        })}
      </div>

      <button className="mywork-showmore" type="button" aria-label="Show more projects">
        <span>Show more</span>
        <img src={arrow_icon} alt="" aria-hidden="true" />
      </button>
    </section>
  );
};

export default MyWork;
