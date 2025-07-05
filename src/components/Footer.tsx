'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const footerNavigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Donate', href: '#donate' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = footerNavigation.map(item => item.href.substring(1));
      const navbarHeight = window.innerWidth >= 1024 ? 88 : 72;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight - 100; // 100px offset for better detection
          if (window.scrollY >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth >= 1024 ? 88 : 72; // 88px for desktop, 72px for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-red-800 text-white py-8 sm:py-12 relative z-10">
      {/* Top Black Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-black z-20"></div>

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-10 bg-spiritual-orange transform skew-y-3 origin-top-left -translate-y-full"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 sm:mb-8">
          {/* Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <button onClick={() => scrollToSection('hero')} className="cursor-pointer">
              <Logo />
            </button>
          </div>

          {/* Page Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-400 font-tiro-devanagari text-center">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-10 gap-y-3 mb-4 md:mb-0">
              {footerNavigation.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                    className={`text-base sm:text-lg font-semibold leading-6 transition-all duration-300 font-tiro-devanagari px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 ${
                      isActive 
                        ? 'text-black bg-yellow-400 scale-110 shadow-lg' 
                        : 'text-white hover:text-black hover:bg-yellow-400 hover:scale-110 active:scale-95'
                    }`}
              >
                {item.name}
              </button>
                );
              })}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://wa.me/917588797788" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-200">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/mangal_bhakta_seva_mandal_?igsh=NDVnb3JhendmcmFs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-200">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </a>
            <a href="https://youtube.com/@mangalbhaktasevamandaltrus2349?si=6tChz6Reydcurlzf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-200">
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Designed By */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm leading-5 text-gray-300 font-tiro-devanagari">
            &copy; {new Date().getFullYear()} MBSM Trust. All rights reserved.
          </p>
          <p className="mt-2 text-xs sm:text-sm leading-5 text-gray-300 font-tiro-devanagari">
            Designed and developed by Gauri Kolekar
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-spiritual-orange transform -skew-y-3 origin-bottom-left"></div>
    </footer>
  );
} 