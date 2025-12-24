import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategorySection/>
    </div>
  );
};

export default Home;
