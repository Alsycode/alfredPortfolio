import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="hero-inner">
        <div className="hero-left">
          <img
            src={profile_img}
            alt="Alfred Shyam — frontend developer"
            className="profile-img"
            loading="eager"
            width="320"
            height="320"
          />
        </div>

        <div className="hero-right">
          <h1 className="hero-title">
            <span className="hero-name">I'm Alfred Shyam,</span>
            <span className="hero-sub">frontend developer based in Kochi.</span>
          </h1>

          <p className="hero-desc">
            I am a frontend developer with 1.5 years of experience.
          </p>

          <div className="hero-action">
            <AnchorLink
              className="btn btn-primary anchor-link"
              offset={50}
              href="#contact"
            >
              Connect with me
            </AnchorLink>

            {/* Replace href with your resume path or toggle to download */}
            <a
              className="btn btn-outline"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
