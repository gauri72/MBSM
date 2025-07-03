'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import { FaHandPointUp } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Donate', href: '#donate' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Determine active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const navbarHeight = window.innerWidth >= 1024 ? 56 : 48;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight - 100; // 100px offset for better detection
          if (scrollPosition >= sectionTop) {
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
      const navbarHeight = window.innerWidth >= 1024 ? 56 : 48; // 56px for desktop, 48px for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${isScrolled ? 'bg-red-800/95 backdrop-blur-md shadow-lg' : 'bg-red-800'}`}>
      <style jsx>{`
        @keyframes pointUp {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        .pointing-hand {
          animation: pointUp 2s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute top-0 left-0 w-full h-6 sm:h-8 md:h-10 bg-spiritual-orange transform -skew-y-3 origin-top-left -translate-y-full" style={{ 
        WebkitTransform: 'skewY(-3deg) translateY(-100%)',
        transform: 'skewY(-3deg) translateY(-100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      <div className="absolute bottom-0 left-0 w-full h-6 sm:h-8 md:h-10 bg-spiritual-orange transform skew-y-3 origin-bottom-left translate-y-full" style={{ 
        WebkitTransform: 'skewY(3deg) translateY(100%)',
        transform: 'skewY(3deg) translateY(100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-1 sm:p-2 md:p-2 lg:px-4 xl:px-6" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button onClick={() => scrollToSection('hero')} className="-m-1 p-1 sm:-m-1.5 sm:p-1.5 md:-m-2 md:p-2">
            <Logo />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <div className="flex gap-x-4 xl:gap-x-6 2xl:gap-x-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-base xl:text-lg font-semibold leading-6 transition-all duration-300 font-tiro-devanagari whitespace-nowrap px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 ${
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

        {/* Donate Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative">
          <button
            onClick={() => scrollToSection('donate')}
              className="rounded-full bg-white px-4 sm:px-5 xl:px-6 py-1.5 sm:py-2 xl:py-2.5 text-sm xl:text-base font-semibold text-red-800 shadow-sm hover:bg-yellow-400 hover:text-black transition-colors duration-200 font-tiro-devanagari whitespace-nowrap"
          >
            Donate Now
          </button>
            <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 pointing-hand">
              <FaHandPointUp className="h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 text-yellow-400" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-0 z-50 w-full h-screen overflow-y-auto bg-red-800 px-3 sm:px-6 py-4 sm:py-6 sm:max-w-sm md:max-w-md sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button onClick={() => scrollToSection('hero')} className="-m-1 p-1 sm:-m-1.5 sm:p-1.5 md:-m-2 md:p-2">
                <Logo />
              </button>
              <button
                type="button"
                className="-m-2 rounded-md p-2 text-white hover:bg-red-700 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 sm:mt-6 flow-root">
              <div className="-my-4 sm:-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 sm:space-y-3 py-4 sm:py-6 px-0">
                  {navigation.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href.substring(1))}
                        className={`block w-full pl-4 py-3 text-base sm:text-lg md:text-xl font-semibold leading-7 text-left transition-all duration-300 font-tiro-devanagari focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 flex items-center ${
                          isActive 
                            ? 'text-black bg-yellow-400 scale-105 shadow-lg' 
                            : 'text-white hover:text-black hover:bg-yellow-400 hover:scale-105 active:scale-95'
                        }`}
                    >
                      {item.name}
                    </button>
                    );
                  })}
                </div>
                <div className="py-4 sm:py-6 px-0">
                  <div className="relative">
                  <button
                    onClick={() => scrollToSection('donate')}
                      className="block w-full pl-4 py-3 text-base sm:text-lg md:text-xl font-semibold leading-7 text-red-800 bg-white hover:bg-yellow-400 hover:text-black text-left transition-colors duration-200 font-tiro-devanagari"
                  >
                    Donate Now
                  </button>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 pointing-hand">
                      <FaHandPointUp className="h-12 w-12 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 