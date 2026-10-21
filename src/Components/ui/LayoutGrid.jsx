import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./LayoutGrid.css";

// JSX/plain-CSS port of the 21st.dev "LayoutGrid" (no Tailwind / next/image).
// Each card: { id, className, thumbnail, title, index, content }.
// Differences from the original: the expanded card is a fixed, viewport-centred
// modal (so it's always on screen in a tall grid), it locks page scroll, closes
// on Esc / backdrop / close button, and cards show a caption.
const SLIDE_MS = 3200;

// Autoplaying crossfade. Start is staggered per card so tiles don't flip in
// unison; pauses while the tab is hidden and honours reduced-motion.
export const Slideshow = ({ images, alt, offset = 0 }) => {
  const [active, setActive] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count < 2) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        if (!document.hidden) setActive((i) => (i + 1) % count);
      }, SLIDE_MS);
    }, (offset % 4) * 700);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [count, offset]);

  return (
    <>
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={i === 0 ? alt : ""}
          loading={i === 0 ? "eager" : "lazy"}
          className={`lg-img ${i === active ? "is-active" : ""}`}
        />
      ))}
      {count > 1 && (
        <div className="lg-dots" aria-hidden="true">
          {images.map((_, i) => (
            <span key={i} className={i === active ? "is-active" : ""} />
          ))}
        </div>
      )}
    </>
  );
};

// Muted looping video tile. Only plays while on screen (saves CPU/battery);
// the thumbnail is the poster, so it also covers slow loads and reduced-motion.
export const VideoTile = ({ src, poster, alt }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className="lg-img is-active"
      src={src}
      poster={poster}
      aria-label={alt}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
};

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <div className="lg-grid">
      {cards.map((card) => {
        const isSelected = selected?.id === card.id;
        return (
          <div key={card.id} className={`lg-cell ${card.className || ""}`}>
            <motion.div
              layoutId={`card-${card.id}`}
              className={`lg-card ${isSelected ? "is-selected" : ""}`}
              onClick={() => !isSelected && setSelected(card)}
              role="button"
              tabIndex={isSelected ? -1 : 0}
              aria-label={`Open ${card.title}`}
              onKeyDown={(e) => {
                if (!isSelected && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setSelected(card);
                }
              }}
            >
              <motion.div
                layoutId={`image-${card.id}-image`}
                className="lg-slides"
              >
                {card.video ? (
                  <VideoTile src={card.video} poster={card.thumbnail} alt={card.title} />
                ) : (
                  <Slideshow
                    images={card.images?.length ? card.images : [card.thumbnail]}
                    alt={card.title}
                    offset={card.index}
                  />
                )}
              </motion.div>

              {!isSelected && (
                <div className="lg-caption">
                  <span className="lg-caption__no">
                    {String(card.index + 1).padStart(2, "0")}
                  </span>
                  <span className="lg-caption__name">{card.title}</span>
                </div>
              )}

              {isSelected && (
                <div className="lg-selected">
                  <motion.div
                    className="lg-selected__shade"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                  <button
                    type="button"
                    className="lg-close"
                    aria-label="Close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(null);
                    }}
                  >
                    ✕
                  </button>
                  <motion.div
                    className="lg-selected__content"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {card.content}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        );
      })}

      <AnimatePresence>
        {selected && (
          <motion.div
            key="lg-backdrop"
            className="lg-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LayoutGrid;
