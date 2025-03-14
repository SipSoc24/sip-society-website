import React from 'react';
import { ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: "https://static.wixstatic.com/media/c73eb8_c6369a04beea420cbb4a617b3f26a705~mv2.jpeg",
    alt: "Signature cocktail with garnish"
  },
  {
    url: "https://static.wixstatic.com/media/c73eb8_305d6f8de87e48d6b14d28ada9be943e~mv2.jpeg",
    alt: "Bartender preparing drinks"
  },
  {
    url: "https://static.wixstatic.com/media/c73eb8_eb1fcb4728224c01b5e591787abdfb84~mv2.jpeg",
    alt: "Elegant cocktail presentation"
  },
  {
    url: "https://static.wixstatic.com/media/c73eb8_f6dd44728c794a7e98fb7be7657c9a4a~mv2.jpg",
    alt: "Bar setup at event"
  },
  {
    url: "https://static.wixstatic.com/media/c73eb8_b7ef6b511a084feeb92700c457921bca~mv2.jpeg",
    alt: "Mixologist crafting cocktail"
  }
];

export function Gallery3() {
  return (
    <section className="py-16 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-light">
          <p className="text-body-small tracking-wider mb-4">OUR CRAFT</p>
          <h2 className="text-3xl md:text-h2 mb-2">Crafting Moments</h2>
          <p className="text-light/80 max-w-2xl">Every drink tells a story, every service creates a memory.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Large Feature Image */}
          <div className="md:col-span-2 md:row-span-2 relative group">
            <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-full">
              <img 
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-light text-xl font-medium">{galleryImages[0].alt}</p>
                <div className="w-12 h-0.5 bg-[#D4AF37] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </div>
          </div>

          {/* Top Right Vertical Image */}
          <div className="md:col-span-2 relative group">
            <div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={galleryImages[1].url}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/50 transition-colors duration-500" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-light">{galleryImages[1].alt}</p>
              </div>
            </div>
          </div>

          {/* Bottom Right Images */}
          {galleryImages.slice(2).map((image, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/50 transition-colors duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-light">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-light hover:text-[#D4AF37] transition-colors group"
          >
            <span>Experience Our Craft</span>
            <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}