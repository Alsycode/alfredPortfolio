import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE, fadeUp } from "./hudMotion";

const DURATION = 1100;

const useCountUp = (target, start, instant) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (instant) {
      setValue(target);
      return undefined;
    }

    let frame;
    let startedAt;
    const tick = (now) => {
      if (startedAt === undefined) startedAt = now;
      const progress = Math.min((now - startedAt) / DURATION, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, instant]);

  return value;
};

const SkillRow = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const value = useCountUp(skill.level, inView, reduced);
  const { Icon, name, level } = skill;

  return (
    <motion.li ref={ref} className="skill-row" variants={fadeUp}>
      <span className="skill-row__icon">
        <Icon aria-hidden="true" />
      </span>

      <span className="skill-row__name">{name}</span>

      <span
        className="skill-row__track"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.span
          className="skill-row__fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 1.1, delay: 0.15 + index * 0.1, ease: EASE }
          }
        />
      </span>

      <span className="skill-row__value">{value}%</span>
    </motion.li>
  );
};

export default SkillRow;
