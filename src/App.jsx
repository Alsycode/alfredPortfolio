// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FloatingSkills from "./Components/FloatingSkills/FloatingSkills";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectPage from "./pages/ProjectPage"; // <-- new page

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FloatingSkills />
              <About />
              {/* <Services/> */}
              <MyWork />
              <Contact />

            </>
          }
        />
        <Route path="/work/:id" element={<ProjectPage />} />
      </Routes>
       <Footer />
    </>
  );
};

export default App;
