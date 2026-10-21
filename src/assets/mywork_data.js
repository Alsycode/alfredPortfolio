// import project1_2 from '../assets/chatapp2.png'
// import project1_3 from '../assets/chatapp3.png'

import project2_img from '../assets/serviceconnect.webp'
 import project2_1 from '../assets/serviceConnect/1.webp'
  import project2_2 from '../assets/serviceConnect/2.webp'
   import project2_3 from '../assets/serviceConnect/3.webp'
    import project2_4 from '../assets/serviceConnect/4.webp'

// import project3_2 from '../assets/datingApp2.png'

import project4_img from '../assets/nextBlog.webp'
// import project4_2 from '../assets/nextBlog2.png'


// import project6_2 from '../assets/restaurantui2.png'

import project7_img from '../assets/LMS.webp'
import project7_1 from '../assets/lms/1.webp'
import project7_2 from '../assets/lms/2.webp'

import project7_3 from '../assets/lms/3.webp'

import project7_4 from '../assets/lms/4.webp'


import project8_img from '../assets/ecomm.webp'

import project8_3 from '../assets/SINh/2.webp'
import project8_4 from '../assets/SINh/3.webp'
import project8_5 from '../assets/SINh/4.webp'
import project8_6 from '../assets/SINh/5.webp'
import project8_7 from '../assets/SINh/6.webp'

import project8_8 from '../assets/SINh/7.webp'


import hospital1 from "../assets/hospitalDash/1.webp";
import hospital2 from "../assets/hospitalDash/2.webp";
import hospital3 from "../assets/hospitalDash/3.webp";
import hospital4 from "../assets/hospitalDash/4.webp";
import hospital5 from "../assets/hospitalDash/5.webp";
import hospital6 from "../assets/hospitalDash/6.webp";
import hospital7 from "../assets/hospitalDash/7.webp";
import hospital8 from "../assets/hospitalDash/8.webp";

import mf1 from '../assets/managedFarmlands/1.webp'
import mf2 from '../assets/managedFarmlands/2.webp'
import mf3 from '../assets/managedFarmlands/3.webp'
import mf4 from '../assets/managedFarmlands/4.webp'

import nk1 from '../assets/natureKingdom/1.webp'
import nk2 from '../assets/natureKingdom/2.webp'
import nk3 from '../assets/natureKingdom/3.webp'
import nk4 from '../assets/natureKingdom/4.webp'

import mg1 from '../assets/miniGreens/1.webp'
import mg2 from '../assets/miniGreens/2.webp'
import mg3 from '../assets/miniGreens/3.webp'
import mg4 from '../assets/miniGreens/4.webp'
import mg5 from '../assets/miniGreens/5.webp'
import mg6 from '../assets/miniGreens/6.webp'
import mg7 from '../assets/miniGreens/7.webp'
import mg8 from '../assets/miniGreens/8.webp'
import mg9 from '../assets/miniGreens/9.webp'

import portfolio_poster from '../assets/profile-cyber.webp'

