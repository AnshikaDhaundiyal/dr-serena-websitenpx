"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    time: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-12">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="reason"
            placeholder="What brings you here?"
            required
            value={formData.reason}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="time"
            placeholder="Preferred time to reach you"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              required
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to be contacted
          </label>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
