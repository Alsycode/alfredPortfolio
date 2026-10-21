import React from "react";
import { motion } from "framer-motion";
import "./SkillsPanel.css";
import HudFrame from "./HudFrame";
import SkillRow from "./SkillRow";
import { HudTicks } from "./HudDecoration";
import { skills } from "./skillsData";
import { fadeUp, stagger } from "./hudMotion";

const SkillsPanel = () => (
  <motion.div className="skills-panel" variants={fadeUp}>
    <HudFrame corner={26} cut={10} tone="magenta" className="skills-panel__frame">
      <div className="skills-panel__body">
        <div className="skills-panel__head">
          <span className="skills-panel__title">
            <span className="skills-panel__slashes">{"//"}</span> Skills
          </span>
          <HudTicks count={7} className="skills-panel__ticks" />
          <span className="skills-panel__meta">
            Develop <i>/</i> Design <i>/</i> Iterate
          </span>
        </div>

        <motion.ul className="skills-panel__list" variants={stagger(0.1, 0.05)}>
          {skills.map((skill, index) => (
            <SkillRow key={skill.id} skill={skill} index={index} />
          ))}
        </motion.ul>
      </div>
    </HudFrame>
  </motion.div>
);

export default SkillsPanel;
