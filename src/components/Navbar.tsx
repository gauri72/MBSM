'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaHandPointUp } from 'react-icons/fa';
import Logo from './Logo';

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
  const [isPointingUp, setIsPointingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const navbarHeight = window.innerWidth >= 1024 ? 88 : 72;
          return rect.top <= navbarHeight && rect.bottom > navbarHeight;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Periodic pointing animation
    const interval = setInterval(() => {
      setIsPointingUp(true);
      setTimeout(() => setIsPointingUp(false), 800); // Point up for 0.8 seconds
    }, 2000); // Every 2 seconds

    return () => clearInterval(interval);
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
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-red-800/95 backdrop-blur-md shadow-lg' : 'bg-red-800'}`}>
      <style jsx>{`
        @keyframes pulse-flash {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        .donate-button {
          animation: pulse-flash 2s infinite;
        }
      `}</style>
      <div className="absolute top-0 left-0 w-full h-8 sm:h-10 bg-spiritual-orange transform -skew-y-3 origin-top-left -translate-y-full" style={{ 
        WebkitTransform: 'skewY(-3deg) translateY(-100%)',
        transform: 'skewY(-3deg) translateY(-100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-10 bg-spiritual-orange transform skew-y-3 origin-bottom-left translate-y-full" style={{ 
        WebkitTransform: 'skewY(3deg) translateY(100%)',
        transform: 'skewY(3deg) translateY(100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 sm:p-3 md:p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button onClick={() => scrollToSection('hero')} className="-m-1 p-1 sm:-m-1.5 sm:p-1.5">
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
            <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <div className="flex gap-x-6 xl:gap-x-8 2xl:gap-x-10">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-base xl:text-lg 2xl:text-xl font-semibold leading-6 px-4 py-2 rounded-lg transition-all duration-200 font-tiro-devanagari whitespace-nowrap ${
                    isActive 
                      ? 'bg-yellow-400 text-black shadow-lg' 
                      : 'text-white hover:bg-yellow-400 hover:text-black hover:shadow-lg'
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
              className="rounded-md bg-white px-4 sm:px-5 xl:px-6 py-2 sm:py-2.5 xl:py-3 text-base xl:text-lg font-semibold text-red-800 shadow-sm hover:bg-yellow-400 hover:text-black transition-all duration-200 font-tiro-devanagari whitespace-nowrap"
            >
              Donate Now
            </button>
            {/* Permanent hand with periodic pointing animation */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <FaHandPointUp 
                className={`text-yellow-400 transition-transform duration-300 ${
                  isPointingUp ? 'text-4xl -translate-y-2' : 'text-3xl'
                }`}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-red-800 px-4 sm:px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button onClick={() => scrollToSection('hero')} className="-m-1 p-1 sm:-m-1.5 sm:p-1.5">
                <Logo />
              </button>
              <button
                type="button"
                className="-m-2 rounded-md p-2 text-white hover:bg-red-700 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href.substring(1))}
                        className={`-mx-3 block rounded-lg px-3 py-3 text-lg sm:text-xl font-semibold leading-7 w-full text-left transition-all duration-200 font-tiro-devanagari ${
                          isActive 
                            ? 'bg-yellow-400 text-black' 
                            : 'text-white hover:bg-yellow-400 hover:text-black'
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
                <div className="py-6">
                  <div className="relative">
                    <button
                      onClick={() => scrollToSection('donate')}
                      className="-mx-3 block rounded-lg px-3 py-3 text-lg sm:text-xl font-semibold leading-7 text-white hover:bg-yellow-400 hover:text-black w-full text-left transition-all duration-200 font-tiro-devanagari"
                    >
                      Donate Now
                    </button>
                    {/* Permanent hand with periodic pointing animation for mobile */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <FaHandPointUp 
                        className={`text-yellow-400 transition-transform duration-300 ${
                          isPointingUp ? 'text-4xl -translate-y-2' : 'text-3xl'
                        }`}
                      />
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