const mywork_data = [
  {
    w_no: 0,
    w_name: "This Portfolio",
    w_img: portfolio_poster,
    w_video: "/demo/stephy-portfolio-desktop.mp4",
    w_videos: ["/demo/stephy-portfolio-desktop.mp4", "/demo/stephy-portfolio-mobile.mp4"],
    w_description:
      "A cyber-HUD themed personal portfolio with an animated hero, floating skills, HUD-framed about section and a project archive. Fully responsive across desktop and mobile.",
    tags: ["React", "Vite", "Framer Motion", "Responsive"],
    live: "",
    code: "",
  },

  {
    w_no: 0,
    w_name: "Mini Greens Company",
    w_img: mg1,
    w_images: [mg1, mg2, mg3, mg4, mg5, mg6, mg7, mg8, mg9],
    w_description:
      "E-commerce and subscription site for India's first microgreens brand, Bengaluru. Includes a shop for microgreens, tea bags, smoothies and juices, weekly box plans, a brand story page, a journal and fully responsive layouts.",
    tags: ["React", "E-commerce", "Subscriptions", "Live"],
    live: "https://minigreenscompany.com/",
    code: "",
  },

  {
    w_no: 1,
    w_name: "Managed Farmlands",
    w_img: mf1,
    w_images: [mf1, mf2, mf3, mf4],
    w_description:
      "A farmland marketplace for India connecting verified builders with buyers. Features searchable listings, featured properties, an interactive map, a blog and a lead-enquiry flow.",
    tags: ["React", "Marketplace", "SEO", "Live"],
    live: "https://managedfarmlands.com/",
    code: "",
  },

  {
    w_no: 2,
    w_name: "Nature Kingdom Homestay",
    w_img: nk1,
    w_images: [nk1, nk2, nk3, nk4],
    w_description:
      "A cinematic, scroll-driven website for a Chikmagalur coffee-estate homestay, with immersive storytelling, curated stay packages, booking enquiries and WhatsApp contact.",
    tags: ["React", "Animation", "SEO", "Live"],
    live: "https://www.naturekingdomhomestay.com/",
    code: "",
  },

  {
    w_no: 4,
    w_name: "MERN Learning Management System",
    w_img: project7_img,
    w_images: [project7_img,project7_1,project7_2,project7_3,project7_4],
    w_description:
      "A full LMS platform with user roles, course management, student dashboard, admin panel, and video classes. Built using React + Node + MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "LMS"],
    live: "",
    code: "",
  },

  {
    w_no: 5,
    w_name: "Ecommerce App",
    w_img: project8_img,
    w_images: [project8_img,project8_3,project8_4,project8_5,project8_6,project8_7,
        project8_8
    ],
    w_description:
      "A scalable ecommerce web app with product filters, cart, checkout flow, authentication, order tracking and admin management.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    live: "",
    code: "",
  },

  {
    w_no: 6,
    w_name: "Service Connect",
    w_img: project2_img,
    w_images: [project2_img,project2_1,project2_2,project2_3,project2_4],
    w_description:
      "A service marketplace platform where users can book professionals. Includes booking system, profiles, ratings and real-time updates.",
    tags: ["React", "Node.js", "MongoDB"],
    live: "",
    code: "",
  },

  {
    w_no: 8,
    w_name: "Next Blog App",
    w_img: project4_img,
    w_images: [project4_img],
    w_description:
      "A modern blog platform built using Next.js. Supports markdown posts, categories, SEO optimization and fast routing.",
    tags: ["Next.js", "Markdown", "SEO"],
    live: "",
    code: "",
  },

  {
  w_no: 11,
  w_name: "Hospital Admin Dashboard",
  w_img: hospital5,   // thumbnail image
  w_images: [
   
  
    hospital5,
    hospital6,
    hospital7,
    hospital8
  ],
  w_description:
    "A complete hospital admin dashboard with appointment management, doctor-patient records, feedback system, authentication, role-based access, and real-time analytics charts.",
  tags: ["React", "Node.js", "MongoDB", "Express", "Dashboard"],
  live: "",
  code: "",
},

  {
    w_no: 12,
    w_name: "Mainframe Studio",
    w_img: "/port1/mainframe-01-hero.webp",
    w_images: [
      "/port1/mainframe-01-hero.webp",
      "/port1/mainframe-03-about.webp",
      "/port1/mainframe-05-studio.webp",
      "/port1/mainframe-07-openings.webp",
      "/port1/mainframe-10-mobile-hero.webp",
    ],
    w_description:
      "A creative studio website with an AI concierge greeting, a labs and studio section, an openings page and a process walkthrough. Fully responsive with a mobile menu.",
    tags: ["React", "Creative Studio", "Responsive"],
    live: "https://port1-tau-henna.vercel.app/",
    code: "",
  },

  {
    w_no: 13,
    w_name: "Cast & Render",
    w_img: "/port2/desktop-01-hero.webp",
    w_images: [
      "/port2/desktop-01-hero.webp",
      "/port2/desktop-04-works.webp",
      "/port2/desktop-05-works-grid.webp",
      "/port2/desktop-06-materials.webp",
      "/port2/desktop-09-brief.webp",
      "/port2/mobile-01-hero.webp",
    ],
    w_description:
      "A 3D objects studio website with a minimal hero, a works grid, materials and process pages, and a project brief form with validation and a confirmation state. Designed for desktop and mobile.",
    tags: ["React", "3D", "Forms", "Responsive"],
    live: "https://cast-and-render-sandy.vercel.app/",
    code: "",
  },

  {
    w_no: 14,
    w_name: "Portfolio Collection '26",
    w_img: "/port3/01-hero.webp",
    w_images: [
      "/port3/01-hero.webp",
      "/port3/02-selected-works-top.webp",
      "/port3/03-selected-works-grid.webp",
      "/port3/06-explorations-intro.webp",
      "/port3/07-explorations-parallax.webp",
      "/port3/10-resume-page.webp",
    ],
    w_description:
      "A dark, cinematic designer portfolio with a selected works grid, a journal, parallax explorations, stats and a resume page.",
    tags: ["React", "Animation", "Parallax", "Portfolio"],
    live: "https://port3-murex.vercel.app/",
    code: "",
  },

  {
    w_no: 15,
    w_name: "NovaAI Automation Agency",
    w_img: "/port4/ui-01-hero.webp",
    w_images: [
      "/port4/ui-01-hero.webp",
      "/port4/ui-02-insight-section.webp",
      "/port4/ui-03-services-bento.webp",
      "/port4/ui-04-process.webp",
      "/port4/ui-05-proof.webp",
      "/port4/ui-07-mobile-hero.webp",
    ],
    w_description:
      "A landing site for an AI automation agency, with a services bento grid, a process section, client proof and a consultation call-to-action. Responsive across desktop and mobile.",
    tags: ["React", "AI", "Bento Grid", "Responsive"],
    live: "https://port4-delta.vercel.app/",
    code: "",
  },

  {
    w_no: 16,
    w_name: "Studio Story Agency",
    w_img: "/port5/01-hero.webp",
    w_images: [
      "/port5/01-hero.webp",
      "/port5/02-marquee-story.webp",
      "/port5/03-expertise-open.webp",
      "/port5/05-studios.webp",
      "/port5/06-feedback.webp",
      "/port5/08-mobile-hero.webp",
    ],
    w_description:
      "A creative agency site with an animated hero, an expandable expertise list, studio showcases, client feedback and a contact footer, with a mobile menu.",
    tags: ["React", "Animation", "Agency", "Responsive"],
    live: "https://port5-eight.vercel.app/",
    code: "",
  },

  {
    w_no: 17,
    w_name: "Vanguard Brand Studio",
    w_img: "/port6/01-hero.webp",
    w_images: [
      "/port6/01-hero.webp",
      "/port6/02-projects-header.webp",
      "/port6/03-projects-grid.webp",
      "/port6/04-studio.webp",
      "/port6/06-testimonial.webp",
      "/port6/09-mobile-hero.webp",
    ],
    w_description:
      "A bold brand studio site with a projects grid, studio and offerings sections, a testimonial, and an inquiry form with validation. Responsive with a mobile menu.",
    tags: ["React", "Branding", "Forms", "Responsive"],
    live: "https://port6-theta.vercel.app/",
    code: "",
  },

];

export default mywork_data;
