import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body {
          font-family: 'Lexend', sans-serif;
          background-color: white;
          color: #181411;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      {/* Navigation Bar - Same as ContactPage */}
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
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('/')} className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">Home</button>
          <button onClick={() => handleNavClick('/Services')} className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">Services</button>
          <button onClick={() => handleNavClick('/About')} className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">About</button>
          <button onClick={() => handleNavClick('/Contact')} className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">Contact</button>
        </nav>
        
        <div className="flex items-center gap-4">
          <button onClick={() => handleNavClick('/Contact')} className="hidden md:flex min-w-[120px] items-center justify-center rounded-lg h-10 px-5 bg-orange-500 text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform active:scale-95">Contact Now</button>
          
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 p-2">
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
              <button onClick={() => handleNavClick('/')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-200">Home</button>
              <button onClick={() => handleNavClick('/Services')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-200">Services</button>
              <button onClick={() => handleNavClick('/About')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors border-b border-gray-200">About</button>
              <button onClick={() => handleNavClick('/Contact')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">Contact</button>
            </div>
            <button onClick={() => handleNavClick('/Contact')} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-all">
              <span className="truncate">Contact Now</span>
            </button>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-16">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] gap-8">
            <div className="flex-1 flex gap-4">
              <div className="w-1/2 bg-center bg-no-repeat bg-cover rounded-2xl shadow-lg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq6P23kVTHpPuzZotQzgNU12NCDQigTMrL-W35D2Tlogly1UalkGbuf6FTiNCRqKOxd_ixlEbijpGEjq8qoZVLjgVfBQSfO1IVOsYgeinPiOzTnvM_f4tfc3NIhiaa94HQe25IGodw5LooaJP-Xhn5Wz-ORHOz9rR9JpuRC2zohQsHgZU-CTQo-sq-3y5AvF6oY5ehCi35dkNN1Nx0Nu5MDdOFIOpIl9O2sZw9mtAzHxzH0Ueyck80plkjD_NEPL-igeBxSxQDdHwZ')`}}></div>
              <div className="w-1/2 bg-center bg-no-repeat bg-cover rounded-2xl shadow-lg" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOZWeJrA20DhksOrMJg2CdqiLuEMM5zk_GFUpI9XIUigwM8LdDr_4DRMgmyhwUH-qAvAbQ85GPhSI7OYw3q2GziyFPxoBf41OAGCVR_yVZlQww6pQwWf2syITJZocN1GX5DKDyovMY8iEPkZKD3H7wYICG3jp7koulU2bdqSuL-63a3Y38bsAFl_0qRJeMMe3zzfK51bGc1pJNK-dUtqtpImBmxFyrkFZbchOwNkmkyB9ofc5h6yYiypsWO5tef8XUMyJEbvhCb6l8')`}}></div>
            </div>
            <div className="flex flex-col justify-center px-6 lg:w-[450px]">
              <div className="flex flex-col gap-4">
                <h1 className="text-gray-900 text-4xl font-black leading-tight tracking-tight md:text-5xl">Performance Through Understanding</h1>
                <h2 className="text-gray-600 text-lg font-normal leading-relaxed">Where Professional Certification Meets Athletic Experience. I don't just treat athletes; I am one.</h2>
              </div>
              <div className="mt-6">
              
              </div>
            </div>
          </div>
        </section>

        {/* Dual Perspective Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-extrabold mb-12 text-center text-gray-900">Dual Perspective</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-l-4 border-blue-800 shadow-sm">
                <div className="flex items-center gap-4 mb-6 text-blue-800">
                  <span className="material-symbols-outlined text-4xl">verified_user</span>
                  <h3 className="text-2xl font-bold">The Science</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-bold uppercase tracking-wider">Professional Approach</p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-orange-500 text-xl">check_circle</span>
                    <span>Advanced clinical certification in Myofascial Release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-orange-500 text-xl">check_circle</span>
                    <span>Evidence-based anatomical precision in every stroke</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-orange-500 text-xl">check_circle</span>
                    <span>Detailed kinetic chain assessments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border-l-4 border-orange-500 shadow-sm">
                <div className="flex items-center gap-4 mb-6 text-orange-500">
                  <span className="material-symbols-outlined text-4xl">directions_run</span>
                  <h3 className="text-2xl font-bold">The Experience</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-bold uppercase tracking-wider">Athlete's Empathy</p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-xl">check_circle</span>
                    <span>Personal understanding of training fatigue & recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-xl">check_circle</span>
                    <span>Sport-specific empathy: I know how your PR feels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-xl">check_circle</span>
                    <span>Optimized treatment windows for event cycles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-12 text-gray-900">Our Philosophy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4"><span className="material-symbols-outlined text-3xl">biotech</span></div>
              <h4 className="font-bold mb-2">Precision Over Prescription</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Tailored sessions, not generic routines.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4"><span className="material-symbols-outlined text-3xl">handshake</span></div>
              <h4 className="font-bold mb-2">Active Partnership</h4>
              <p className="text-sm text-gray-600 leading-relaxed">We work together on your goals.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4"><span className="material-symbols-outlined text-3xl">school</span></div>
              <h4 className="font-bold mb-2">Education is Empowerment</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Know why we do what we do.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4"><span className="material-symbols-outlined text-3xl">cycle</span></div>
              <h4 className="font-bold mb-2">Respect for the Process</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Patience yields the best results.</p>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-500 uppercase tracking-[0.2em]">Verified Credentials</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-teal-600 mb-2">workspace_premium</span>
                <p className="text-xs font-bold text-gray-400">STATE LICENSE</p>
                <p className="font-bold">LMT #123456</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-teal-600 mb-2">history_edu</span>
                <p className="text-xs font-bold text-gray-400">ALMA MATER</p>
                <p className="font-bold">Soma Institute</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-orange-500 mb-2">military_tech</span>
                <p className="text-xs font-bold text-gray-400">ACHIEVEMENT</p>
                <p className="font-bold">Boston Qualifier</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-orange-500 mb-2">pedal_bike</span>
                <p className="text-xs font-bold text-gray-400">EXPERIENCE</p>
                <p className="font-bold">Ironman Finisher</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
      <section className="py-20 max-w-[1200px] mx-auto px-4 md:px-6">
  <div className="flex flex-col md:flex-row gap-12 items-center">
    <div className="w-full md:w-1/3">
      <div 
        className="aspect-[3/4] bg-center bg-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500" 
        style={{backgroundImage: `url('https://i.imgur.com/TUxYKfa.jpeg')`}}
      ></div>
    </div>
    <div className="w-full md:w-2/3">
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed italic">
        <p>"I started this practice because I was tired of receiving 'spa' massages when my body was screaming for athletic recovery. I realized there was a gap between the clinical therapist and the athlete who actually understands what a 100-mile week feels like."</p>
        <p>"My goal is to provide a space where your performance is taken as seriously as your health. Whether you are training for your first 5K or looking to shave seconds off your Ironman time, I'm here to ensure your body isn't the limiting factor."</p>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold text-orange-500">William Nixon, LMT</p>
        <p className="text-sm text-gray-500">Founder & Lead Therapist</p>
      </div>
    </div>
  </div>
</section>

        {/* Why Choose Us Section */}
{/* Our Team Section */}
<section className="py-20 bg-white">
  <div className="max-w-[1200px] mx-auto px-4 md:px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Meet Our Expert Team</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Our certified fitness professionals bring specialized expertise to help you achieve your athletic goals through targeted sports massage and recovery therapy.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* RAMOS PATREECE */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
        <div className="h-64 overflow-hidden">
          <img 
            src="https://i.imgur.com/4iHBIDs.jpeg" 
            alt="Ramos Patreece" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Ramos Patreece</h3>
          <p className="text-orange-500 font-semibold text-sm mb-3">Sports Performance Specialist</p>
          <p className="text-gray-600 text-sm">
            Specializes in endurance athlete recovery and performance optimization. Certified in advanced myofascial release techniques.
          </p>
        </div>
      </div>
      
      {/* CHAD BLAKELY */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
        <div className="h-64 overflow-hidden">
          <img 
            src="https://i.imgur.com/tIjid5A.jpeg" 
            alt="Chad Blakely" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Chad Blakely</h3>
          <p className="text-orange-500 font-semibold text-sm mb-3">Strength & Conditioning Coach</p>
          <p className="text-gray-600 text-sm">
            Focuses on power athletes and weightlifters. Expert in injury prevention and post-workout recovery for strength training.
          </p>
        </div>
      </div>
      
      {/* JAMES LARRY */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
        <div className="h-64 overflow-hidden">
          <img 
            src="https://i.imgur.com/Fp1OItB.jpeg" 
            alt="James Larry" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">James Larry</h3>
          <p className="text-orange-500 font-semibold text-sm mb-3">Rehabilitation Therapist</p>
          <p className="text-gray-600 text-sm">
            Specializes in post-injury recovery and mobility restoration. Combines massage therapy with functional movement assessment.
          </p>
        </div>
      </div>
      
      {/* NATHAN MINNICK */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
        <div className="h-64 overflow-hidden">
          <img 
            src="https://i.imgur.com/eXiTPO3.jpeg" 
            alt="Nathan Minnick" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Nathan Minnick</h3>
          <p className="text-orange-500 font-semibold text-sm mb-3">Endurance Sports Specialist</p>
          <p className="text-gray-600 text-sm">
            Marathon runner and triathlon coach with expertise in event tapering and race-day recovery strategies.
          </p>
        </div>
      </div>
    </div>
    
    <div className="mt-16 text-center">
      <p className="text-gray-600 max-w-3xl mx-auto">
        Each team member holds advanced certifications in sports therapy and personal training, ensuring you receive evidence-based treatment from professionals who understand athletic performance from both clinical and practical perspectives.
      </p>
    </div>
  </div>
</section>

        {/* CTA Section */}
       <section className="py-24 px-4 md:px-6 bg-gray-50 text-center">
  <div className="max-w-2xl mx-auto space-y-8">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Ready to improve your performance?</h2>
    <p className="text-gray-600 text-lg">Join the community of athletes who trust William for their recovery and maintenance.</p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button 
        onClick={() => handleNavClick('/Contact')}
        className="min-w-[280px] h-16 bg-orange-500 text-white text-xl font-bold rounded-xl shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-transform"
      >
        Book Your Session
      </button>
      <button 
        onClick={() => handleNavClick('/Services')}
        className="min-w-[280px] h-16 bg-teal-600 text-white text-xl font-bold rounded-xl shadow-2xl shadow-teal-600/40 hover:bg-teal-700 transition-transform"
      >
        See Targeted Services
      </button>
    </div>
  </div>
</section>
      </main>

      {/* Footer - Same as ContactPage */}
      <footer className="bg-gray-50 border-t border-gray-200 py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
          
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900">Quick Links</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Services'); }} className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/About'); }} className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Contact'); }} className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900">Availability</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><p className="font-bold text-gray-900">Mon - Fri:</p> By Appointment Only</li>
              <li><p className="font-bold text-gray-900">Saturday:</p> 10:00 AM - 4:00 PM</li>
              <li><p className="font-bold text-gray-900">Sunday:</p> Closed</li>
              <li className="pt-2 text-orange-500 text-xs font-bold uppercase italic">24-hour cancellation policy applies.</li>
            </ul>
          </div>
          
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

export default AboutPage;