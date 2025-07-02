import { useState } from 'react';
import { FaRobot, FaTimes, FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "What is Mangal Bhakta Seva Mandal Trust (MBSM Trust)?",
    answer: "MBSM Trust is a non-profit organization committed to serving underprivileged communities through food seva, education support, healthcare aid, and spiritual activities."
  },
  {
    question: "What does your tagline \"Where there's less, we give our best\" mean?",
    answer: "It reflects our mission to serve selflessly and give our utmost effort wherever there is a need—especially in communities with limited resources."
  },
  {
    question: "How can I contribute or donate to the trust?",
    answer: "You can donate online through our secure donation portal or contact us directly for bank details and physical donation options."
  },
  {
    question: "What types of seva (service) does MBSM Trust perform?",
    answer: "We organize food distribution (Annadan), support education for needy children, arrange health camps, and volunteer at spiritual and community events."
  },
  {
    question: "Are donations to MBSM Trust tax-exempt?",
    answer: "Yes, donations are eligible for tax exemption under Section 80G of the Income Tax Act (as applicable). A donation receipt is provided for all contributions."
  },
  {
    question: "Can I volunteer for your events and seva programs?",
    answer: "Absolutely! We welcome volunteers for our various initiatives. You can fill out the volunteer form on our website to get started."
  },
  {
    question: "What regions or communities do you currently serve?",
    answer: "We primarily serve communities in Maharashtra, especially in areas where spiritual events, public gatherings, and poverty relief efforts are needed."
  },
  {
    question: "How do you ensure transparency in fund usage?",
    answer: "We maintain detailed records of all donations and expenses and provide annual reports. Supporters can request reports anytime."
  },
  {
    question: "Can I sponsor a specific cause or event?",
    answer: "Yes, we allow sponsorships for events such as food seva, student support, and festival arrangements. Please reach out via our Contact page."
  },
  {
    question: "How can I stay updated with your latest activities?",
    answer: "Follow us on social media, subscribe to our newsletter, or check the \"Updates\" section on our website for the latest news and upcoming events."
  }
];

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 text-red-800 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200 border-2 border-red-800"
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-red-800 text-white p-4">
            <h3 className="text-lg font-semibold">Ask MBSM Trust AI</h3>
            <p className="text-sm text-white/80">Get instant answers to your questions</p>
          </div>

          {/* FAQ List */}
          <div className="max-h-[400px] overflow-y-auto p-4">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
                  className="w-full text-left bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-500 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="font-medium">{faq.question}</span>
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${
                      selectedQuestion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {selectedQuestion === index && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget; 