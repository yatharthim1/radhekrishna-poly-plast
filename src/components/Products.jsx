export default function Products() {
  const productCategories = [
    {
      title: 'PP Woven Fabrics',
      description: 'Premium laminated and unlaminated rolls with water-resistant or breathable options for industrial wrap and bag conversion.',
      icon: '🧵',
    },
    {
      title: 'Agricultural & Food Grain Sacks',
      description: 'Heavy-duty bags for rice, wheat, pulses, sugar, and animal feed, available for dependable bulk packaging.',
      icon: '♻️',
    },
    {
      title: 'Industrial & Chemical Packaging',
      description: 'High-tensile, burst-resistant sacks for cement, fertilizers, chemicals, and raw polymers.',
      icon: '📦',
    },
    {
      title: 'Laminated, Printed & Custom Bags',
      description: 'Moisture-proof printed bags plus gusseted and custom geometries for handling, automated filling, and pallet stacking.',
      icon: '✂️',
    },
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="section-title">
          <h2 className="text-navy-900">Our Fabric & Poly-Plastic Solutions</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive material solutions for industrial and commercial applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="card-shadow p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">{category.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>
              
              <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded">
                <p>Custom GSM, colors, dimensions, printing, and order sizes available on request.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-navy-800 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Looking for Specific Products?</h3>
          <p className="text-gray-200 mb-8 text-lg">
            Contact us with your specific requirements and we'll provide detailed information about availability and pricing.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+919608257462" className="btn-secondary">
              Call for Details
            </a>
            <a href="#enquiry" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
