import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./FloatingSkills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { id: 1, name: "HTML5", icon: FaHtml5, color: "#E34F26", pos: { top: "12%", left: "12%" } },
  { id: 2, name: "CSS3", icon: FaCss3Alt, color: "#1572B6", pos: { top: "22%", right: "14%" } },
  { id: 3, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", pos: { top: "68%", left: "16%" } },
  { id: 4, name: "React", icon: FaReact, color: "#61DAFB", pos: { bottom: "14%", right: "18%" } },
  { id: 5, name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", pos: { top: "8%", left: "48%" } },
  { id: 6, name: "Git", icon: FaGitAlt, color: "#F05032", pos: { bottom: "10%", left: "42%" } },
  { id: 7, name: "Node.js", icon: FaNodeJs, color: "#3C873A", pos: { top: "45%", left: "6%" } },
  { id: 8, name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", pos: { top: "42%", right: "8%" } },
];

const SkillIcon = ({ mouseX, mouseY, skill, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(mouseX.current - cx, 2) + Math.pow(mouseY.current - cy, 2)
      );

      if (distance < 150) {
        const angle = Math.atan2(mouseY.current - cy, mouseX.current - cx);
        const force = (1 - distance / 150) * 50;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, ...skill.pos }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="floating-skill"
    >
      <motion.div
        className="floating-skill-chip"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        title={skill.name}
      >
        <Icon className="floating-skill-icon" style={{ color: skill.color }} />
      </motion.div>
      <span className="floating-skill-label">{skill.name}</span>
    </motion.div>
  );
};

const FloatingSkills = () => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (event) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      id="skills"
      className="floating-skills"
      aria-label="Skills"
      onMouseMove={handleMouseMove}
    >
      <div className="floating-skills-field">
        <div className="floating-skills-center">
          <div className="title-box">
            <h1>My Tech Stack</h1>
            <img src={theme_pattern} alt="" aria-hidden="true" />
          </div>
          <p className="floating-skills-sub">
            Tools and technologies I use to build fast, polished web experiences.
          </p>
        </div>

        {skills.map((skill, index) => (
          <SkillIcon
            key={skill.id}
            mouseX={mouseX}
            mouseY={mouseY}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FloatingSkills;
