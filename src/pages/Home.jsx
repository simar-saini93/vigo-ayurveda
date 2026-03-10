import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Monitor, Users, Beaker, Clock, Headphones, 
  Truck, ChevronRight, ArrowRight, Star, CheckCircle2 
} from 'lucide-react';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const products = [
    { name: 'Tablets', image: '/images/product-tablets.jpg' },
    { name: 'Capsules', image: '/images/product-capsules.jpg' },
    { name: 'Liquids', image: '/images/product-liquids.jpg' },
    { name: 'Protein Powder', image: '/images/product-protein.jpg' },
  ];

  const features = [
    { 
      icon: Users, 
      title: 'Skilled Workforce', 
      description: 'A highly skilled team produces top quality work.',
      link: '#'
    },
    { 
      icon: Beaker, 
      title: 'Research & Development', 
      description: 'Innovative research is driving sophisticated product development.',
      link: '#'
    },
    { 
      icon: Headphones, 
      title: 'Top-Quality Assistance', 
      description: 'Exceptional support assures high-quality service.',
      link: '#'
    },
  ];

  const testimonials = [
    {
      text: "We are happy to get very reasonable pricing for small and large batches from Harmeda Healthcare, and also they have no hidden charges, and all their costs are discussed upfront.",
      author: "Anjali Thakur"
    },
    {
      text: "Consistently on-time delivery, even for bulk orders, and they can also easily manage our urgent batch delivery well before the deadline.",
      author: "Abhinav"
    },
    {
      text: "We are happy to get very reasonable pricing for small and large batches from Harmeda Healthcare, and also they have no hidden charges, and all their costs are discussed upfront.",
      author: "Anjali Thakur"
    },
  ];

  const stats = [
    { icon: Star, title: 'Customer Satisfaction', description: 'Vigo Ayurveda: Prioritizing customer satisfaction always.' },
    { icon: Award, title: 'Product Quality', description: 'Vigo Ayurveda: Unmatched product quality always.' },
    { icon: Headphones, title: 'Staff Support', description: 'Vigo Ayurveda: Exceptional staff support guaranteed.' },
    { icon: Truck, title: 'Time On delivery', description: 'Vigo Ayurveda ensures timely delivery always.' },
  ];

  const certifications = [
  { name: "FSSAI", image: "/images/certifications/fssai.png" },
  { name: "GMP", image: "/images/certifications/gmp.png" },
  { name: "WHO", image: "/images/certifications/who.png" },
  { name: "ISO", image: "/images/certifications/iso.png" },
];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-banner.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-lime/90 via-brand-lime/70 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
              INDIA'S LEADING THIRD PARTY MANUFACTURING COMPANY!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Expertise in Developing A Wide Range of Ayurvedic Products
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/our-product" 
                className="bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark-green transition-colors inline-flex items-center gap-2"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-brand-navy text-white px-8 py-3 rounded-full font-medium hover:bg-brand-navy/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center animate-bounce cursor-pointer">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Certification Logos */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-evenly items-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 md:w-24 md:h-24 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-brand-green font-medium uppercase tracking-wide text-sm">About the company</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3 mb-6">
                Trusted Ayurveda: Premier Manufacturer of Quality Products.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vigo Ayurveda is a well-known <strong className="text-brand-navy">Ayurvedic manufacturing company in India</strong> that is compliant with good manufacturing practices (GMP), ensures high-quality and contamination-free drug production, and also our WHO-GMP certification indicates global standard adherence. Along with this, we are fully compliant with the iso 9001:2015 or iso 13485 certification, which demonstrates our commitment to quality management systems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                However, in-house quality control labs are one of the important parts of our manufacturing services that allow us to always be equipped with analytical instruments (e.g., HPLC, UV spectrophotometers) for real-time product testing. Hence, we always ensure batch-to-batch consistency and compliance with pharmacopeial standards (IP/BP/usp/EP).
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Best Quality & Services</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Live view of Product Manufacturing</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-lab.jpg" 
                  alt="Harmeda Healthcare Laboratory" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Third-Party Ayurvedic Manufacturer Company in India</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Our Process From Sourcing to Shipping
            </h2>
            <p className="text-gray-600 mt-4">
              We always prioritize excellent materials and top-notch drug delivery throughout the process, from sourcing to shipping. Our production processes always ensure excellence at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Raw Material', desc: 'Sourcing high-quality raw materials from trusted suppliers' },
              { step: '02', title: 'Formulation Development', desc: 'Expert formulation development in our R&D labs' },
              { step: '03', title: 'Manufacturing & Quality Controls', desc: 'State-of-the-art manufacturing with strict quality checks' },
              { step: '04', title: 'Packaging & Distribution', desc: 'Safe packaging and timely distribution worldwide' },
            ].map((item, index) => (
              <div key={index} className="reveal bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Empowering your health with greatness.
            </h2>
            <p className="text-gray-600 mt-4">
              We always give importance to health. We manufacture high-quality ayurvedic medicine in a variety of forms at reasonable prices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="reveal group">
                <div className="relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/our-product"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark-green transition-colors"
            >
              Explore More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Why choose Vigo Ayurveda?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              When you come to our company, you will always get the unique knowledge and high-quality medicines.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="reveal bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                  <feature.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <Link to={feature.link} className="inline-flex items-center gap-1 text-brand-green text-sm font-medium hover:gap-2 transition-all">
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-brand-green text-brand-green px-8 py-3 rounded-full font-medium hover:bg-brand-green hover:text-white transition-colors"
            >
              More Features
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Our Certificates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Accredited certificates ensure our highest quality in manufacturing processes and pharma products.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'GST', image: '/images/cert-gst.jpg' },
              { name: 'MSME', image: '/images/cert-msme.jpg' },
              { name: 'FSSAI', image: '/images/cert-fssai.jpg' },
              { name: 'GMP', image: '/images/cert-gmp.jpg' },
            ].map((cert, index) => (
              <div key={index} className="reveal group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/20 transition-colors"></div>
                </div>
                <p className="text-center font-medium text-brand-navy mt-3">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">OUR CLIENTS REVIEWS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="reveal bg-white rounded-xl p-6 shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">CHECK OUR POINTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Long-term and dedicated experience in healthcare and the medicines industry
            </h2>
            <p className="text-gray-600 mt-4">
              To supply standardised and researched pharma and healthcare products to our clients and business associates through constant innovation, thereby promoting healthy living and providing exceptional value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="reveal bg-brand-light-green rounded-xl p-6 hover:bg-brand-green group transition-colors duration-300">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                  <stat.icon className="w-6 h-6 text-white group-hover:text-brand-green transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-navy group-hover:text-white mb-2 transition-colors">{stat.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-white/80 transition-colors">{stat.description}</p>
                <Link to="#" className="inline-flex items-center gap-1 text-brand-green group-hover:text-white text-sm font-medium mt-4 hover:gap-2 transition-all">
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-brand-green text-brand-green px-8 py-3 rounded-full font-medium hover:bg-brand-green hover:text-white transition-colors"
            >
              View More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Explore Our Services
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Vigo Ayurveda, the top-rated <strong className="text-brand-green">third-party ayurvedic pharma manufacturer in India</strong>, plays a pivotal role in supporting the country's pharmaceutical ecosystem, enabling scalability, innovation, and cost-efficiency. Thus, it allows us to be today's leading Ayurvedic manufacturing company in India.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span>In-house design for your brand</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span>Excellent packaging is available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span>GMP and ISO certified manufacturing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span>Timely delivery guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="reveal">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-4xl font-bold text-brand-green mb-2">500+</p>
                  <p className="text-gray-300">Products Manufactured</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-4xl font-bold text-brand-green mb-2">200+</p>
                  <p className="text-gray-300">Happy Clients</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-4xl font-bold text-brand-green mb-2">15+</p>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-4xl font-bold text-brand-green mb-2">50+</p>
                  <p className="text-gray-300">Expert Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
