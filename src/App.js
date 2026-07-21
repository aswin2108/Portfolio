import React from "react";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import {Experience} from "./components/experience/Experience";
import {OS} from "./components/openSource/OpenSource";
import { RocketCursor } from "./components/rocketCursor/RocketCursor";
import { Starfield } from "./components/starfield/Starfield";

export const App = () => {
  return (
    <>
      <Starfield />
      <RocketCursor />
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
