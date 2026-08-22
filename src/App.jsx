import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import FabricVarieties from './components/FabricVarieties';
import Process from './components/Process';
import Capabilities from './components/Capabilities';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Enquiry from './components/Enquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <FabricVarieties />
      <Process />
      <Capabilities />
      <WhyChooseUs />
      <Gallery />
      <Enquiry />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
