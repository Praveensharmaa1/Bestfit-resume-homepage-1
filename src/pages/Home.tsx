import React from "react";
import { Button } from "../components/ui/button";
import hero from "../assets/hero-banner1.jpg";
import template1 from "../assets/template1.jpg";
import template2 from "../assets/template2.jpg";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-20 text-center">
        <img src={hero} alt="Hero" className="mx-auto mb-6 rounded-xl shadow-md w-full max-w-4xl" />
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          Build Your Best Professional Resume
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Create recruiter-approved, ATS-friendly resumes with BestFit Resume.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Browse Templates</Button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Why Choose BestFit Resume?
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 px-6">
          {[
            { title: "AI Suggestions", desc: "Intelligent content & grammar tips" },
            { title: "20+ Templates", desc: "Modern, industry-specific designs" },
            { title: "Multiple Versions", desc: "Save different versions for jobs" }
          ].map((f, i) => (
            <div key={i} className="border p-4 rounded-xl shadow hover:shadow-md text-left">
              <h3 className="text-lg font-bold text-blue-600">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates Gallery */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Popular Resume Templates
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 px-6">
          {[template1, template2, template1].map((img, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
              <img src={img} alt={`Template ${i+1}`} className="rounded mb-2 w-full" />
              <p className="font-medium text-gray-700">Template {i+1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BestFit Resume. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
