import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Pill, Droplets, Dumbbell } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Products = () => {
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
    {
      name: 'Tablets',
      image: '/images/product-tablets.jpg',
      icon: Pill,
      description: 'High-quality tablets manufactured with precision and care. Available in various formulations including herbal, nutraceutical, and ayurvedic compositions.',
      features: ['Various shapes and sizes', 'Coated and uncoated options', 'Custom formulations available', 'GMP certified production']
    },
    {
      name: 'Capsules',
      image: '/images/product-capsules.jpg',
      icon: Beaker,
      description: 'Premium gelatin and vegetable capsules filled with carefully sourced ingredients. Ideal for supplements, vitamins, and herbal formulations.',
      features: ['Gelatin and HPMC options', 'Various sizes (00, 0, 1, 2, 3, 4)', 'Custom color options', 'Enteric coating available']
    },
    {
      name: 'Liquids',
      image: '/images/product-liquids.jpg',
      icon: Droplets,
      description: 'Syrups, suspensions, and liquid formulations manufactured in state-of-the-art facilities. Perfect for pediatric and geriatric applications.',
      features: ['Syrups and suspensions', 'Oral drops and solutions', 'Custom flavors available', 'Amber glass packaging options']
    },
    {
      name: 'Protein Powder',
      image: '/images/product-protein.jpg',
      icon: Dumbbell,
      description: 'High-quality protein supplements including whey, plant-based, and specialized formulations for fitness and health enthusiasts.',
      features: ['Whey and plant-based options', 'Multiple flavors', 'Third-party tested', 'Custom formulations']
    },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Our Product" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Product' }
        ]} 
      />

      {/* Products Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Empowering your health with excellence.
            </h2>
            <p className="text-gray-600 mt-4">
              Considering health is a priority, we manufacture premium quality medicine in a diverse range at affordable pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="reveal group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center gap-2 text-brand-green font-medium hover:gap-3 transition-all"
                    >
                      Enquire Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Manufacturing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Our Manufacturing Capabilities
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tablets', capacity: '5 Million/month', icon: Pill },
              { title: 'Capsules', capacity: '3 Million/month', icon: Beaker },
              { title: 'Liquids', capacity: '2 Million/month', icon: Droplets },
              { title: 'Powders', capacity: '1 Million/month', icon: Dumbbell },
            ].map((item, index) => (
              <div key={index} className="reveal bg-white rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="font-semibold text-brand-navy text-lg mb-1">{item.title}</h3>
                <p className="text-brand-green font-medium">{item.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for Custom Formulations?
            </h2>
            <p className="text-gray-300 mb-8">
              We offer third-party manufacturing services with custom formulations tailored to your specific requirements. Contact us to discuss your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark-green transition-colors inline-flex items-center gap-2"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/certificates"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-brand-navy transition-colors"
              >
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
