import React from 'react';
import { ChevronRight, Facebook, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-black text-light py-12 md:py-16 min-h-[300px] flex flex-col">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Logo and Copyright */}
          <div className="md:col-span-4 text-center md:text-left">
            <img 
              src="https://static.wixstatic.com/media/c73eb8_19ca302ac5444fea96040bf0a6c5b2ef~mv2.png" 
              alt="Sip Society Logo" 
              className="h-24 w-auto mx-auto md:mx-0 mb-6"
            />
            <p className="text-light/60 text-sm hidden md:block">
              Charlotte, North Carolina<br />
              Available 7 days a week
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold mb-6 text-center">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="flex items-center justify-center group text-light/80 hover:text-light transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold mb-6 text-center">Connect With Us</h3>
            <div className="flex justify-center space-x-8">
              <a href="https://www.facebook.com/profile.php?id=61568167800027" className="text-light/80 hover:text-[#D4AF37] transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/sipsociety24/" className="text-light/80 hover:text-[#D4AF37] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@sipsociety24" className="text-light/80 hover:text-[#D4AF37] transition-colors duration-300">
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-6 text-light/60 text-sm text-center md:hidden">
              Charlotte, North Carolina<br />
              Available 7 days a week
            </p>
          </div>
        </div>
        
        <div className="w-full h-px bg-light/10 my-8" />
        
        <p className="text-light/80 text-sm text-center">
          © 2025 Sip Society. All rights reserved. <br className="md:hidden" />
          Designed by <a href="https://www.sitesonpolaris.com" className="text-light hover:text-[#D4AF37] transition-colors">Sites on Polaris</a>
        </p>
      </div>
    </footer>
  );
}