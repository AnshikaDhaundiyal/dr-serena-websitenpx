"use client";
import React, { useState } from "react";

const questions = [
  {
    q: "Do you accept insurance?",
    a: "No, but a superbill is provided for self-submission.",
  },
  {
    q: "Are online sessions available?",
    a: "Yes—all virtual sessions via Zoom.",
  },
  {
    q: "What is your cancellation policy?",
    a: "24-hour notice required.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-12">Frequently Asked Questions</h2>
        {questions.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <h3 className="text-xl font-medium flex justify-between">
              {item.q}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </h3>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;