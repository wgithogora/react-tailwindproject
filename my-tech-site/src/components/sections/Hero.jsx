import React from "react";
import HeroImage from "../../assets/Images/Hero-bg.jpg";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center h-[90vh] text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center space-y-6 z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Power Your World with Next-Gen Tech
        </h1>
        <p className="text-lg text-gray-200">
          Discover innovative gadgets designed to simplify your digital life.
        </p>
        <Button text="Shop Now" />
      </div>
    </section>
  );
};

export default Hero;
