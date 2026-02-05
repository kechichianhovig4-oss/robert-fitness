import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handler
  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Add custom styles for colors */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body {
          font-family: "Inter", sans-serif;
          background-color: white;
          color: #121317;
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
              <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135/L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900">Jordan's Sports Massage</h2>
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

      {/* Hero Section */}
      <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-blue-800/40">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(30, 59, 138, 0.7), rgba(18, 22, 32, 0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFUbp9Clx-n0ADBINu6CMBXjWVRL3xArC2s0kqASxFnNCHzEeVw7GaiEinb3EmONWhYp0cavRTagi5AdA1UAFTSO7DzHkOOHNIh3FQfze8LAHCaPCa9C9pGCkBu8g5vysld4pu7k5ntDrQQ19bvDp0LqFRafXueENtzusvBHmpqTWydo8Srp5cdG6OEJGzeUnStfbF4OkLC2ergJXpCTSZHBs1xoa-76ykrfjmVEWKMTXK6Q3GhvNJDwQYv8yNIJXpVvmFnDt8W0oD')` }}>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Advanced Sports Massage. <br/><span className="text-teal-400">Peak Performance Recovery.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Unlock your athletic potential with targeted clinical massage and expert recovery techniques engineered for competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('treatments')}
              className="bg-blue-800 hover:bg-blue-900 text-white text-base font-bold px-10 py-4 rounded-lg transition-all shadow-xl"
            >
              Explore Our Treatments
            </button>
            <button 
              onClick={() => handleNavClick('/Contact')}
              className="bg-white/10 hover:bg-white/20 border-2 border-orange-500 text-white text-base font-bold px-10 py-4 rounded-lg backdrop-blur-md transition-all"
            >
              Book Your Session
            </button>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto" id="benefits">
        <div className="mb-16">
          <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">Engineered Performance</h2>
          <h3 className="text-3xl md:text-5xl font-black text-blue-800">Why Pro Athletes Choose Us</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl text-teal-600 group-hover:text-white">shield_with_heart</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Injury Prevention</h4>
            <p className="text-gray-600 leading-relaxed">Stay on the field and off the sidelines. We identify muscle imbalances before they become chronic issues.</p>
          </div>
          <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl text-teal-600 group-hover:text-white">bolt</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Performance Enhancement</h4>
            <p className="text-gray-600 leading-relaxed">Unlock your full range of motion and muscle efficiency. Optimize biomechanics for your specific sport.</p>
          </div>
          <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl text-teal-600 group-hover:text-white">target</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Pain Resolution</h4>
            <p className="text-gray-600 leading-relaxed">Targeted relief for chronic tension, trigger points, and acute sports injuries using clinical methods.</p>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-gray-50" id="treatments">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">Clinical Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-black text-blue-800">Specialized Treatments</h3>
            </div>
            <button 
              onClick={() => handleNavClick('/Services')}
              className="text-blue-800 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View Full Menu <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSHav_cKY5IwrNFLO8b0dPYG0gEvbfOW1I26jDWwTlNhD_OUYb-i1jLw6HyekQ9f3ObzLd-w_S-9K9BYCEwr9YD2RSn9fgTjhkLwf2mpmjugA-yfQ72QIS1LYNAgR5SL56CEapZ0U6FohtLqb65QVC9Cq-NDdM6ze5bTX4Sdlqbzcz9MES5mRPe8epMx5E5_l0BDNZyPdaiPsA5u8ybV1uZ1EWsJ5u3dAwkR2F4qu_6fIDs65aiS7f6UFIUdgSLs12TeYP1-J0z3Gv')` }}></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Deep Tissue Recovery</h4>
                <p className="text-gray-600 mb-6">Focussed pressure on sub-surface muscles to release chronic patterns of tension.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-blue-800">60 / 90 Min</span>
                  <button 
                    onClick={() => handleNavClick('/Contact')}
                    className="text-teal-600 font-bold border-b-2 border-teal-600 hover:text-orange-500 hover:border-orange-500 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-blue-800 text-white text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                  Pre-Event Favorite
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpkG5wL0EdgUHSBJ54UegVHoYrEtAAUlmCZJLDMRIzPhe6F2YhqopPPb9_phH22uC5Zo8CngUVi8qbEN7yuYubwmBBgeNGhL0_j0ygUCwbhOEckk49mn-PeuAnaTW6g6jAAmveVPTDpFNiWkHU3BkdqBS7fNPvw35b-oqZLbCPnVlfnzYyCDydDfm4CBDuTQFMBOlcotG-ujPXNWXkErrthBX9__NbMlFnyYasbL6eUS-qkWAfT7ktYAvR5WTzVVaMAFKUyEjGtVM0')` }}></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Pre-Event Activation</h4>
                <p className="text-gray-600 mb-6">A brisk, invigorating session designed to increase circulation and prepare muscles for peak action.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-blue-800">30 / 45 Min</span>
                  <button 
                    onClick={() => handleNavClick('/Contact')}
                    className="text-teal-600 font-bold border-b-2 border-teal-600 hover:text-orange-500 hover:border-orange-500 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-teal-600 text-white text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                  Recovery Essential
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-odlrlBjMssNXDma1bJBaKEoREplParlpnbrrqMF2Yo3jMyBGETN9xEibqdSb0H1ng1su65FaJif7R6RwDyb6X0k8PSQ9xGttEDznhRKpVoDb1mLK4WfHzejjPlqFEGbXjTEgogCMEkY99Acvw1Ng8AG5HOWR4imh1lHzpk9YIamKfFMA9R01VslhRTNteIqClptcufRHwDIPiN4ukn01CzrI0mdUCHW2PQGplgofA0XHe12fVMdvutBDSYKb6eNsLse0AQJMxZWn')` }}></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Post-Event Flush</h4>
                <p className="text-gray-600 mb-6">Gentle techniques to clear metabolic waste and reduce the "delayed onset muscle soreness."</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-blue-800">60 / 90 Min</span>
                  <button 
                    onClick={() => handleNavClick('/Contact')}
                    className="text-teal-600 font-bold border-b-2 border-teal-600 hover:text-orange-500 hover:border-orange-500 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden" id="experience">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnv8iYXdfprmtqyEFgGEtrMymWiWjeoevuynceBLu9fzF6I7RjFK-y2HcOHDwrOYSc2jpYKDgYAS87Flp71_tW8SAphblyMFwh68Lq4FF8QNPul2Gp0iRBLdAraL5RgBRzNyfoNEXklXm4Vz-A8jfwPq6H4pTMc4_7ixT7IdpaMKde09jI0ZfL6RIwjpb0gGwp8_fWy9it5QULiLExHUP5OFfEW8mRl2vJMo265kbk6LsKV2YUHzEhiWpGjWpP9Hv42h4u6EbGNEgm')` }}></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-teal-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-white text-4xl font-black">15+</div>
              <div className="text-white/80 font-bold uppercase tracking-widest text-xs">Years Professional Experience</div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">The Clinician Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-black text-blue-800 leading-tight">Professional Standards. Results Driven.</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Jordan's Professional Sports Massage isn't just about relaxation. It's a clinical partnership dedicated to your athletic career. We combine anatomical expertise with high-performance recovery protocols.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-teal-600">check_circle</span>
                <span className="font-bold text-gray-900">Clinical Assessment & Posture Analysis</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-teal-600">check_circle</span>
                <span className="font-bold text-gray-900">Personalized Athletic Recovery Roadmaps</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-teal-600">check_circle</span>
                <span className="font-bold text-gray-900">Certified Sports-Specific Techniques</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-teal-600">check_circle</span>
                <span className="font-bold text-gray-900">Elite Level Support for All Skill Levels</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-800 text-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Athlete Feedback</h2>
            <h3 className="text-3xl md:text-5xl font-black">Success Stories</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10">
              <div className="flex gap-1 mb-6">
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"After months of calf tightness, Jordan's deep tissue sessions got me through my first marathon pain-free. A total game changer for my training cycle."</p>
              <div>
                <div className="font-black text-xl">Sarah Jenkins</div>
                <div className="text-teal-400 font-bold text-sm uppercase">Marathoner</div>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10">
              <div className="flex gap-1 mb-6">
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"The level of anatomical knowledge here is insane. As a CrossFitter, I need someone who understands functional movement. Jordan is the best in the city."</p>
              <div>
                <div className="font-black text-xl">Marcus Thorne</div>
                <div className="text-teal-400 font-bold text-sm uppercase">CrossFit Athlete</div>
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10">
              <div className="flex gap-1 mb-6">
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"The pre-race activation massage gave me that extra edge. My legs felt explosive and I set a new PR at the criterium. Highly recommend."</p>
              <div>
                <div className="font-black text-xl">Leo Vance</div>
                <div className="text-teal-400 font-bold text-sm uppercase">Competitive Cyclist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Stepper */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Start Your Recovery</h2>
          <h3 className="text-3xl md:text-5xl font-black text-blue-800">The Three-Step Process</h3>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between gap-12 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white border-4 border-blue-800 rounded-full flex items-center justify-center text-blue-800 font-black text-2xl mb-6 shadow-xl group-hover:bg-blue-800 group-hover:text-white transition-all">1</div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Select Treatment</h4>
            <p className="text-gray-600 max-w-[200px]">Choose the recovery protocol that matches your current training load.</p>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white border-4 border-blue-800 rounded-full flex items-center justify-center text-blue-800 font-black text-2xl mb-6 shadow-xl group-hover:bg-blue-800 group-hover:text-white transition-all">2</div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Choose Your Time</h4>
            <p className="text-gray-600 max-w-[200px]">Pick a slot that fits your schedule via our seamless online booking app.</p>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white border-4 border-blue-800 rounded-full flex items-center justify-center text-blue-800 font-black text-2xl mb-6 shadow-xl group-hover:bg-blue-800 group-hover:text-white transition-all">3</div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Peak Performance</h4>
            <p className="text-gray-600 max-w-[200px]">Arrive, recover, and get back to your training with optimized muscle function.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-800 to-blue-900 rounded-[2rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-8">Ready to perform at your best?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Don't let minor tensions become major injuries. Book your clinical sports massage today and feel the professional difference.</p>
            <button 
              onClick={() => handleNavClick('/Contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-8 md:px-12 py-4 md:py-5 rounded-xl transition-all shadow-2xl hover:-translate-y-1"
            >
              Book Your Session Now
            </button>
          </div>
        </div>
      </section>

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
              <h2 className="text-lg font-bold tracking-tight text-gray-900">Jordan's Professional Sports Massage</h2>
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
                <span className="material-symbols-outlined text-orange-500 text-sm mt=1">mail</span>
                <span>jordanfitness@mail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-500 text-sm mt=1">phone</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">© 2026 Jordan's Sports Massage. <br/>All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;