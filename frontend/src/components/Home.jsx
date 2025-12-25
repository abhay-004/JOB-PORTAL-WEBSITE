import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
