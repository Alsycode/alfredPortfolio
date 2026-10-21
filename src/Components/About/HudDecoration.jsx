import React from "react";
import { motion } from "framer-motion";
import "./HudDecoration.css";
import { fadeIn, fadeUp } from "./hudMotion";

/** "// 01 ————————•" index rule that sits above the heading. */
export const HudIndex = ({ index = "01", label, className = "" }) => (
  <motion.div
    className={`hud-index ${className}`}
    variants={fadeUp}
    aria-hidden="true"
  >
    <span className="hud-index__slashes">{"//"}</span>
    <span className="hud-index__num">{index}</span>
    <span className="hud-index__rule" />
    {label ? (
      <span className="hud-index__label">{label}</span>
    ) : (
      <span className="hud-index__dot" />
    )}
  </motion.div>
);

/** Small angular chip with a status dot and stacked micro-copy. */
export const HudTag = ({ lines = [], className = "" }) => (
  <motion.div
    className={`hud-tag ${className}`}
    variants={fadeIn}
    aria-hidden="true"
  >
    <span className="hud-tag__dot" />
    <span className="hud-tag__lines">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </span>
  </motion.div>
);

/** Vertical segmented level meter. */
export const HudMeter = ({ segments = 14, active = 9, className = "" }) => (
  <motion.div
    className={`hud-meter ${className}`}
    variants={fadeIn}
    aria-hidden="true"
  >
    {Array.from({ length: segments }).map((_, i) => (
      <span
        key={i}
        className={`hud-meter__seg ${i >= segments - active ? "is-on" : ""}`}
        style={{ "--seg-i": i }}
      />
    ))}
    <span className="hud-meter__caret" />
  </motion.div>
);

/** 3 x 3 dot matrix used as a corner marker. */
export const HudDotGrid = ({ className = "" }) => (
  <motion.div
    className={`hud-dots ${className}`}
    variants={fadeIn}
    aria-hidden="true"
  >
    {Array.from({ length: 9 }).map((_, i) => (
      <span key={i} style={{ "--dot-i": i }} />
    ))}
  </motion.div>
);

/** Rotated edge label. */
export const HudVerticalLabel = ({ text, className = "" }) => (
  <motion.span
    className={`hud-vlabel ${className}`}
    variants={fadeIn}
    aria-hidden="true"
  >
    {text}
  </motion.span>
);

/** Thin diagonal "arrow" accent lines. */
export const HudArrow = ({ className = "" }) => (
  <motion.svg
    className={`hud-arrow ${className}`}
    viewBox="0 0 90 90"
    fill="none"
    variants={fadeIn}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="hud-arrow-a" x1="0" y1="100%" x2="100%" y2="0">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="hud-arrow-b" x1="0" y1="100%" x2="100%" y2="0">
        <stop offset="0%" stopColor="#ff8a3d" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ff3d8b" />
      </linearGradient>
    </defs>
    <path d="M2 88 L88 2" stroke="url(#hud-arrow-a)" strokeWidth="1.5" />
    <path d="M2 88 L52 30" stroke="url(#hud-arrow-b)" strokeWidth="2.5" />
    <path d="M2 88 L2 52" stroke="url(#hud-arrow-a)" strokeWidth="1.5" />
  </motion.svg>
);

/** Ticked rule used inside panel headers. */
export const HudTicks = ({ count = 6, className = "" }) => (
  <span className={`hud-ticks ${className}`} aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} />
    ))}
  </span>
);
