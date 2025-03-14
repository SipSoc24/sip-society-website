import React from 'react';
import { Hero } from './components/Hero';
import { ParallaxImage } from './components/ParallaxImage';
import { About } from './components/About';
import { Gallery3 } from './components/Gallery3';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ParallaxImage />
      <About />
      <Gallery3 />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;