import waImg2 from '../assets/WhatsApp Image 2026-08-22 at 5.47.45 PM (1).jpeg';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="section-title">
          <h2 className="text-navy-900">About Radhekrishna Poly Plast</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A trusted industrial partner for fabric and poly-plastic materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With a broad catalogue of fabric varieties and an organized approach to roll handling, cutting and dispatch, Radhekrishna Poly Plast is equipped to serve diverse business requirements from its Patna unit.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our operational foundation rests on structured inventory management, precise quantity and weight tracking, and a commitment to understanding customer-specific requirements. Whether your business needs direct fabric supply or specialized cutting services, we bring professional discipline to every transaction.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-navy-900 mb-4">What We Focus On</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Wide Product Variety</p>
                    <p className="text-gray-600">Access to 180+ fabric varieties for diverse applications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Organized Roll-Based Handling</p>
                    <p className="text-gray-600">Structured tracking by roll number, weight and meter information</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Flexible Processing</p>
                    <p className="text-gray-600">Direct sales and in-factory cutting services available</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Customer-Focused Supply</p>
                    <p className="text-gray-600">Dispatch documentation adapted to your requirements</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Placeholder */}
          <div>
            <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src={waImg2}
                alt="Radhekrishna Poly Plast - Fabric rolls storage and inventory management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="bg-navy-50 rounded-xl p-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">🏭 Based in Patna, Bihar</h3>
            <p className="text-gray-700">
              Strategically located in Patna, Bihar, we serve businesses across India with reliable fabric and poly-plastic solutions. Our organized approach ensures timely delivery and accurate order fulfillment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
