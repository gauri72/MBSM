import Image from 'next/image';
import { FaBullseye, FaEye } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#8B0000] min-h-screen flex items-center py-12 sm:py-16 px-4 sm:px-8 md:px-16 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <div className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            <p>Guided by selfless service, we are dedicated to uplifting every soul and building a harmonious, compassionate community rooted in spiritual values.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          {/* Left: Mission & Vision as cards */}
          <div className="space-y-8 sm:space-y-10 flex flex-col items-center">
            {/* Mission Card */}
            <div className="w-full max-w-xl bg-yellow-400 rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-800 text-yellow-400 text-2xl sm:text-3xl">
                  <FaBullseye />
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-black">Mission</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-black text-center">
                To serve humanity through spiritual devotion and selfless giving.
                We strive to uplift those in need, foster compassion, and build a supportive community.
              </p>
            </div>
            {/* Vision Card */}
            <div className="w-full max-w-xl bg-yellow-400 rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-800 text-yellow-400 text-2xl sm:text-3xl">
                  <FaEye />
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-black">Vision</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-black text-center">
                To create a world where spiritual values inspire collective well-being and harmony.
                We envision a society rooted in kindness, wisdom, and service to others.
              </p>
            </div>
          </div>
          {/* Right: Image with badge */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-image-placeholder.jpg"
                alt="About Us Image"
                fill
                className="object-cover"
                priority
              />
              {/* Since 1985 Badge */}
              <span className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-yellow-400 text-[#8B0000] font-bold px-5 sm:px-7 py-2 sm:py-3 rounded-full shadow-lg text-lg sm:text-xl">SINCE 1985</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 