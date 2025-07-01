import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Events' | 'Wellness' | 'Annadanam' | 'Education';
};

const projects: Project[] = [
  // Events Category
  {
    id: 1,
    title: "Shree Rajabhau Kothari Birthday",
    description: "Annual celebration of Shree Rajabhau Kothari's birthday with spiritual activities and community service.",
    image: "/images/projects/events-1.jpg",
    category: "Events"
  },
  {
    id: 2,
    title: "Maha Shivratri Kavad Yatra",
    description: "Annual Kavad Yatra during Maha Shivratri, bringing devotees together in spiritual celebration.",
    image: "/images/projects/events-2.jpg",
    category: "Events"
  },
  {
    id: 3,
    title: "Hanuman Chalisa Path",
    description: "Regular recitation of Hanuman Chalisa for spiritual upliftment and community bonding.",
    image: "/images/projects/events-3.jpg",
    category: "Events"
  },
  {
    id: 4,
    title: "Hanuman Jayanti",
    description: "Special celebrations and spiritual activities on the auspicious occasion of Hanuman Jayanti.",
    image: "/images/projects/events-4.jpg",
    category: "Events"
  },
  {
    id: 5,
    title: "Shree Shankar Maharaj Samadhi Sohala",
    description: "Annual celebration honoring the Samadhi of Shree Shankar Maharaj with spiritual activities.",
    image: "/images/projects/events-5.jpg",
    category: "Events"
  },
  {
    id: 6,
    title: "Guru Purnima",
    description: "Special celebrations and spiritual activities on the auspicious occasion of Guru Purnima.",
    image: "/images/projects/events-6.jpg",
    category: "Events"
  },
  {
    id: 7,
    title: "Gauri-Ganapati Utsav",
    description: "Annual celebration of Gauri-Ganapati Utsav with traditional rituals and community participation.",
    image: "/images/projects/events-7.jpg",
    category: "Events"
  },
  {
    id: 8,
    title: "Shree Shankar Maharaj Prakat Din",
    description: "Celebration of the appearance day of Shree Shankar Maharaj with special spiritual programs.",
    image: "/images/projects/events-8.jpg",
    category: "Events"
  },
  {
    id: 9,
    title: "Shree Datta Jayanti",
    description: "Special celebrations and spiritual activities on the auspicious occasion of Datta Jayanti.",
    image: "/images/projects/events-9.jpg",
    category: "Events"
  },
  {
    id: 10,
    title: "Dattak Gaav Yojana",
    description: "Community development program focusing on spiritual and social upliftment of villages.",
    image: "/images/projects/events-10.jpg",
    category: "Events"
  },
  {
    id: 11,
    title: "Bhajan Sandhya",
    description: "Regular spiritual gatherings with devotional music and community participation.",
    image: "/images/projects/events-11.jpg",
    category: "Events"
  },

  // Education Category
  {
    id: 12,
    title: "School Kit Distribution",
    description: "Distribution of essential school supplies to students in various schools to support their education.",
    image: "/images/projects/education-1.jpg",
    category: "Education"
  },
  {
    id: 13,
    title: "Parental Support Program",
    description: "Support program for parents of secondary and higher secondary students to enhance educational outcomes.",
    image: "/images/projects/education-2.jpg",
    category: "Education"
  },
  {
    id: 14,
    title: "Counseling Services",
    description: "Professional counseling services provided to those in need of guidance and support.",
    image: "/images/projects/education-3.jpg",
    category: "Education"
  },

  // Wellness Category
  {
    id: 15,
    title: "Tricycle Distribution",
    description: "Free tricycle distribution program for differently-abled individuals to enhance mobility.",
    image: "/images/projects/wellness-1.jpg",
    category: "Wellness"
  },
  {
    id: 16,
    title: "Free Medical Treatment",
    description: "Providing free medical treatment and healthcare services to those in need.",
    image: "/images/projects/wellness-2.jpg",
    category: "Wellness"
  },
  {
    id: 17,
    title: "Natural Calamity Support",
    description: "Trust's active contribution and support during natural calamities and emergencies.",
    image: "/images/projects/wellness-3.jpg",
    category: "Wellness"
  },
  {
    id: 18,
    title: "Weekly Medical Service",
    description: "12 years of continuous weekly medical service at Shri Kshetra Agadgaon.",
    image: "/images/projects/wellness-4.jpg",
    category: "Wellness"
  },
  {
    id: 19,
    title: "Blood Donation Camp",
    description: "Annual blood donation camp organized on the birth anniversary of Revered Guru Shri Vishweshwar Swami Maharaj.",
    image: "/images/projects/wellness-5.jpg",
    category: "Wellness"
  },
  {
    id: 20,
    title: "Medical Guidance",
    description: "Providing medical guidance and support to those in need of healthcare assistance.",
    image: "/images/projects/wellness-6.jpg",
    category: "Wellness"
  },

  // Annadanam Category
  {
    id: 21,
    title: "Sankashti Chaturthi Khichdi",
    description: "Regular distribution of Sabudana Khichdi at Shri Vishal Ganpati, Maliwada on every Sankashti Chaturthi.",
    image: "/images/projects/annadanam-1.jpg",
    category: "Annadanam"
  },
  {
    id: 22,
    title: "Shankar Gita Recitation",
    description: "Monthly Shankar Gita recitation and Palkhi procession on Durga Ashtami at the Math.",
    image: "/images/projects/annadanam-2.jpg",
    category: "Annadanam"
  },
  {
    id: 23,
    title: "Gaushala Support",
    description: "Regular fodder distribution for Arunoday Gaushala to support animal welfare.",
    image: "/images/projects/annadanam-3.jpg",
    category: "Annadanam"
  },
  {
    id: 24,
    title: "Grocery Distribution",
    description: "Regular distribution of essential groceries to those in need in the community.",
    image: "/images/projects/annadanam-4.jpg",
    category: "Annadanam"
  },
  {
    id: 25,
    title: "Weekly Mahaprasad",
    description: "Weekly offering of Mahaprasad at the Math every Thursday for devotees.",
    image: "/images/projects/annadanam-5.jpg",
    category: "Annadanam"
  },
  {
    id: 26,
    title: "Food Donation Program",
    description: "Regular food donation program for the needy, following the motto 'Annadan is the Supreme Donation'.",
    image: "/images/projects/annadanam-6.jpg",
    category: "Annadanam"
  },
  {
    id: 27,
    title: "Snehalaya Support",
    description: "Special Mahaprasad arrangements for orphaned children at Snehalaya.",
    image: "/images/projects/annadanam-7.jpg",
    category: "Annadanam"
  },
  {
    id: 28,
    title: "Police Department Support",
    description: "Special support services for the Police Department during public festivals.",
    image: "/images/projects/annadanam-8.jpg",
    category: "Annadanam"
  },
  {
    id: 29,
    title: "Ganesh Festival Service",
    description: "Service activities for devotees and police administration during Ganesh Festival.",
    image: "/images/projects/annadanam-9.jpg",
    category: "Annadanam"
  },
  {
    id: 30,
    title: "Kushtdham Sweet Meal",
    description: "Special sweet meal arrangements at Kushtdham on every festival occasion of the Math.",
    image: "/images/projects/annadanam-10.jpg",
    category: "Annadanam"
  }
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="bg-yellow-400 min-h-screen flex items-center py-8 sm:py-12 relative z-0" id="projects">
      <div className="absolute top-0 left-0 w-full h-10 bg-spiritual-orange transform skew-y-3 origin-top-left -translate-y-full" style={{ 
        WebkitTransform: 'skewY(3deg) translateY(-100%)',
        transform: 'skewY(3deg) translateY(-100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-spiritual-orange transform -skew-y-3 origin-bottom-left translate-y-full" style={{ 
        WebkitTransform: 'skewY(-3deg) translateY(100%)',
        transform: 'skewY(-3deg) translateY(100%)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[80vh] w-full">
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight sm:text-6xl mb-4 sm:mb-6">
            Our Projects
          </h2>
          <div className="text-base sm:text-lg text-black">
            <p>Each project is a testament to our commitment to serving humanity with compassion and dedication.</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 w-full max-w-3xl px-4">
          {['All', 'Events', 'Wellness', 'Annadanam', 'Education'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-red-800 text-white shadow-lg'
                  : 'bg-white text-red-800 hover:bg-red-100 shadow-md'
              }`}
              style={{ 
                WebkitTransition: 'all 0.2s ease-in-out',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Slider */}
        <div className="w-full max-w-6xl px-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              enabled: true,
              hideOnClick: true,
              disabledClass: 'opacity-30 cursor-not-allowed',
              lockClass: 'cursor-not-allowed',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="projects-slider"
            style={{
              '--swiper-navigation-color': '#8B0000',
              '--swiper-navigation-size': '24px',
              WebkitTransform: 'translate3d(0,0,0)',
              transform: 'translate3d(0,0,0)',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitPerspective: '1000',
              perspective: '1000'
            } as React.CSSProperties}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div 
                  className="flex flex-col items-center text-center bg-red-800 rounded-2xl shadow-xl overflow-hidden p-4 sm:p-6 hover:scale-105 transition-transform duration-200 h-[350px] sm:h-[400px]"
                  style={{ 
                    WebkitTransform: 'translate3d(0,0,0)',
                    transform: 'translate3d(0,0,0)',
                    WebkitTransition: 'transform 0.2s ease-in-out',
                    transition: 'transform 0.2s ease-in-out',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    WebkitPerspective: '1000',
                    perspective: '1000'
                  }}
                >
                  <div className="relative w-full h-40 sm:h-48 mb-3 sm:mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: 'translate3d(0,0,0)',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        WebkitPerspective: '1000',
                        perspective: '1000'
                      }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-200 line-clamp-3">{project.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 