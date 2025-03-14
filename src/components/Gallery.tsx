import React, { useEffect, useState } from 'react';
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

export function Gallery() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-light">
          <p className="text-body-small tracking-wider mb-4">OUR CRAFT</p>
          <h2 className="text-3xl md:text-h2 mb-2">Moments Captured in Glass</h2>
          <p className="text-light/80 max-w-2xl">Experience the artistry and elegance of our craft cocktails through these captured moments.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative">
          {galleryImages.map((image, index) => {
            let colSpan = "col-span-12 md:col-span-6";
            let aspectRatio = "aspect-[4/3]";
            
            // First image spans full width
            if (index === 0) {
              colSpan = "col-span-12";
              aspectRatio = "aspect-[21/9]";
            }
            // Last image spans full width if odd number of images
            else if (index === galleryImages.length - 1 && galleryImages.length % 2 !== 0) {
              colSpan = "col-span-12 md:col-span-12";
            }
            
            const parallaxOffset = (scrollPosition * 0.03) * (index % 2 === 0 ? 1 : -1);

            return (
              <div 
                key={index} 
                className={`relative group ${colSpan} ${aspectRatio} overflow-hidden rounded-lg`}
              >
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/50 transition-colors duration-500 z-10" />
                <div 
                  className="absolute inset-0"
                  style={{
                    transform: `translateY(${parallaxOffset}px)`,
                    transition: 'transform 0.2s ease-out'
                  }}
                >
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-light text-sm md:text-base font-medium tracking-wide">{image.alt}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center text-light hover:text-light/80 transition-colors">
            <span>Book Your Premium Bar Experience</span>
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}