import React, { useEffect, useRef } from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HudButton from "../ui/HudButton";
import { User, Layers, Target, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiCss,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  { Icon: SiReact, name: "React", className: "tech-react" },
  { Icon: SiNextdotjs, name: "Next.js", className: "tech-next" },
  { Icon: SiNodedotjs, name: "Node.js", className: "tech-node" },
  { Icon: SiJavascript, name: "JavaScript", className: "tech-js" },
  { Icon: SiCss, name: "CSS3", className: "tech-css" },
  { Icon: SiHtml5, name: "HTML5", className: "tech-html" },
  { Icon: SiTailwindcss, name: "Tailwind", className: "tech-tailwind" },
];

const Hero = () => {
  const heroRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const reveal = revealRef.current;
    if (!hero || !reveal) return;

    const getRadius = () => {
      const w = window.innerWidth;
      if (w < 480) return 120;
      if (w < 720) return 160;
      return 260;
    };

    const setMask = (clientX, clientY) => {
      const rect = reveal.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const r = getRadius();
      const gradient = `radial-gradient(circle ${r}px at ${x}px ${y}px, #fff 0%, #fff 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, transparent 100%)`;
      reveal.style.webkitMaskImage = gradient;
      reveal.style.maskImage = gradient;
    };

    const onMouseMove = (e) => setMask(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        setMask(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onLeave = () => {
      reveal.style.webkitMaskImage =
        "radial-gradient(circle 0px at -999px -999px, #fff, transparent)";
      reveal.style.maskImage =
        "radial-gradient(circle 0px at -999px -999px, #fff, transparent)";
    };

    hero.addEventListener("mousemove", onMouseMove);
    hero.addEventListener("mouseleave", onLeave);
    hero.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("mouseleave", onLeave);
      hero.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="hero"
      aria-label="Hero section"
      ref={heroRef}
    >
      <div
        className="hero-base-img"
        style={{ backgroundImage: "url(/1.webp)" }}
      />
      <div
        className="hero-reveal-img"
        ref={revealRef}
        style={{ backgroundImage: "url(/2.webp)" }}
      />

      <div className="hero-inner">
        <div className="hero-right">
          <div className="hero-status">
            <span className="hero-status-dot" />
            SYS.ONLINE // KOCHI, IN
          </div>

          <h1 className="hero-title">
            <span className="hero-pre">&gt; HELLO, WORLD. I AM</span>
            <span className="hero-name">ALFRED SHYAM</span>
            <span className="hero-sub">
              FULL STACK ENGINEER<span className="hero-cursor">_</span>
            </span>
          </h1>

          <p className="hero-desc">
            Building fast, neon-lit interfaces from the grid. 3 years of
            shipping pixel-perfect experiences across React, Next.js, React
            Native, and the full HTML/CSS/JS stack.
          </p>

          <div className="hero-action">
            <HudButton
              label="Initiate contact"
              icon={<ArrowRight size={16} strokeWidth={2.5} />}
              as={AnchorLink}
              offset={50}
              href="#contact"
            />

            <HudButton
              label="Download CV"
              href="/resume-alf.pdf"
              download="Alfred-Shyam-Resume.pdf"
            />
          </div>
        </div>
      </div>

      {/* mobile-only layout */}
      <div className="hero-mobile">
        <span className="hero-m-slashes" aria-hidden="true">///</span>

        <div className="hero-m-frame">
          <span className="hero-m-bracket hero-m-bracket--tl" aria-hidden="true" />
          <span className="hero-m-bracket hero-m-bracket--br" aria-hidden="true" />

          <div className="hero-m-status">
            <span className="hero-m-dot" />
            SYS.ONLINE // KOCHI, IN
          </div>

          <h1 className="hero-m-title">
            <span className="hero-m-first">ALFRED</span>
            <span className="hero-m-last">SHYAM</span>
          </h1>
          <span className="hero-m-underline" aria-hidden="true" />

          <p className="hero-m-desc">
            Building fast, modern web experiences from the grid. 3 years of
            shipping pixel-perfect applications across React, Next.js, React
            Native and the web.
          </p>

          <div className="hero-m-actions">
            <HudButton
              size="sm"
              label="View my work"
              icon={<ArrowRight size={14} strokeWidth={2.5} />}
              as={AnchorLink}
              href="#work"
              offset={70}
              frameClassName="hero-m-btn-frame"
            />
            <HudButton
              size="sm"
              label="Get in touch"
              as={AnchorLink}
              href="#contact"
              offset={50}
              frameClassName="hero-m-btn-frame"
            />
          </div>
        </div>

        <div className="hero-m-portrait">
          <div className="hero-m-portrait-glow" />
          <div className="hero-m-portrait-frame">
            <span className="hero-m-plus hero-m-plus--tl" aria-hidden="true">+</span>
            <span className="hero-m-plus hero-m-plus--tr" aria-hidden="true">+</span>
            <span className="hero-m-ring" aria-hidden="true" />
            <span className="hero-m-ticks hero-m-ticks--left" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
            </span>
            <span className="hero-m-ticks hero-m-ticks--right" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
            </span>
            <span className="hero-m-corner hero-m-corner--tl" aria-hidden="true" />
            <span className="hero-m-corner hero-m-corner--tr" aria-hidden="true" />
            <span className="hero-m-corner hero-m-corner--bl" aria-hidden="true" />
            <span className="hero-m-corner hero-m-corner--br" aria-hidden="true" />
            <img
              src="/hero-mobile-portrait.webp"
              alt="Alfred Shyam"
              className="hero-m-portrait-img"
            />
          </div>

          <div className="hero-m-badge">
            <span className="hero-m-badge-dot" />
            <span>
              CURRENTLY BUILDING
              <br />
              BETTER WEB EXPERIENCES
              <span className="hero-m-badge-dash" />
            </span>
          </div>
        </div>

        <div className="hero-m-stats">
          <div className="hero-m-stat">
            <div className="hero-m-stat-icon">
              <User size={11} strokeWidth={2} />
            </div>
            <div className="hero-m-stat-value">3+</div>
            <div className="hero-m-stat-label">
              YEARS
              <br />
              EXPERIENCE
            </div>
          </div>
          <div className="hero-m-stat">
            <div className="hero-m-stat-icon">
              <Layers size={11} strokeWidth={2} />
            </div>
            <div className="hero-m-stat-value">20+</div>
            <div className="hero-m-stat-label">
              PROJECTS
              <br />
              COMPLETED
            </div>
          </div>
          <div className="hero-m-stat">
            <div className="hero-m-stat-icon">
              <Target size={11} strokeWidth={2} />
            </div>
            <div className="hero-m-stat-value">100%</div>
            <div className="hero-m-stat-label">
              CLIENT
              <br />
              FOCUSED
            </div>
          </div>
        </div>

        <div className="hero-m-tech">
          <div className="hero-m-tech-head">
            <span>// TECH STACK</span>
            <span className="hero-m-tech-line" />
            <span className="hero-m-tech-dot" />
          </div>
          <div className="hero-m-tech-icons">
            {techStack.map(({ Icon, name, className }) => (
              <div key={name} className={`hero-m-tech-icon ${className}`} title={name}>
                <Icon size={22} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
