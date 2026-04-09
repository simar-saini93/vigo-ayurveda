import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.app.goo.gl/zWkjSNBvpKxYUeVe9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-brand-green transition-colors"
                >
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <span className="text-sm">F-95, Focal Point, Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160062</span>
                </a>
              </li>
              <li>
                <a href="mailto:vigoayurveda@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-brand-green transition-colors">
                  <Mail size={20} className="flex-shrink-0" />
                  <span className="text-sm">vigoayurveda@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919888968028" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <Phone size={14} />
                  <span>+91-9888968028</span>
                </a>
                <a href="tel:+919781700053" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <Phone size={14} />
                  <span>+91-9781700053</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/people/Harmeda-Healthcare-Private-Limited/61575717527347/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Opening Time</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Mon - Friday:</span>
                <span>09.00 am to 07.00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10.00 am to 06.00 pm</span>
              </li>
              <li className="flex justify-between text-brand-green">
                <span>Vacation:</span>
                <span>All Sunday is our vacation</span>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/our-product" className="text-sm text-gray-300 hover:text-brand-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  Tablets
                </Link>
              </li>
              <li>
                <Link to="/our-product" className="text-sm text-gray-300 hover:text-brand-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  Capsules
                </Link>
              </li>
              <li>
                <Link to="/our-product" className="text-sm text-gray-300 hover:text-brand-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  Liquids
                </Link>
              </li>
              <li>
                <Link to="/our-product" className="text-sm text-gray-300 hover:text-brand-green transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                  Protein Powder
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Get In Touch</h3>
            <form className="space-y-3">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-green"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-green"
              />
              <textarea 
                placeholder="Message" 
                rows={3}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-green resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-brand-green text-white py-2.5 rounded-lg text-sm font-medium hover:bg-brand-dark-green transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              <span className="text-brand-green font-medium">Vigo Ayurveda</span> All right reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center hover:bg-brand-dark-green transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/*}  <a 
          href="tel:+919888968028" 
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
        >
          <Phone size={22} className="text-white" />
        </a>
        <a 
          href="https://api.whatsapp.com/send?phone=9888968028&text=hello" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        > 
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a> */}
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center shadow-lg hover:bg-brand-dark-green transition-colors"
        >
          <ArrowUp size={22} className="text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
