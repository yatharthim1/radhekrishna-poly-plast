export default function Capabilities() {
  const capabilities = [
    {
      icon: '📊',
      title: '180+ Fabric Varieties',
      description: 'Organized handling of a broad range of fabric materials.'
    },
    {
      icon: '📋',
      title: 'Roll-Level Tracking',
      description: 'Structured tracking of fabric rolls by quantity, weight and meter information.'
    },
    {
      icon: '✂️',
      title: 'Flexible Cutting',
      description: 'Ability to route fabric for cutting and bag-related applications.'
    },
    {
      icon: '📦',
      title: 'Direct Sales',
      description: 'Support for direct customer material requirements.'
    },
    {
      icon: '✓',
      title: 'Accurate Dispatch',
      description: 'Structured outward dispatch based on material and order details.'
    },
    {
      icon: '🎯',
      title: 'Customer-Specific Requirements',
      description: 'Flexibility to accommodate different customer documentation and material requirements.'
    },
  ];

  return (
    <section id="capabilities" className="section-padding bg-white">
      <div className="container-max">
        <div className="section-title">
          <h2 className="text-navy-900">Built Around Accuracy & Flexibility</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Core capabilities that define our operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="card-shadow p-8 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{capability.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{capability.title}</h3>
              <p className="text-gray-700 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* Reinforcement Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="bg-gradient-to-r from-navy-800 to-industrial-blue rounded-xl p-12 text-white">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-6">Why This Matters for Your Business</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold mt-1">✓</span>
                  <span>Reliable supply chain with documented inventory management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold mt-1">✓</span>
                  <span>Transparent tracking from inward receipt to outward dispatch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold mt-1">✓</span>
                  <span>Flexibility to adapt to your specific business workflow</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange font-bold mt-1">✓</span>
                  <span>Professional handling of high-volume fabric management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
