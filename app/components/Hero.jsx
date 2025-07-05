"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full text-white text-center flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/hero-bg.jpg"
        alt="Therapy Background"
         className="absolute inset-0 h-full w-full object-cover object-top -z-10"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" /> */}

      {/* Content */}
      {/* <div className="z-10 p-6 bg-black bg-opacity-80 rounded-lg max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Dr. Serena Blake, PsyD
        </h1>
        <h2 className="text-xl mb-6">
          Compassionate Therapy for Your Mental Wellness
        </h2>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition">
          Book a Free Consult
        </button>
      </div> */}

      {/* Content */}
<div className="z-10 p-6 bg-transparent hover:bg-black hover:bg-opacity-80 transition duration-300 rounded-lg max-w-xl border border-white/20 backdrop-blur-md">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    Dr. Serena Blake, PsyD
  </h1>
  <h2 className="text-xl mb-6">
    Compassionate Therapy for Your Mental Wellness
  </h2>
  <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition">
    Book a Free Consult
  </button>
</div>

    </section>
  );
};

export default Hero;
