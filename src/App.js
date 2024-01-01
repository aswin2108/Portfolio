import React from "react";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import {Experience} from "./components/experience/Experience";
import {OS} from "./components/openSource/OpenSource";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <OS />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
