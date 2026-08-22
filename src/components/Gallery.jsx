import waImg1 from '../assets/WhatsApp Image 2026-08-22 at 5.47.45 PM.jpeg';
import waImg2 from '../assets/WhatsApp Image 2026-08-22 at 5.47.45 PM (1).jpeg';
import waImg3 from '../assets/WhatsApp Image 2026-08-22 at 5.47.45 PM (2).jpeg';
import waImg4 from '../assets/WhatsApp Image 2026-08-22 at 5.47.46 PM.jpeg';
import waImg5 from '../assets/WhatsApp Image 2026-08-22 at 5.47.46 PM (1).jpeg';
import waImg6 from '../assets/WhatsApp Image 2026-08-22 at 5.47.46 PM (2).jpeg';
import waImg7 from '../assets/WhatsApp Image 2026-08-22 at 5.47.47 PM.jpeg';
import waImg8 from '../assets/WhatsApp Image 2026-08-22 at 5.47.47 PM (1).jpeg';
import waImg9 from '../assets/WhatsApp Image 2026-08-22 at 5.47.49 PM.jpeg';
import waImg10 from '../assets/WhatsApp Image 2026-08-22 at 5.47.50 PM.jpeg';
import waImg11 from '../assets/WhatsApp Image 2026-08-22 at 5.47.50 PM (1).jpeg';
import waImg12 from '../assets/WhatsApp Image 2026-08-22 at 5.47.51 PM.jpeg';

export default function Gallery() {
  const galleryItems = [
    { 
      title: 'Fabric Rolls Storage', 
      description: 'Organized inventory of wrapped fabric rolls', 
      image: waImg1 
    },
    { 
      title: 'Wrapped Fabric Bundles', 
      description: 'Fabric materials prepared for shipment', 
      image: waImg2 
    },
    { 
      title: 'Warehouse Storage', 
      description: 'Indoor storage facility for organized inventory', 
      image: waImg3 
    },
    { 
      title: 'Large-Scale Inventory', 
      description: 'Extensive fabric roll collection in warehouse', 
      image: waImg4 
    },
    { 
      title: 'Cutting & Processing', 
      description: 'Fabric processing and cutting operations', 
      image: waImg5 
    },
    { 
      title: 'Organized Warehouse', 
      description: 'Systematic storage with colored fabric varieties', 
      image: waImg6 
    },
    { 
      title: 'Fabric Varieties', 
      description: 'Multiple color and material options available', 
      image: waImg7 
    },
    { 
      title: 'Facility Entrance', 
      description: 'Radhekrishna Poly Plast unit location', 
      image: waImg8 
    },
    { 
      title: 'Bulk Storage Facility', 
      description: 'Large warehouse with extensive inventory', 
      image: waImg9 
    },
    { 
      title: 'Roll-Based Inventory', 
      description: 'Systematic tracking of fabric rolls', 
      image: waImg10 
    },
    { 
      title: 'Multiple Warehouse Units', 
      description: 'Distributed storage across facility', 
      image: waImg11 
    },
    { 
      title: 'Dispatch-Ready Materials', 
      description: 'Fabric prepared for outward dispatch', 
      image: waImg12 
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="section-title">
          <h2 className="text-navy-900">Our Facilities & Operations</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Real facility photographs showing our manufacturing, storage, and processing capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl card-shadow h-64 md:h-72">
              <img
                src={item.image}
                alt={`${item.title} - ${item.description}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Real Facility Photography</h3>
          <p className="text-gray-700">
            These photographs showcase our actual manufacturing facility, inventory management systems, 
            and operational capabilities. Our organized approach to fabric storage, processing, and dispatch 
            reflects our commitment to professional service and accurate material handling.
          </p>
        </div>
      </div>
    </section>
  );
}
