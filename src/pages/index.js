import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import { HomeObjOne, HomeObjTwo } from "../components/InfoSection/Data";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Background">
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Navbar toggle={toggle} />

      <HeroSection />

      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />

      <Services />

      <Footer />
    </div>
  );
};
export default Home;
