import React from "react";
import "./HudFrame.css";

/**
 * Angular panel with a 1px neon gradient edge.
 * `corner` drives the chamfer size, `cut` the opposite (small) chamfer.
 */
const HudFrame = ({
  className = "",
  corner = 20,
  cut = 8,
  tone = "magenta",
  children,
  ...rest
}) => (
  <div
    className={`hud-frame hud-frame--${tone} ${className}`}
    style={{ "--hud-corner": `${corner}px`, "--hud-cut": `${cut}px` }}
    {...rest}
  >
    <span className="hud-frame__inner">{children}</span>
  </div>
);

export default HudFrame;
