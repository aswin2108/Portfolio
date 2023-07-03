import React from "react";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import {Experience} from "./components/experience/Experience"

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
