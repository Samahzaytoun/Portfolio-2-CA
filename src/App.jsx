import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function () {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
