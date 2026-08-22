import aboutFactoryImage from '../assets/about-factory-gps.jpeg';

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
                Radhekrishna Poly Plast is a leading trader of premium PP Woven Fabrics and a trusted manufacturer of high-strength industrial packaging bags. Built on product quality and regional supply reliability, we provide robust packaging solutions engineered to withstand heavy loads, moisture, and harsh transport conditions for businesses across Eastern India.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
                We deliver end-to-end woven poly solutions, from sourcing and distributing high-grade woven fabric rolls to manufacturing finished, custom-spec packaging bags. Our integrated operations support seamless material sourcing, strict quality control, and dependable bulk fulfillment for agricultural, commercial, and industrial clients.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-navy-900 mb-4">What We Focus On</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Premium PP Woven Fabrics</p>
                    <p className="text-gray-600">Laminated, unlaminated, UV-stabilized, and custom GSM fabric options</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">High-Strength Bag Manufacturing</p>
                    <p className="text-gray-600">Custom bags for agricultural, food grain, industrial, and chemical packaging</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Customization First</p>
                    <p className="text-gray-600">Flexible dimensions, GSM, colors, printing, and order sizing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold text-xl mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Regional Supply Reliability</p>
                    <p className="text-gray-600">Bulk fulfillment across Bihar, Jharkhand, Uttar Pradesh, and West Bengal</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Factory image */}
          <div>
            <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src={aboutFactoryImage}
                alt="Radhekrishna Poly Plast factory and fabric bag storage facility in Patna, Bihar"
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
