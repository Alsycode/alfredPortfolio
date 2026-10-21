import React from "react";
import HudFrame from "../About/HudFrame";
import "./HudButton.css";

/**
 * Site-wide CTA button: the angular HUD frame + spinning magenta beam used by
 * the "View all projects" button, generalised for any label/icon/surface.
 */
const HudButton = ({
  label,
  icon,
  iconPosition = "left", // "left" | "right" | "only"
  as,
  href,
  onClick,
  type = "button",
  tone = "magenta",
  size = "md", // "lg" | "md" | "sm"
  corner,
  cut,
  className = "",
  frameClassName = "",
  ...rest
}) => {
  const Surface = as || (href ? "a" : "button");
  const surfaceProps = { ...rest };
  if (href) surfaceProps.href = href;
  if (Surface === "button") surfaceProps.type = type;

  const sizeCorner = { lg: 18, md: 14, sm: 10 }[size] ?? 14;
  const sizeCut = { lg: 8, md: 6, sm: 5 }[size] ?? 6;
  const iconOnly = iconPosition === "only";

  return (
    <HudFrame
      corner={corner ?? sizeCorner}
      cut={cut ?? sizeCut}
      tone={tone}
      className={`hud-btn__frame hud-btn__frame--${size} ${frameClassName}`}
    >
      <Surface
        {...surfaceProps}
        onClick={onClick}
        className={`hud-btn hud-btn--${size} ${iconOnly ? "hud-btn--icon-only" : ""} ${className}`}
      >
        {iconOnly ? (
          <span className="hud-btn__icon" aria-hidden="true">
            {icon}
          </span>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="hud-btn__icon" aria-hidden="true">
                {icon}
              </span>
            )}
            {label && <span className="hud-btn__label">{label}</span>}
            {icon && iconPosition === "right" && (
              <span className="hud-btn__icon" aria-hidden="true">
                {icon}
              </span>
            )}
          </>
        )}
      </Surface>
    </HudFrame>
  );
};

export default HudButton;
