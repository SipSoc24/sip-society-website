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

export function Gallery2() {
  return (
    <section className="py-16 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-light">
          <p className="text-body-small tracking-wider mb-4">OUR CRAFT</p>
          <h2 className="text-3xl md:text-h2 mb-2">The Art of Mixology</h2>
          <p className="text-light/80 max-w-2xl">Where precision meets passion in every pour.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 relative">
          {/* Featured Image - Spans 2 columns */}
          <div className="col-span-2 row-span-2 relative group rounded-2xl overflow-hidden">
            <img 
              src={galleryImages[0].url}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-light text-xl font-medium">{galleryImages[0].alt}</p>
            </div>
          </div>

          {/* Right Column Images */}
          <div className="col-span-1 row-span-2 space-y-8">
            {galleryImages.slice(1, 3).map((image, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row Images */}
          {galleryImages.slice(3).map((image, index) => (
            <div key={index} className="col-span-1 relative group rounded-xl overflow-hidden">
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-light hover:text-light/80 transition-colors group"
          >
            <span>Book Your Premium Bar Experience</span>
            <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}