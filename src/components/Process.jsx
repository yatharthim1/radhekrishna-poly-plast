export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Fabric Inward',
      description: 'Material enters the unit and is recorded by roll, weight and meter information.'
    },
    {
      number: '2',
      title: 'Inventory & Roll Tracking',
      description: 'Fabric rolls are organized and tracked with roll-level information.'
    },
    {
      number: '3',
      title: 'Cutting & Processing',
      description: 'Material can be directed for in-factory cutting and bag-related processing.'
    },
    {
      number: '4',
      title: 'Sales & Order Handling',
      description: 'Material can be supplied directly to customers according to their requirements.'
    },
    {
      number: '5',
      title: 'Outward Dispatch',
      description: 'Material is prepared for dispatch with relevant quantity, weight, freight and adjustment details.'
    },
  ];

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="section-title">
          <h2 className="text-navy-900">From Fabric Roll to Final Dispatch</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our structured operational workflow ensures accuracy at every stage
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-navy-900 via-accent-orange to-industrial-teal"></div>

            {/* Timeline Steps */}
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Circle */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-gray-50 z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-20">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-navy-900 to-accent-orange mx-auto mt-2"></div>
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlight */}
        <div className="mt-16 pt-16 border-t border-gray-300">
          <div className="bg-white rounded-xl p-8 md:p-12 card-shadow">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Operational Excellence Through Discipline</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold text-accent-orange mb-2">100%</p>
                <p className="text-gray-700">Roll Tracking</p>
                <p className="text-sm text-gray-600 mt-2">Each roll documented with precision</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-orange mb-2">Accurate</p>
                <p className="text-gray-700">Weight & Meter Data</p>
                <p className="text-sm text-gray-600 mt-2">Verified at every checkpoint</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-orange mb-2">✓</p>
                <p className="text-gray-700">Quality Dispatch</p>
                <p className="text-sm text-gray-600 mt-2">Complete documentation included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
