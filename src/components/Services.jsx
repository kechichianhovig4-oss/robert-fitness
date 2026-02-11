import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handler
  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Services data - 20 services, 10 per column
  const servicesLeftColumn = [
    { id: 1, name: "Neck & Scalene Release", duration: "30 min", price: "$65", description: "Alleviate tension from desk work and driving.", color: "blue" },
    { id: 2, name: "Shoulder & Rotator Cuff Focus", duration: "45 min", price: "$85", description: "For swimmers, throwers, and anyone with overhead strain.", color: "teal" },
    { id: 3, name: "Low Back & Gluteal Relief", duration: "45 min", price: "$85", description: "Target the root of sitting-related and athletic low back pain.", color: "orange" },
    { id: 4, name: "IT Band & Quadriceps Flow", duration: "45 min", price: "$85", description: "Essential maintenance for runners and cyclists.", color: "blue" },
    { id: 5, name: "Athletic Performance Tune-Up", duration: "60 min", price: "$110", description: "Pre-event dynamic massage to prime muscles and mind.", color: "teal" },
    { id: 6, name: "Deep Tissue Recovery", duration: "75 min", price: "$135", description: "Break down chronic tension and adhesions in major muscle groups.", color: "orange" },
    { id: 7, name: "Post-Event Recovery Massage", duration: "60 min", price: "$110", description: "Gentle, flushing techniques to accelerate recovery after competition.", color: "blue" },
    { id: 8, name: "Myofascial Release Session", duration: "60 min", price: "$115", description: "Sustained pressure to release the body's connective tissue network.", color: "teal" },
    { id: 9, name: "Hamstring & Calf Specialist", duration: "45 min", price: "$85", description: "Increase flexibility and relieve tightness in the posterior leg.", color: "orange" },
    { id: 10, name: "Forearm & Grip Recovery", duration: "30 min", price: "$60", description: "For climbers, golfers, and manual laborers to prevent overuse.", color: "blue" }
  ];

  const servicesRightColumn = [
    { id: 11, name: "Sports Massage & Assisted Stretch", duration: "75 min", price: "$140", description: "Combines massage with PNF stretching for integrated improvement.", color: "teal" },
    { id: 12, name: "Full-Body Maintenance", duration: "90 min", price: "$165", description: "Comprehensive session for total-body balance and function.", color: "orange" },
    { id: 13, name: "Injury Rehab Consultation & Massage", duration: "90 min", price: "$180", description: "Assessment and focused work on a specific injury site.", color: "blue" },
    { id: 14, name: "Two-Area Intensive (Back/Hips or Neck/Shoulders)", duration: "120 min", price: "$225", description: "Extended, detailed work on two primary problem areas.", color: "teal" },
    { id: 15, name: "Chronic Pain Management Session", duration: "90 min", price: "$185", description: "Multi-technique approach for long-term pain resolution.", color: "orange" },
    { id: 16, name: "Advanced Myofascial & Neuromuscular Therapy", duration: "120 min", price: "$250", description: "Deep, systematic exploration of fascial and trigger point restrictions.", color: "blue" },
    { id: 17, name: "Pre-Competition Peak Tune-Up", duration: "120 min", price: "$240", description: "The ultimate full-body preparation for a major event.", color: "teal" },
    { id: 18, name: "Therapeutic Back, Hip & Pelvis Intensive", duration: "120 min", price: "$235", description: "For deep-seated issues in the core kinetic chain.", color: "orange" },
    { id: 19, name: "Complete Athlete Overhaul", duration: "180 min", price: "$375", description: "Extensive, split-session evaluation and treatment of the entire body.", color: "blue" },
    { id: 20, name: "Ultimate Recovery & Regeneration", duration: "180 min", price: "$395", description: "Pinnacle recovery combining all modalities after extreme exertion.", color: "teal" }
  ];

  const getColorClass = (color) => {
    switch(color) {
      case 'blue': return 'bg-blue-600';
      case 'teal': return 'bg-teal-500';
      case 'orange': return 'bg-orange-500';
      default: return 'bg-blue-600';
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Add custom styles for colors */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body {
          font-family: "Lexend", sans-serif;
          background-color: white;
          color: #1a1a1a;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      {/* Header from Contact component */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 md:px-10 py-4 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 text-orange-500">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900">William's Sports Massage</h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('/')}
            className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('/Services')}
            className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('/About')}
            className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('/Contact')}
            className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
          >
            Contact
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('/Contact')}
            className="hidden md:flex min-w-[120px] items-center justify-center rounded-lg h-10 px-5 bg-orange-500 text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform active:scale-95"
          >
            Contact Now
          </button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
              <button 
                onClick={() => handleNavClick('/')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('/Services')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-200"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('/About')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-200"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('/Contact')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact
              </button>
            </div>
            <button 
              onClick={() => handleNavClick('/Contact')}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-all"
            >
              <span className="truncate">Contact Now</span>
            </button>
          </div>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Hero Section (Split-screen) */}
        <section className="py-10">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch min-h-[400px]">
            {/* Left: High-quality close-up of massage hands */}
            <div className="flex-1 rounded-xl bg-center bg-cover min-h-[300px] shadow-lg" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0ADLe5iH4yRmKSqNX4o6cDRVrKrSX-isXSKBE9SAdvNRdqP_3j4dSCMCe3ZCbiZJzOJ504l9u25_CYGQ4uI9sfLhPEk7w37AD3T_2FK8iQCFqvab8bYxKaeXizYRrquzGh0NVEH-aJreQ6N2ZrJEEwb8V2Yg9yvCMVYDVGiF74thmEKihnqpuHMciK8y9966bg2vx3Avc9r_06TfOq0prcIscN1I03cMy_AohUocGwxB4Y1aWAHBls1ROjnnSijVMx7x-jmW9N1dC')` }}>
            </div>
            
            {/* Right: Headline and value prop */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
                  Precise<br/>Treatments.<br/><span className="text-orange-500">Clear Pricing.</span>
                </h1>
                <p className="text-xl font-medium text-gray-600">
                  No Memberships. No Packages. Just Results.
                </p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-8">
          <p className="text-lg font-medium border-l-4 border-orange-500 pl-4 mb-10 max-w-2xl text-gray-700">
            All sessions include consultation, postural assessment, and personalized recovery plan.
          </p>
        </section>

        {/* Two-Column Services Menu */}
        <section className="py-16">
          <h2 className="text-3xl font-black tracking-tight mb-12 text-gray-900 text-center">The Complete Menu</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
            {/* Left Column - 10 Services */}
            {servicesLeftColumn.map((service) => (
              <div key={service.id} className="group flex items-center justify-between p-6 rounded-xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-orange-300 transition-all cursor-pointer shadow-sm hover:shadow-md">
                <div className="flex flex-col gap-1 overflow-hidden flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-3 h-3 rounded-full ${getColorClass(service.color)} shrink-0`}></span>
                    <h4 className="font-bold text-lg truncate text-gray-900">{service.name}</h4>
                    <span className="bg-gray-100 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-gray-600 border border-gray-200">{service.duration}</span>
                  </div>
                  <p className="text-sm italic text-gray-600">{service.description}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <span className="text-2xl font-black text-orange-500">{service.price}</span>
                  <div className="size-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Right Column - 10 Services */}
            {servicesRightColumn.map((service) => (
              <div key={service.id} className="group flex items-center justify-between p-6 rounded-xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-orange-300 transition-all cursor-pointer shadow-sm hover:shadow-md">
                <div className="flex flex-col gap-1 overflow-hidden flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-3 h-3 rounded-full ${getColorClass(service.color)} shrink-0`}></span>
                    <h4 className="font-bold text-lg truncate text-gray-900">{service.name}</h4>
                    <span className="bg-gray-100 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-gray-600 border border-gray-200">{service.duration}</span>
                  </div>
                  <p className="text-sm italic text-gray-600">{service.description}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <span className="text-2xl font-black text-orange-500">{service.price}</span>
                  <div className="size-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

       

        {/* Quick FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Quick FAQ</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-6 space-y-2">
                <h4 className="font-bold text-gray-900">What should I expect during my first session?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">A brief consultation to understand your goals, followed by your chosen treatment, ending with aftercare advice. You're in control of pressure and focus.</p>
              </div>
              <div className="py-6 space-y-2">
                <h4 className="font-bold text-gray-900">What's your cancellation policy?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">We require 24 hours notice for cancellations. Late cancellations may incur a fee equal to 50% of the service price.</p>
              </div>
              <div className="py-6 space-y-2">
                <h4 className="font-bold text-gray-900">Do I need to be an athlete to book?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Not at all. Our techniques benefit anyone with muscular tension, pain, or a desire to move better—from office workers to professional competitors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-orange-500 text-white text-center rounded-2xl mb-20 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-8 px-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">Ready to optimize your performance?</h2>
            <p className="text-lg font-medium text-white/90">Book your first session today and feel the difference of precision care.</p>
            <div className="pt-4">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('/Contact'); }}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-orange-500 rounded-lg text-xl font-black shadow-2xl hover:scale-105 transition-transform"
              >
                Book Your Session Online
                <span className="material-symbols-outlined font-black">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer from Contact component (which has the Services footer) */}
      <footer className="bg-gray-50 border-t border-gray-200 py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500">
                <g clipPath="url(#clip0_6_535)">
                  <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                </g>
                <defs><clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
              </svg>
              <h2 className="text-lg font-bold tracking-tight text-gray-900">William's Professional Sports Massage</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional sports massage therapy for athletes and active individuals. Performance-focused treatments with transparent pricing.
            </p>
          </div>
          
          {/* Col 2 */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900">Quick Links</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Services'); }} className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/About'); }} className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Contact'); }} className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900">Availability</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><p className="font-bold text-gray-900">Mon - Fri:</p> By Appointment Only</li>
              <li><p className="font-bold text-gray-900">Saturday:</p> 10:00 AM - 4:00 PM</li>
              <li><p className="font-bold text-gray-900">Sunday:</p> Closed</li>
              <li className="pt-2 text-orange-500 text-xs font-bold uppercase italic">24-hour cancellation policy applies.</li>
            </ul>
          </div>
          
          {/* Col 4 */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900">Contact</h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-500 text-sm mt-1">mail</span>
                <span>williamfitness@mail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-500 text-sm mt-1">phone</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">© 2026 William's Sports Massage. <br/>All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;