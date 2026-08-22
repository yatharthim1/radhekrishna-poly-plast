import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-max flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold text-navy-900">
            RADHEKRISHNA<br />
            <span className="text-sm font-semibold text-gray-600">POLY PLAST</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-navy-900 font-medium transition">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-navy-900 font-medium transition">
            About Us
          </button>
          <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-navy-900 font-medium transition">
            Products
          </button>
          <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-navy-900 font-medium transition">
            Our Process
          </button>
          <button onClick={() => scrollToSection('capabilities')} className="text-gray-700 hover:text-navy-900 font-medium transition">
            Capabilities
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-navy-900 font-medium transition">
            Contact
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919608257462" className="btn-outline text-sm">
            Call Us
          </a>
          <button onClick={() => scrollToSection('enquiry')} className="btn-secondary text-sm">
            Send Enquiry
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="container-max py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-navy-900">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-navy-900">
              About Us
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-gray-700 hover:text-navy-900">
              Products
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left py-2 text-gray-700 hover:text-navy-900">
              Our Process
            </button>
            <button onClick={() => scrollToSection('capabilities')} className="block w-full text-left py-2 text-gray-700 hover:text-navy-900">
              Capabilities
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-navy-900">
              Contact
            </button>
            <div className="pt-4 space-y-2 border-t">
              <a href="tel:[TODO:CLIENT PHONE]" className="btn-outline text-sm w-full text-center">
                Call Us
              </a>
              <button onClick={() => scrollToSection('enquiry')} className="btn-secondary text-sm w-full">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex gap-2 p-2">
        <a
          href="tel:+919608257462"
          className="flex-1 py-3 bg-navy-800 text-white text-center font-semibold rounded text-sm hover:bg-navy-900 transition"
        >
          ☎ Call
        </a>
        <a
          href="https://wa.me/919608257462"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-green-600 text-white text-center font-semibold rounded text-sm hover:bg-green-700 transition"
        >
          💬 WhatsApp
        </a>
        <button
          onClick={() => scrollToSection('enquiry')}
          className="flex-1 py-3 bg-accent-orange text-white text-center font-semibold rounded text-sm hover:bg-amber-600 transition"
        >
          ✉ Enquiry
        </button>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="md:hidden h-16"></div>
    </header>
  );
}
