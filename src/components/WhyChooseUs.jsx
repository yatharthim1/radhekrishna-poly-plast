export default function WhyChooseUs() {
  const pillars = [
    {
      icon: '📊',
      title: 'Wide Product Range',
      description: 'A catalogue covering 180+ fabric varieties meeting diverse industrial and commercial needs.'
    },
    {
      icon: '⚖️',
      title: 'Operational Accuracy',
      description: 'Attention to roll quantities, net weight and meter information at every transaction stage.'
    },
    {
      icon: '🔄',
      title: 'Flexible Processing',
      description: 'Material can move through direct sales or cutting workflows depending on your requirements.'
    },
    {
      icon: '🎯',
      title: 'Customer-Focused Supply',
      description: 'Dispatch and documentation can be adapted to your specific business requirements.'
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="section-title">
          <h2 className="text-navy-900">Why Businesses Choose Radhekrishna Poly Plast</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Four pillars of reliability and professional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-navy-900 text-white rounded-lg flex items-center justify-center text-3xl">
                  {pillar.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-xl card-shadow p-8 md:p-12">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">What Sets Us Apart</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-navy-900">
                  <th className="text-left py-4 px-4 font-bold text-navy-900">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-navy-900">
                    Radhekrishna<br/>Poly Plast
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">Wide Fabric Range (180+ varieties)</td>
                  <td className="text-center py-4 px-4"><span className="text-2xl text-accent-orange">✓</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">Roll-Level Inventory Tracking</td>
                  <td className="text-center py-4 px-4"><span className="text-2xl text-accent-orange">✓</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">In-Factory Cutting Services</td>
                  <td className="text-center py-4 px-4"><span className="text-2xl text-accent-orange">✓</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">Flexible Documentation</td>
                  <td className="text-center py-4 px-4"><span className="text-2xl text-accent-orange">✓</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">Precise Weight & Meter Tracking</td>
                  <td className="text-center py-4 px-4"><span className="text-2xl text-accent-orange">✓</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-4">Professional B2B Partnership Approach</td>
                  <td className="text-center py-4 px-4"><span className="text-2xl text-accent-orange">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Built on reliability, accuracy, and understanding your business requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
