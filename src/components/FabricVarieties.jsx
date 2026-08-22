export default function FabricVarieties() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          {/* Big Number */}
          <div className="mb-8">
            <p className="text-accent-orange text-xl font-bold mb-2">OUR STRENGTH</p>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">180+</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">Fabric Varieties</h3>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Supported through an organized catalogue and roll-based inventory workflow, our 180+ fabric varieties provide reliable access to a broad spectrum of woven poly solutions.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <p className="text-2xl mb-2">📊</p>
              <p className="font-semibold text-lg">Organized Catalogue</p>
              <p className="text-gray-300 text-sm mt-2">Systematically organized for easy reference</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <p className="text-2xl mb-2">🔍</p>
              <p className="font-semibold text-lg">Roll Tracking</p>
              <p className="text-gray-300 text-sm mt-2">Each roll tracked with precision</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <p className="text-2xl mb-2">⚡</p>
              <p className="font-semibold text-lg">Quick Access</p>
              <p className="text-gray-300 text-sm mt-2">Rapid material identification and dispatch</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('enquiry')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Fabric Catalogue
            </button>
            <a
              href="tel:+919608257462"
              className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-lg px-8 py-4"
            >
              Call for Details
            </a>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-400 mt-8">
            {/* TODO: Link to dedicated catalogue page once available */}
          </p>
        </div>
      </div>
    </section>
  );
}
