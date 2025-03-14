import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative h-[80vh] md:h-[75vh]">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Professional bartender mixing cocktails" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <nav className="relative z-10 px-6 h-[80vh] md:h-[75vh] flex flex-col backdrop-blur-md bg-dark/70">
        <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute top-4 right-4 text-light z-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo and Brand Name */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <img 
              src="https://static.wixstatic.com/media/c73eb8_19ca302ac5444fea96040bf0a6c5b2ef~mv2.png" 
              alt="Sip Society Logo"
              className="h-24 md:h-32 w-auto"
            />
            <h1 className="text-6xl md:text-[180px] text-light leading-none tracking-tight text-center md:text-left">
              SIP SOCIETY
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Tagline and CTA */}
            <div className="text-center md:text-left mt-auto mb-8">
              <h3 className="text-light text-xl md:text-subtitle mb-4 max-w-md mx-auto md:mx-0">
                Raise the Bar at Your Event with Expert Mobile Bartending
              </h3>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-[#D4AF37] text-dark font-semibold rounded-full hover:bg-[#C4A028] transition-colors duration-300 group"
              >
                <span>Book Now</span>
                <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Menu Items */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-dark/95 md:bg-dark/0 mt-auto`}>
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 items-center md:items-start pt-5">
                  {[
                    { href: "#services", label: "Services" },
                    { href: "#portfolio", label: "Portfolio" },
                    { href: "#testimonials", label: "Testimonials" },
                    { href: "#contact", label: "Contact" }
                  ].map((item) => (
                    <a 
                      key={item.href} 
                      href={item.href} 
                      className="text-light text-body relative group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-light transform scale-x-0 transition-transform duration-300 ease-out origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
                      </span>
                    </a>
                  ))}
                </div>
                <div className="text-light text-center md:text-right mt-6 md:mt-0">
                  <p className="text-body-small">Mon-Sun</p>
                  <p className="text-body-small">18:00-late</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}