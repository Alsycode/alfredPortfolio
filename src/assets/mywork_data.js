import project1_img from '../assets/chatapp.png'
// import project1_2 from '../assets/chatapp2.png'
// import project1_3 from '../assets/chatapp3.png'

import project2_img from '../assets/serviceconnect.png'
 import project2_1 from '../assets/serviceConnect/1.png'
  import project2_2 from '../assets/serviceConnect/2.png'
   import project2_3 from '../assets/serviceConnect/3.png'
    import project2_4 from '../assets/serviceConnect/4.png'

 import project3_img from '../assets/datingApp.png'
// import project3_2 from '../assets/datingApp2.png'

import project4_img from '../assets/nextBlog.png'
// import project4_2 from '../assets/nextBlog2.png'

import project5_img from '../assets/nft.png'

 import project6_img from '../assets/restaurantui.png'
// import project6_2 from '../assets/restaurantui2.png'

import project7_img from '../assets/LMS.png'
import project7_1 from '../assets/lms/1.png'
import project7_2 from '../assets/lms/2.png'

import project7_3 from '../assets/lms/3.png'

import project7_4 from '../assets/lms/4.png'


import project8_img from '../assets/ecomm.png'

import project8_3 from '../assets/SINh/2.png'
import project8_4 from '../assets/SINh/3.png'
import project8_5 from '../assets/SINh/4.png'
import project8_6 from '../assets/SINh/5.png'
import project8_7 from '../assets/SINh/6.png'

import project8_8 from '../assets/SINh/7.png'


import hospital1 from "../assets/hospitalDash/1.png";
import hospital2 from "../assets/hospitalDash/2.png";
import hospital3 from "../assets/hospitalDash/3.png";
import hospital4 from "../assets/hospitalDash/4.png";
import hospital5 from "../assets/hospitalDash/5.png";
import hospital6 from "../assets/hospitalDash/6.png";
import hospital7 from "../assets/hospitalDash/7.png";
import hospital8 from "../assets/hospitalDash/8.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "MERN Chat App",
    w_img: project1_img,            // thumbnail
    w_images: [                     // carousel images
      project1_img,
  
    ],
    w_description:
      "A real-time chat application built using MERN, Socket.IO, JWT authentication and MongoDB. Includes online/offline status, typing indicator, and private chat rooms.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    live: "",                      // optional
    code: "https://github.com/your-repo/chat-app",
  },

  {
    w_no: 2,
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
    w_no: 3,
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
    w_no: 4,
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
    w_no: 5,
    w_name: "Dating App",
    w_img: project3_img,
    w_images: [project3_img],
    w_description:
      "A dating app UI with profile swipes, matches, messaging UI and modern animations.",
    tags: ["React", "UI/UX", "Animations"],
    live: "",
    code: "",
  },

  {
    w_no: 6,
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
    w_no: 7,
    w_name: "NFT Preview Card",
    w_img: project5_img,
    w_images: [project5_img],
    w_description:
      "A beautifully designed NFT preview card component with hover animations and responsive styling.",
    tags: ["React", "CSS"],
    live: "",
    code: "",
  },

  {
    w_no: 8,
    w_name: "Restaurant UI",
    w_img: project6_img,
    w_images: [project6_img],
    w_description:
      "A restaurant web UI with modern design, menu sections, hero section and elegant colors.",
    tags: ["React", "UI Design"],
    live: "",
    code: "",
  },
  {
  w_no: 9,
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

];

export default mywork_data;
