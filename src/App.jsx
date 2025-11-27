// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectPage from "./pages/ProjectPage"; // <-- new page

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
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
