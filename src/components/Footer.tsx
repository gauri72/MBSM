'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Essentials', href: '#essentials' },
  { name: 'Donate', href: '#donate' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const navbarHeight = window.innerWidth >= 1024 ? 56 : 48;
      
      // Find the current active section
      let currentActiveSection = 'hero';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight - 150; // Increased offset for better detection
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentActiveSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth >= 1024 ? 56 : 48; // 56px for desktop, 48px for mobile
      const elementTop = element.offsetTop;
      
      // Scroll to the beginning of the section, accounting for navbar height
      const scrollPosition = elementTop - navbarHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-red-800 text-white py-8 sm:py-12 relative z-10">
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        

        
        .footer-logo-animation {
          animation: scaleIn 0.8s ease-out;
        }
        
        .footer-links-animation {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        
        .footer-social-animation {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
        
        .footer-copyright-animation {
          animation: slideInFromLeft 0.8s ease-out 0.9s both;
        }
        
        .footer-designed-animation {
          animation: slideInFromRight 0.8s ease-out 1.2s both;
        }
        
        .logo-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .logo-hover:hover {
          animation: pulse 0.6s ease-in-out;
          transform: scale(1.05);
        }
        
        .nav-link-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .nav-link-hover:hover {
          animation: bounce 0.6s ease-in-out;
        }
        
        .social-icon-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .social-icon-hover:hover {
          animation: rotate 0.6s ease-in-out;
          transform: scale(1.2);
        }
        

        
        .copyright-text-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .copyright-text-hover:hover {
          transform: scale(1.02);
        }
      `}</style>
      {/* Top Black Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-black z-20"></div>

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-10 bg-spiritual-orange transform skew-y-3 origin-top-left -translate-y-full"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 sm:mb-8">
          {/* Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0 footer-logo-animation">
            <button onClick={() => scrollToSection('hero')} className="cursor-pointer logo-hover">
              <Logo />
            </button>
          </div>

          {/* Page Links */}
          <div className="flex flex-col items-center footer-links-animation">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-400 font-tiro-devanagari text-center">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-10 gap-y-3 mb-4 md:mb-0">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                    className={`text-base sm:text-lg font-semibold leading-6 transition-all duration-300 font-tiro-devanagari px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 nav-link-hover ${
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
          <div className="flex space-x-4 sm:space-x-6 footer-social-animation">
            <a href="https://wa.me/917588797788" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-200 social-icon-hover">
              <span className="sr-only">WhatsApp</span>
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mangal_bhakta_seva_mandal_?igsh=NDVnb3JhendmcmFs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-200 social-icon-hover">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@mangalbhaktasevamandaltrus2349?si=6tChz6Reydcurlzf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-200 social-icon-hover">
              <span className="sr-only">YouTube</span>
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Designed By */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm leading-5 text-gray-300 font-tiro-devanagari footer-copyright-animation copyright-text-hover">
            &copy; {new Date().getFullYear()} MBSM Trust. All rights reserved.
          </p>
          <p className="mt-2 text-xs sm:text-sm leading-5 text-gray-300 font-tiro-devanagari footer-designed-animation copyright-text-hover">
            Designed and developed by Gauri Kolekar
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-spiritual-orange transform -skew-y-3 origin-bottom-left"></div>
    </footer>
  );
} 