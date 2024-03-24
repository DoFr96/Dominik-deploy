import Hero from "@/components/Hero";
import Program from "@/components/Program";
import React from "react";
import Test5 from "@/components/Test5";
import Transform from "@/components/Transform";
import JoinUs from "@/components/JoinUs";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Shoes from "@/components/Shoes";
import Contact from "@/components/Contact";
const Home = () => {
  return (
    <div>
      <div className="sm:max-w-[1280px] mx-auto  overflow-hidden">
        <div className="w-full sm:px-16 px-6">
          <Hero />
          <Program />
          <Transform />
          <Shoes />
          <JoinUs />
          <Packages />
          <Testimonials />
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
