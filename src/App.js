import React from "react";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
