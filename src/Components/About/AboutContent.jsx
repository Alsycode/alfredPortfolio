import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { aboutParagraphs, stats } from "./skillsData";
import { fadeIn, fadeUp, stagger } from "./hudMotion";

const AboutContent = () => (
  <motion.div className="about-content" variants={stagger(0.1)}>
    <motion.span className="about-eyebrow" variants={fadeIn}>
      <span className="about-eyebrow__dot" aria-hidden="true" />
      Get to know me
    </motion.span>

    <motion.h2 id="about-heading" className="about-heading" variants={fadeUp}>
      <span className="about-heading__word">ABOUT</span>
      <span className="about-heading__me" data-text="ME">
        ME
      </span>
    </motion.h2>

    <div className="about-content__copy">
      {aboutParagraphs.map((paragraph) => (
        <motion.p key={paragraph.slice(0, 24)} variants={fadeUp}>
          {paragraph}
        </motion.p>
      ))}
    </div>

    <motion.ul className="about-stats" variants={stagger(0.1, 0.05)}>
      {stats.map(({ id, value, label, Icon }) => (
        <motion.li key={id} className="about-stat" variants={fadeUp}>
          <span className="about-stat__icon">
            <Icon aria-hidden="true" />
          </span>
          <span className="about-stat__value">{value}</span>
          <span className="about-stat__label">
            {label.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </motion.li>
      ))}
    </motion.ul>

    <motion.a
      className="about-cv"
      href="/resume-alf.pdf"
      download="Alfred-Shyam-Resume.pdf"
      variants={fadeUp}
    >
      <FiDownload className="about-cv__icon" aria-hidden="true" />
      <span className="about-cv__text">Download CV</span>
      <span className="about-cv__arrow" aria-hidden="true">
        <FiArrowRight />
      </span>
    </motion.a>
  </motion.div>
);

export default AboutContent;
