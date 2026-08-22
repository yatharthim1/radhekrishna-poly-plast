export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/20">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-2">RADHEKRISHNA</h3>
            <p className="text-sm text-gray-300 mb-6">POLY PLAST</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fabric & Poly-Plastic Solutions for Business
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Patna, Bihar, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('capabilities')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919608257462"
                  className="text-gray-400 hover:text-accent-orange transition"
                >
                  ☎ +91 9608257462
                </a>
              </li>
              <li>
                <a
                  href="mailto:radhekrishanpolypacks@gmail.com"
                  className="text-gray-400 hover:text-accent-orange transition"
                >
                  ✉ radhekrishanpolypacks@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-400">
                  📍 Patna, Bihar, India
                </p>
              </li>
              <li>
                <a
                  href="https://wa.me/919608257462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get Started</h4>
            <p className="text-gray-400 text-sm mb-6">
              Have a requirement? Reach out to us today.
            </p>
            <button
              onClick={() => scrollToSection('enquiry')}
              className="btn-secondary w-full text-center block"
            >
              Send Enquiry
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Radhekrishna Poly Plast. All Rights Reserved.
          </p>
          <div className="mt-6 md:mt-0 space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => scrollToSection('home')}
          className="mt-8 mx-auto block px-6 py-2 border border-gray-600 text-gray-400 rounded-full hover:border-white hover:text-white transition"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}
