// src/components/MyWork/MyWork.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import HudButton from "../ui/HudButton";
import { Slideshow, VideoTile } from "../ui/LayoutGrid";

const INITIAL_COUNT = 5;

const FILTERS = [
  { id: "all", label: "All", keys: null },
  {
    id: "web",
    label: "Web Apps",
    keys: ["E-commerce", "Marketplace", "Subscriptions", "LMS", "Dashboard", "Forms"],
  },
  { id: "next", label: "Next.js", keys: ["Next.js"] },
  { id: "react", label: "React", keys: ["React"] },
  {
    id: "uiux",
    label: "UI/UX",
    keys: ["Animation", "Parallax", "Branding", "Creative Studio", "3D", "Portfolio", "Agency", "Bento Grid"],
  },
  { id: "full", label: "Full Stack", keys: ["Node.js", "MongoDB", "Express"] },
];

// Rows alternate 2 then 3 cards across 6 columns; a short final row stretches
// its cards so no empty cells are left.
const columnSpans = (count) => {
  const spans = [];
  let row = 0;
  while (spans.length < count) {
    const perRow = Math.min(row % 2 === 0 ? 2 : 3, count - spans.length);
    for (let i = 0; i < perRow; i += 1) spans.push(6 / perRow);
    row += 1;
  }
  return spans;
};

const WorkCard = ({ work, to, displayNo, span }) => (
  <article className={`work-card is-span-${span}`}>
    <Link className="work-card__link" to={to} aria-label={`Open ${work.w_name}`}>
      <span className="work-card__media">
        <span className="work-card__no" aria-hidden="true">
          {String(displayNo).padStart(2, "0")}
        </span>
        {work.w_video ? (
          <VideoTile src={work.w_video} poster={work.w_img} alt={work.w_name} />
        ) : (
          <Slideshow
            images={work.w_images?.length ? work.w_images : [work.w_img]}
            alt={work.w_name}
            offset={displayNo}
          />
        )}
      </span>

      <span className="work-card__footer">
        <span className="work-card__text">
          <span className="work-card__title">{work.w_name}</span>
          {work.tags?.length > 0 && (
            <span className="work-card__meta">{work.tags.slice(0, 3).join(" • ")}</span>
          )}
        </span>
        <span className="work-card__arrow" aria-hidden="true">
          <FiArrowRight />
        </span>
      </span>
    </Link>
  </article>
);

const MyWork = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const active = FILTERS.find((f) => f.id === filter) ?? FILTERS[0];
    return mywork_data
      .map((work, index) => ({ work, index }))
      .filter(({ work }) =>
        active.keys ? active.keys.some((key) => work.tags?.includes(key)) : true
      );
  }, [filter]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > visible.length;
  const spans = columnSpans(visible.length);

  const selectFilter = (id) => {
    setFilter(id);
    setShowAll(false);
  };

  return (
    <section id="work" className="mywork" aria-label="My latest work">
      <div className="mywork-bg" aria-hidden="true" />

      <header className="mywork-head">
        <div className="mywork-head__main">
          <span className="mywork-tag">
            <i aria-hidden="true">{"//"}</i>
            <b>02</b>
            <span className="mywork-tag__dash" aria-hidden="true" />
            Featured projects
            <span className="mywork-tag__rule" aria-hidden="true" />
          </span>
          <h2>
            <span className="mywork-h-light">LATEST</span>{" "}
            <span className="mywork-h-neon" data-text="WORK">WORK</span>
          </h2>
          <p className="mywork-lead">
            A collection of selected projects showcasing real-world solutions,
            modern design and clean, scalable code.
          </p>
        </div>

        <div className="mywork-head__aside">
          <p className="mywork-note">
            From web applications to creative experiments, here are some of the
            projects I&apos;ve worked on recently.
          </p>

          <HudButton
            size="lg"
            icon={<FiArrowRight />}
            label={showAll ? "Show less" : "View all projects"}
            onClick={() => setShowAll((v) => !v)}
          />
        </div>
      </header>

      <div className="mywork-filters">
        <div className="mywork-filters__pills" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`mywork-filter ${filter === f.id ? "is-active" : ""}`}
              aria-pressed={filter === f.id}
              onClick={() => selectFilter(f.id)}
            >
              {filter === f.id && <span className="mywork-filter__dot" aria-hidden="true" />}
              {f.label}
            </button>
          ))}
        </div>
        <span className="mywork-filters__rule" aria-hidden="true" />
        <span className="mywork-filters__slash" aria-hidden="true">{"//"}</span>
      </div>

      <div className="mywork-grid">
        {visible.map(({ work, index }, position) => (
          <WorkCard
            key={index}
            work={work}
            to={`/work/${index}`}
            displayNo={position + 1}
            span={spans[position]}
          />
        ))}
      </div>

      {hasMore && (
        <HudButton
          label="Load more"
          aria-label="Show more projects"
          onClick={() => setShowAll(true)}
        />
      )}
    </section>
  );
};

export default MyWork;
