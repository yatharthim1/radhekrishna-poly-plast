import { useState } from 'react';

export default function Contact() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-navy-900">Contact Radhekrishna Poly Plast</h2>
          <p className="text-lg text-gray-600 mt-4">
            Get in touch with our team for inquiries and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-navy-900 text-white">
                  📍
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Location</h3>
                <p className="text-gray-700 font-semibold">
                  Radhekrishna Poly Plast
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Didarganj, Near Parle G Godawan,<br />
                  Nasirpur Tajpur, Patna<br />
                  Patna - 800009, Bihar, India
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Phone</h3>
                <a
                  href="tel:+919608257462"
                  className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                >
                  +91 9608257462 / 9308243224
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Call us during business hours
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-navy-900 text-white">
                  ✉
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Email</h3>
                <a
                  href="mailto:radhekrishanpolypacks@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  radhekrishanpolypacks@gmail.com
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

{/* GSTIN/UIN */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-navy-900 text-white">
                  🏛
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">GSTIN/UIN</h3>
                <p className="text-gray-700 font-mono text-sm">
                  10ABHFR7598A1Z8
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  State: Bihar (Code: 10)
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-gray-300">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:+919608257462"
                  className="flex items-center gap-3 btn-primary text-sm"
                >
                  ☎ Call Now
                </a>
                <a
                  href="https://wa.me/919608257462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold text-sm"
                >
                  💬 WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection('enquiry')}
                  className="flex items-center gap-3 btn-secondary text-sm w-full text-center justify-center"
                >
                  ✉ Send Enquiry
                </button>
              </div>
            </div>
          </div>

          {/* Map / Location Visual */}
          <div>
            <div className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl overflow-hidden shadow-lg">
              {/* TODO: ADD GOOGLE MAPS URL */}
              <div className="w-full h-full flex items-center justify-center bg-navy-100">
                <div className="text-center text-gray-600">
                  <p className="text-2xl mb-2">📍</p>
                  <p className="text-lg font-semibold">Google Maps Integration</p>
                  <p className="text-sm mt-2">Add your location map here</p>
                  <p className="text-xs mt-4 px-4">
                    [TODO: ADD GOOGLE MAPS URL]<br/>
                    Or embed code: &lt;iframe src="maps URL"&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-white rounded-lg card-shadow p-6">
              <h4 className="text-lg font-bold text-navy-900 mb-3">About Our Location</h4>
              <p className="text-gray-700">
                Located in Patna, Bihar, our unit is strategically positioned to serve businesses across northern India and beyond with reliable fabric and poly-plastic supply solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Support Section */}
        <div className="bg-navy-900 text-white rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Need Help with Something Specific?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Whether you need technical specifications, bulk pricing, custom solutions, or have any other questions, our team is ready to assist.
          </p>
          <button
            onClick={() => scrollToSection('enquiry')}
            className="btn-secondary text-lg px-8 py-4"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
