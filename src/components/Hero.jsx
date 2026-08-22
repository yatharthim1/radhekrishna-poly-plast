import { useState } from 'react';
import waImg1 from '../assets/WhatsApp Image 2026-08-22 at 5.47.45 PM.jpeg';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-industrial-teal/10 rounded-full -ml-48 -mb-48"></div>

      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto text-center md:text-left md:max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            Reliable Fabric &<br />Poly-Plastic Solutions
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
            Radhekrishna Poly Plast, based in Patna, Bihar, works with a wide range of fabric varieties and roll-based material workflows, supporting cutting, sales and dispatch requirements with a focus on accuracy and dependable service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <button
              onClick={() => scrollToSection('enquiry')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Send an Enquiry
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-900"
            >
              Explore Our Products
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">180+</div>
              <p className="text-sm md:text-base text-gray-200">Fabric Varieties</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">Patna</div>
              <p className="text-sm md:text-base text-gray-200">Bihar, India</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">B2B</div>
              <p className="text-sm md:text-base text-gray-200">Focused Supply</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">✓</div>
              <p className="text-sm md:text-base text-gray-200">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Real Company Photo */}
      <div className="mt-16 md:mt-20 container-max">
        <div className="relative h-64 md:h-96 bg-gradient-to-b from-white/20 to-navy-700 rounded-2xl border border-white/20 overflow-hidden shadow-lg">
          <img
            src={waImg1}
            alt="Radhekrishna Poly Plast - Fabric warehouse and storage facility in Patna, Bihar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/30"></div>
        </div>
      </div>
    </section>
  );
}
