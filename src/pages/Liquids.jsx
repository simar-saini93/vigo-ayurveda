import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Beaker, Shield, Award } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Liquids = () => {
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

  const syrupList = [
    { srNo: 1, description: 'Herbal digestive tonic', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 2, description: 'Liver tonic with benefit of enzyme', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 3, description: 'Herbal antacid for instant release', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 4, description: 'For natural liver detoxification', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 5, description: 'Fortified formulation for healthy liver', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 6, description: 'For renal stones and UTI', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 7, description: 'Effective remedy for cough and cold', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 8, description: 'For easier breathing (Asthma)', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 9, description: 'Enriched with honey and tulsi Cough Syrup', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 10, description: 'Natural neurotative health tonic', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 11, description: 'Powerful vital health tonic', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 12, description: 'Herbal health restorative for all ages', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 13, description: 'A syrup of ashoka with supportive (Uterine Tonic)', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 14, description: 'Health restorative & uterine tonic', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 15, description: 'Natural and non hormonal support therapy', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 16, description: 'Nourishing tonic for general vitality', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 17, description: 'For pain free life', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 18, description: 'Herbal tranquilizer', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 19, description: 'Herbal bed wetting remedy', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 20, description: 'Boost intelligence & memory', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 21, description: 'Herbal blood purifier', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 22, description: 'Fortified formulation for healthy liver', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 23, description: 'Herbal digestive tonic', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 24, description: 'Nourishing tonic for general vitality', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 25, description: 'A vigour, vitality & stamina', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 26, description: 'Iron + Calcium Syrup', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 27, description: 'Prostate Care Syrup', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 28, description: 'Multivitamin Syrup', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 29, description: 'Liver + Enzyme + Antacid + Alkaliser Syrup', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 30, description: 'Increase platelet count', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
    { srNo: 31, description: 'For Constipation', packaging: '100 ml / 200 ml / 225 ml / 300 ml / 450ml / 500ml' },
  ];

  const features = [
    { icon: Beaker, title: 'Advanced Formulation', desc: 'State-of-the-art liquid formulation technology' },
    { icon: Shield, title: 'Quality Assured', desc: 'Every batch undergoes rigorous quality testing' },
    { icon: Award, title: 'GMP Certified', desc: 'Manufactured in WHO-GMP certified facilities' },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Liquid" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Products', path: '/our-product' },
          { label: 'Liquid' }
        ]} 
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src="/images/product-liquids.jpg" 
                alt="Liquid Formulation Manufacturing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Get the diverse range of the Liquid Formulation.
              </h2>
              <p className="text-brand-green text-lg mb-4">
                We provide the top services of the production of various types of liquid dosage forms, including: syrups, suspensions, oral drops, tonics etc.
              </p>
              <p className="text-gray-600 mb-8">
                We produce excellent quality Ayurvedic Liquid using cutting-edge technology for different health requirements, ensuring consistency as well as safety.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syrup List Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Product Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              A Detailed, High-Quality Ayurvedic Composition List.
            </h2>
            <p className="text-gray-600 mt-4">
              Some other elements of our services
            </p>
          </div>

          <div className="reveal bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-brand-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Sr No.</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-left font-semibold">Packaging</th>
                  </tr>
                </thead>
                <tbody>
                  {syrupList.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-gray-600">{item.srNo}</td>
                      <td className="px-6 py-4 text-brand-navy font-medium">{item.description}</td>
                      <td className="px-6 py-4 text-gray-600">{item.packaging}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Why Choose Our Liquids</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Superior Quality Liquid Manufacturing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Syrups & Suspensions', desc: 'Wide range of syrups and suspensions for various health conditions.' },
              { title: 'Oral Drops & Tonics', desc: 'Specialized oral drops and health tonics for all age groups.' },
              { title: 'Custom Flavors', desc: 'Delicious flavors to enhance palatability and patient compliance.' },
              { title: 'High Production Capacity', desc: 'Monthly capacity of 2 million units to meet bulk order requirements.' },
              { title: 'Amber Glass Packaging', desc: 'Premium amber glass bottles for light-sensitive formulations.' },
              { title: 'Quality Testing', desc: 'Complete in-house testing for pH, viscosity, and microbial limits.' },
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for Custom Liquid Formulations?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your liquid manufacturing requirements. We offer competitive pricing and exceptional quality for all your Ayurvedic liquid needs.
            </p>
            <Link 
              to="/contact"
              className="bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark-green transition-colors inline-flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Liquids;
