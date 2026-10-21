import React from "react";
import { motion } from "framer-motion";
import "./CyberPortrait.css";
import HudFrame from "./HudFrame";
import { HudMeter, HudArrow } from "./HudDecoration";
import { fadeIn, fadeUp, slideLeft, stagger, drawArm } from "./hudMotion";
import portrait from "../../assets/profile-cyber.webp";

const CORNERS = ["tl", "tr", "bl", "br"];

const CyberPortrait = () => (
  <motion.figure className="cyber-portrait" variants={stagger(0.1)}>
    <motion.figcaption className="cyber-portrait__eyebrow" variants={slideLeft}>
      Full Stack{" "}
      <br />
      Developer{" "}
      <br />
      <span className="cyber-portrait__eyebrow-slash">{"//"}</span>
      <br />
      Creative{" "}
      <br />
      Problem Solver
    </motion.figcaption>

    <HudMeter className="cyber-portrait__meter" segments={14} active={9} />
    <HudArrow className="cyber-portrait__arrow" />

    <motion.div className="cyber-portrait__frame" variants={fadeIn}>
      <HudFrame corner={38} cut={14} tone="magenta" className="cyber-portrait__hud">
        <span className="cyber-portrait__media">
          <img
            src={portrait}
            alt="Alfred Shyam, full stack developer, smiling in a neon-lit room"
            loading="lazy"
            width="992"
            height="1468"
          />
          <span className="cyber-portrait__tint" aria-hidden="true" />
          <span className="cyber-portrait__scan" aria-hidden="true" />
          <span className="cyber-portrait__grain" aria-hidden="true" />
        </span>
      </HudFrame>

      {CORNERS.map((corner) => (
        <span key={corner} className={`cp-bracket cp-bracket--${corner}`} aria-hidden="true">
          <motion.i className="cp-bracket__h" variants={drawArm("x")} />
          <motion.i className="cp-bracket__v" variants={drawArm("y")} />
        </span>
      ))}

      <span className="cyber-portrait__mark cyber-portrait__mark--slash" aria-hidden="true">
        {"//"}
      </span>
      <span className="cyber-portrait__mark cyber-portrait__mark--num" aria-hidden="true">
        03
      </span>
    </motion.div>

    <motion.div className="cyber-portrait__caption" variants={fadeUp}>
      <HudFrame corner={14} cut={6} tone="dim">
        <span className="cyber-portrait__caption-body">
          <span className="cyber-portrait__caption-text">
            Building
            <br />
            Better web experiences
          </span>
          <span className="cyber-portrait__caption-dot" aria-hidden="true" />
        </span>
      </HudFrame>
    </motion.div>
  </motion.figure>
);

export default CyberPortrait;
