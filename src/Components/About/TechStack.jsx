import React from "react";
import { motion } from "framer-motion";
import "./TechStack.css";
import HudFrame from "./HudFrame";
import { HudIndex } from "./HudDecoration";
import { techStack } from "./skillsData";
import { fadeIn, fadeUp, stagger } from "./hudMotion";

const TechStack = () => (
  <motion.div className="tech-stack" variants={fadeUp}>
    <HudFrame corner={26} cut={10} tone="magenta" className="tech-stack__frame">
      <div className="tech-stack__body">
        <div className="tech-stack__head">
          <HudIndex index="04" label="Tech Stack" className="tech-stack__index" />
          <motion.span className="tech-stack__meta" variants={fadeIn}>
            Tools I use to build, ship and iterate
            <i aria-hidden="true">✦</i>
          </motion.span>
        </div>

        <motion.ul className="tech-stack__list" variants={stagger(0.05, 0.05)}>
          {techStack.map(({ id, name, Icon, color }) => (
            <motion.li key={id} className="tech-stack__item" variants={fadeUp}>
              <span className="tech-stack__icon" style={{ "--tech-color": color }}>
                <Icon aria-hidden="true" />
              </span>
              <span className="tech-stack__name">{name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </HudFrame>
  </motion.div>
);

export default TechStack;
