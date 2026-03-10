import { useEffect, useRef } from 'react';
import { Award, Monitor, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const About = () => {
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

  const processSteps = [
    { step: '01', title: 'Raw Material', desc: 'Sourcing high-quality raw materials from trusted suppliers' },
    { step: '02', title: 'Formulation Development', desc: 'Expert formulation development in our R&D labs' },
    { step: '03', title: 'Manufacturing & Quality Controls', desc: 'State-of-the-art manufacturing with strict quality checks' },
    { step: '04', title: 'Packaging & Distribution', desc: 'Safe packaging and timely distribution worldwide' },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="About" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' }
        ]} 
      />

      {/* About Company Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-lab.jpg" 
                  alt="Harmeda Healthcare Laboratory" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-green text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
            <div className="reveal">
              <span className="text-brand-green font-medium uppercase tracking-wide text-sm">About the company</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3 mb-6">
                Vigo Ayurveda: Leading Ayurvedic Manufacturing Company in India
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vigo Ayurveda is a prominent manufacturer of premium-quality Ayurvedic Products in India. We are committed to producing top-notch supplements that support health and well-being. Every product is designed to be completely safe and active, which is everything to protect and improve the health.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
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
              <p className="text-gray-600 leading-relaxed">
                Certainly! Our company is well-known for producing, exporting, and supplying certified products and dependable services across multiple sectors. This will include standardized herbal extracts, as well as Ayurvedic formulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Third Party Manufacturing In India</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Our Process From Sourcing to Shipping
            </h2>
            <p className="text-gray-600 mt-4">
              We always start with high-quality materials and focus on providing only the best medicine delivery. Our process guarantees excellence at every step and is committed to promoting health and well-being.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'GMP Certified', desc: 'Good Manufacturing Practice certified facility ensuring highest quality standards.' },
              { title: 'ISO 9001:2015', desc: 'Internationally recognized quality management system certification.' },
              { title: 'WHO Standards', desc: 'Compliance with World Health Organization guidelines for pharmaceuticals.' },
              { title: 'In-House QC Labs', desc: 'Equipped with HPLC, UV spectrophotometers for real-time testing.' },
              { title: 'Batch Consistency', desc: 'Ensuring every batch meets pharmacopeial standards (IP/BP/USP/EP).' },
              { title: 'Timely Delivery', desc: 'Consistent on-time delivery, even for bulk and urgent orders.' },
            ].map((item, index) => (
              <div key={index} className="reveal flex items-start gap-4 p-6 bg-brand-light-green rounded-xl">
                <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To supply standardised and researched pharma and healthcare products to our clients and business associates through constant innovation, thereby promoting healthy living and providing exceptional value. We are committed to producing premium-quality ayurvedic products that support health and well-being across India and beyond.
              </p>
            </div>
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become India's most trusted and leading third-party manufacturing company for ayurvedic products. We aim to set new benchmarks in quality, innovation, and customer satisfaction while contributing to the global healthcare ecosystem through our commitment to excellence and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
