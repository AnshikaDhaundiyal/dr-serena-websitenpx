"use client";
import React from "react";
import Image from "next/image";
import servicesData from "../data/servicesData";


const Services = () => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          How I Can Help
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
