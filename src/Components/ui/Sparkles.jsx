import React, { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";

// JSX port of the 21st.dev "SparklesCore" component (no Tailwind / cn helper).
// tsparticles fills in every option not listed here with its own defaults.
export const SparklesCore = ({
  id,
  className = "",
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 120,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container) => {
    if (container) controls.start({ opacity: 1, transition: { duration: 1 } });
  };

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0 }}
      className={className}
    >
      {init && (
        <Particles
          id={id || generatedId}
          style={{ width: "100%", height: "100%" }}
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
                resize: { enable: true },
              },
              modes: { push: { quantity: 4 } },
            },
            particles: {
              color: { value: particleColor },
              move: {
                enable: true,
                direction: "none",
                outModes: { default: "out" },
                speed: { min: 0.1, max: 1 },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed,
                  sync: false,
                  startValue: "random",
                },
              },
              shape: { type: "circle" },
              size: { value: { min: minSize, max: maxSize } },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

export default SparklesCore;
