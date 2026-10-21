import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import CyberPortrait from "./CyberPortrait";
import AboutContent from "./AboutContent";
import SkillsPanel from "./SkillsPanel";
import { HudDotGrid, HudIndex, HudVerticalLabel } from "./HudDecoration";
import { stagger, viewportOnce } from "./hudMotion";

const About = () => (
  <motion.section
    id="about"
    className="about"
    aria-labelledby="about-heading"
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    variants={stagger(0.12)}
  >
    <span className="about__bg" aria-hidden="true" />

    <div className="about__inner">
      <HudIndex index="03" label="About Me" className="about__index" />

      <div className="about__grid">
        <CyberPortrait />

        <div className="about__column">
          <AboutContent />
        </div>

        <SkillsPanel />
      </div>
    </div>

    <HudVerticalLabel text="Expertise" className="about__vlabel" />
    <HudDotGrid className="about__dots" />
  </motion.section>
);

export default About;
