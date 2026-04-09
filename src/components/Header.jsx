import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Linkedin, Instagram, Youtube, ChevronDown, Menu, X } from 'lucide-react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Our Products', 
      path: '/our-product',
      dropdown: [
        { name: 'Tablets', path: '/tablet' },
        { name: 'Capsules', path: '/capsules' },
        { name: 'Liquids', path: '/liquid' },
        { name: 'Protein Powder', path: '/protein-powder' },
      ]
    },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Certificates', path: '/certificates' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-navy text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:vigoayurveda@gmail.com" className="flex items-center gap-2 hover:text-brand-green transition-colors">
              <Mail size={14} />
              <span>vigoayurveda@gmail.com</span>
            </a>
            <a href="tel:+919888968028" className="flex items-center gap-2 hover:text-brand-green transition-colors">
              <Phone size={14} />
              <span>+91-9888968028</span>
            </a>
            <a href="tel:+919781700053" className="flex items-center gap-2 hover:text-brand-green transition-colors">
              <Phone size={14} />
              <span>+91-9781700053</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
               <a href="https://www.facebook.com/people/Harmeda-Healthcare-Private-Limited/61575717527347/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all">
                <Linkedin size={14} />
              </a>
              {/* <a href="#" className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all">
                <Youtube size={14} />
              </a> */}
              <a href="https://www.instagram.com/vigoayurveda?igsh=MTExMncyOHRxMWU1" target='_blank' className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all">
                <Instagram size={14} />
              </a> 
            </div>
            {/* <div className="hidden md:flex items-center gap-2 text-sm ml-4">
              <Link to="/contact" className="hover:text-brand-green transition-colors">Help</Link>
              <span>/</span>
              <Link to="/contact" className="hover:text-brand-green transition-colors">Contact</Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg sticky top-0 z-50' : ''}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <img src="/images/logo.png" alt="logo" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      <Link 
                        to={link.path}
                        className={`flex items-center gap-1 font-medium transition-colors py-2 ${
                          isActive(link.path) || link.dropdown.some(d => isActive(d.path)) ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                      </Link>
                      {isProductsDropdownOpen && (
                        <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[180px] z-50 border border-gray-100">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={`block px-4 py-2 transition-colors ${
                                isActive(item.path) ? 'bg-brand-light-green text-brand-green' : 'text-gray-700 hover:bg-brand-light-green hover:text-brand-green'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      className={`font-medium transition-colors py-2 relative ${
                        isActive(link.path) ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'
                      }`}
                    >
                      {link.name}
                      {isActive(link.path) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-green"></span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <Link 
                to="/contact"
                className="bg-brand-green text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-dark-green transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} className="text-brand-navy" /> : <Menu size={28} className="text-brand-navy" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div>
                        <button 
                          className="flex items-center justify-between w-full font-medium text-gray-700 py-2"
                          onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        >
                          {link.name}
                          <ChevronDown size={16} className={`transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isProductsDropdownOpen && (
                          <div className="pl-4 mt-2 space-y-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className={`block py-2 ${isActive(item.path) ? 'text-brand-green' : 'text-gray-600'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link 
                        to={link.path}
                        className={`block font-medium py-2 ${isActive(link.path) ? 'text-brand-green' : 'text-gray-700'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link 
                  to="/contact"
                  className="bg-brand-green text-white px-6 py-2.5 rounded-full font-medium text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
