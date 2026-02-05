import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handler
  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Add custom styles for colors */}
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

      {/* Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 md:px-10 py-4 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 text-orange-500">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
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

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-center px-6 md:px-10 pb-10" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFvlvXO5zZ4TxRhpKvsmBa2W99pNWV1HDrbg3alp7gJcE0s08XbH0mWn0WdttSCQzBf7HYbw6hisSAI52apiwIeDBSwuXFSMy89OuZ1v_UQuc0u8bDOCqLOFs8nCE1OADAe8EB8vhi7KA8lWwvDhN9pk09tWeyBJlw-akzOEvyQWrmiIiLnx-x-ISmLTFtn8aaPde-FK7NVVNnjkOwszNS28OABP9zvk1Xf4W4do3I_oUm32dVMq6Y_oFNQ2nlnvlGrvxSNwxSWx_9')` }}>
              <div className="flex flex-col gap-4 text-left max-w-2xl">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Get In Touch
                </h1>
                <p className="text-white/90 text-lg font-normal leading-relaxed max-w-lg">
                  Ready to move better? Reach out directly to discuss your needs, ask questions, or schedule your session.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-orange-500 text-white text-base font-bold shadow-xl shadow-orange-500/30 hover:bg-orange-600 transition-all">
                  Call or Text Now
                </button>
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-blue-800 text-white text-base font-bold shadow-xl shadow-blue-800/30 hover:bg-blue-900 transition-all">
                  Send an Email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2">Direct Communication</span>
            <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight">How to Reach Us</h2>
            <p className="text-gray-600 max-w-lg mt-2">Choose the method that works best for you. We're here to help you start your recovery journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">call</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Call or Text</h3>
              <p className="text-gray-600 text-sm mb-4">Fastest way to reach me for booking or urgent questions.</p>
              <p className="text-orange-500 font-bold text-lg">(555) 123-4567</p>
              <p className="text-xs text-gray-500 mt-2 italic">Mon-Fri: 9am-6pm | Sat: 10am-2pm</p>
              <p className="text-xs text-gray-500 mt-1">Text messages welcome anytime</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Send an Email</h3>
              <p className="text-gray-600 text-sm mb-4">Perfect for detailed questions or non-urgent scheduling.</p>
              <p className="text-teal-600 font-bold text-lg">robert@robertsmassage.com</p>
              <p className="text-xs text-gray-500 mt-2 italic">Average response: within 24 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Service Area</h3>
              <p className="text-gray-600 text-sm mb-4">Private studio & mobile service for your convenience.</p>
              <p className="text-blue-800 font-bold text-lg">Based in [City Name]</p>
              <p className="text-xs text-gray-500 mt-2 italic">Private studio in [Neighborhood]</p>
              <p className="text-xs text-gray-500 mt-1">Full address provided upon booking</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-lg">
            <div className="w-full md:w-1/3 bg-blue-800 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                <p className="text-blue-100/80 mb-8">Not sure which service fits your needs? Fill out the form and Robert will get back to you personally.</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg border border-white/20">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-sm">verified</span>
                </div>
                <span className="text-xs font-semibold">Certified Sports Therapist & Member of SMA</span>
              </div>
            </div>
            <div className="flex-1 p-6 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Full Name</label>
                    <input className="w-full rounded-lg border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Email Address</label>
                    <input className="w-full rounded-lg border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500" placeholder="john@example.com" type="email"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Phone Number</label>
                    <input className="w-full rounded-lg border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500" placeholder="(555) 123-4567" type="tel"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Subject</label>
                    <select className="w-full rounded-lg border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500">
                      <option>General Inquiry</option>
                      <option>Service Recommendation</option>
                      <option>Booking a Session</option>
                      <option>First-Time Client Questions</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Your Message</label>
                  <textarea className="w-full rounded-lg border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500" placeholder="Tell me about your goals, any specific issues you're facing, or questions you have..." rows="4"></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-500">
                    <span className="material-symbols-outlined text-[10px] align-middle">lock</span> 
                    Your data is private and encrypted. No spam, ever.
                  </p>
                  <button className="w-full sm:w-auto min-w-[160px] bg-orange-500 text-white py-3 px-8 rounded-lg font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
          <div className="bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-8 md:p-10 border border-orange-100">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">After You Reach Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">1. You Contact Me</h3>
                <p className="text-gray-600 text-sm">Via call, text, email, or the contact form above.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">forum</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">2. I Respond Promptly</h3>
                <p className="text-gray-600 text-sm">We'll connect to discuss your specific situation and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-2xl">calendar_month</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">3. We Schedule Your Session</h3>
                <p className="text-gray-600 text-sm">I'll provide available times and secure your appointment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Your Visit & Our Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column 1: Preparation */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                  <span className="material-symbols-outlined text-orange-500">clinical_notes</span> 
                  Preparation & Arrival
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <p className="font-bold text-gray-900">Intake Forms</p>
                      <p className="text-sm text-gray-600">Digital intake forms will be sent via email to complete prior to your visit.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <p className="font-bold text-gray-900">What to Wear/Bring</p>
                      <p className="text-sm text-gray-600">Wear comfortable, loose-fitting clothing. Sports attire is perfect. Bring a water bottle.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <p className="font-bold text-gray-900">Consultation</p>
                      <p className="text-sm text-gray-600">Your first session includes a 10-15 minute consultation to understand your history and goals.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Column 2: Policies */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-600">
                  <span className="material-symbols-outlined">rule</span> 
                  Important Policies
                </h3>
                <div className="space-y-8">
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <p className="font-bold text-red-700">24-Hour Cancellation</p>
                    <p className="text-sm text-red-600/80 mt-1">Cancellations with less than 24 hours notice will incur a 50% service fee. We appreciate your understanding.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2 text-gray-900">
                      <span className="material-symbols-outlined text-sm text-gray-700">schedule</span> Late Arrivals
                    </h4>
                    <p className="text-sm text-gray-600">Please arrive on time. Late arrivals may result in a shortened session to respect the next client's time.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2 text-gray-900">
                      <span className="material-symbols-outlined text-sm text-gray-700">payment</span> Payment Methods
                    </h4>
                    <p className="text-sm text-gray-600">Accepted methods: Cash, all major credit/debit cards, and HSA/FSA cards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Footer Style */}
       
      </main>

      {/* Footer from Services component */}
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
                <span className="material-symbols-outlined text-orange-500 text-sm mt-1">mail</span>
                <span>jordanfitness@mail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-500 text-sm mt-1">phone</span>
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

export default ContactPage;