import { useState, useRef } from 'react';

const EMPTY_FORM = {
  name: '',
  company: '',
  phone: '',
  email: '',
  product: '',
  quantity: '',
  message: ''
};

export default function Enquiry() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formTopRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Basic phone validation (Indian phone number)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setError('Please enter a valid phone number.');
      return;
    }

    setSubmitting(true);

    try {
      const submissionData = new URLSearchParams({
        'form-name': 'business-enquiry',
        ...formData
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submissionData.toString()
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Success: clear the form immediately and show the confirmation screen
      setFormData(EMPTY_FORM);
      setSubmitted(true);
      formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      setError('We could not send your enquiry. Please try again, or call/WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="enquiry" className="section-padding bg-gradient-to-br from-navy-800 to-navy-900 text-white">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Looking for Fabric or Poly-Plastic Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              Tell us what you need and our team can get in touch with you regarding your requirement.
            </p>
          </div>

          <div ref={formTopRef} />

          {submitted ? (
            /* Success screen — replaces the form after a successful submission */
            <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
              <div className="mx-auto mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
                <span className="text-4xl text-green-600">✓</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
                Thank you for your enquiry!
              </h3>
              <p className="text-gray-700 text-lg mb-8 max-w-md mx-auto">
                We've received your details and our team will get in touch with you shortly regarding your requirements.
              </p>
              <button
                onClick={handleSendAnother}
                className="btn-secondary px-8 py-3"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
          /* Form */
          <form
            name="business-enquiry"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            {/* Hidden form name field for Netlify */}
            <input type="hidden" name="form-name" value="business-enquiry" />
            
            {/* Honeypot spam protection */}
            <input type="hidden" name="bot-field" />

            {error && (
              <div className="mb-8 p-4 bg-red-50 border-2 border-red-400 rounded-lg">
                <p className="text-red-800 font-semibold">{error}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-900 focus:outline-none transition"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-900 focus:outline-none transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-900 focus:outline-none transition"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-900 focus:outline-none transition"
                />
              </div>

              {/* Product Required */}
              <div>
                <label htmlFor="product" className="block text-sm font-semibold text-gray-900 mb-2">
                  Product / Material Required
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="e.g., Woven Fabric, Poly-Plastic Material"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-900 focus:outline-none transition"
                />
              </div>

              {/* Quantity / Requirement */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-semibold text-gray-900 mb-2">
                  Quantity / Requirement
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 100 kg, 500 meters"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-900 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirements..."
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-navy-900 focus:outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-secondary py-4 text-lg font-bold"
              >
                {submitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                <span className="text-red-600">*</span> Required fields
              </p>
            </div>
          </form>
          )}

          {/* Additional Info */}
          <div className="mt-12 pt-12 border-t border-white/20 text-center">
            <p className="text-gray-300 text-lg mb-6">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+919608257462"
                className="btn-secondary inline-block"
              >
                ☎ Call Us
              </a>
              <a
                href="https://wa.me/919608257462"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 inline-block"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
