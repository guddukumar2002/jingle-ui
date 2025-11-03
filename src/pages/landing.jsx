import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import Services from "../components/Services";
import Features from "../components/Features";
import Footer from "../components/Footer";

const landing = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <section className="w-full ">
        <Hero />
      </section>
      <section className="w-full ">
        <Services />
      </section>
      <section className="w-full ">
        <Features />
      </section>
      <section className="w-full ">
        <Packages />
      </section>

      <Footer />
    </div>
  );
};

export default landing;
