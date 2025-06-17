import Image from 'next/image';

const DonateSection = () => {
  return (
    <section id="donate" className="w-full min-h-screen bg-[#8B0000] py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Donate Us</h2>
          <div className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            <p className="mb-4">Your generous contribution helps us continue our spiritual mission and serve the community.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/donate/gallery-${index}.jpg`}
                  alt={`Gallery image ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* QR Code Card */}
          <div className="bg-yellow-400 p-6 sm:p-8 rounded-xl shadow-2xl">
            <div className="aspect-square relative max-w-[250px] sm:max-w-[300px] mx-auto">
              <Image
                src="/donate/qr-code.png"
                alt="Donation QR Code"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 250px, 300px"
              />
            </div>
            <p className="text-black text-center mt-4 text-base sm:text-lg font-semibold">
              Scan to donate securely
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection; 