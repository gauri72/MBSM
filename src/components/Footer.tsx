'use client';

import Logo from './Logo';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const footerNavigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Donate', href: '#donate' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
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
          <div className="flex flex-wrap justify-center md:flex-grow md:justify-center gap-x-6 sm:gap-x-8 gap-y-2 mb-4 md:mb-0">
            {footerNavigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-sm sm:text-base font-semibold leading-6 text-white hover:text-yellow-400 transition-colors duration-200 font-tiro-devanagari"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 sm:space-x-6">
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