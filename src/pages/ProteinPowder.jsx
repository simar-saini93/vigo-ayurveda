import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Dumbbell, Shield, Award } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const ProteinPowder = () => {
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

  const proteinList = [
    { srNo: 1, description: 'Whey Protein Powder (Chocolate)', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 2, description: 'Whey Protein Powder (Vanilla)', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 3, description: 'Whey Protein Powder (Strawberry)', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 4, description: 'Whey Protein Powder (Mango)', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 5, description: 'Plant Protein Powder (Pea & Rice)', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 6, description: 'Soy Protein Powder', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 7, description: 'Mass Gainer Protein Powder', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 8, description: 'Lean Muscle Protein Powder', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 9, description: 'Weight Loss Protein Powder', packaging: '500g / 1kg / 2kg / 3kg / 5kg' },
    { srNo: 10, description: 'Kids Protein Powder', packaging: '200g / 400g / 500g / 1kg' },
    { srNo: 11, description: 'Women Protein Powder', packaging: '500g / 1kg / 2kg' },
    { srNo: 12, description: 'Senior Citizen Protein Powder', packaging: '500g / 1kg / 2kg' },
    { srNo: 13, description: 'Diabetic Protein Powder', packaging: '500g / 1kg / 2kg' },
    { srNo: 14, description: 'Immunity Booster Protein Powder', packaging: '500g / 1kg / 2kg' },
    { srNo: 15, description: 'Bone Health Protein Powder', packaging: '500g / 1kg / 2kg' },
    { srNo: 16, description: 'Heart Health Protein Powder', packaging: '500g / 1kg / 2kg' },
    { srNo: 17, description: 'Hair & Skin Protein Powder', packaging: '500g / 1kg / 2kg' },
    { srNo: 18, description: 'Pre-Workout Protein Powder', packaging: '300g / 500g / 1kg' },
    { srNo: 19, description: 'Post-Workout Recovery Protein', packaging: '500g / 1kg / 2kg' },
    { srNo: 20, description: 'Night Time Protein Powder', packaging: '500g / 1kg / 2kg' },
  ];

  const features = [
    { icon: Dumbbell, title: 'Premium Quality', desc: 'High-quality protein sources for optimal results' },
    { icon: Shield, title: 'Quality Assured', desc: 'Every batch undergoes rigorous quality testing' },
    { icon: Award, title: 'GMP Certified', desc: 'Manufactured in WHO-GMP certified facilities' },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Protein Powder" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Products', path: '/our-product' },
          { label: 'Protein Powder' }
        ]} 
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src="/images/product-protein.jpg" 
                alt="Protein Powder Manufacturing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Get the Premium Quality Protein Powder Formulation.
              </h2>
              <p className="text-brand-green text-lg mb-4">
                We provide the top services of the production of various types of protein powder, including: whey protein, plant protein, mass gainers, and specialized formulations.
              </p>
              <p className="text-gray-600 mb-8">
                We produce excellent quality protein powders using cutting-edge technology for different health and fitness requirements, ensuring consistency as well as safety. Our protein powders are perfect for athletes, fitness enthusiasts, and health-conscious individuals.
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

      {/* Protein Powder List Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Product Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              A Detailed, High-Quality Protein Powder Composition List.
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
                  {proteinList.map((item, index) => (
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
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Why Choose Our Protein Powders</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Superior Quality Protein Powder Manufacturing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Whey & Plant Options', desc: 'Both dairy-based whey and plant-based protein options available.' },
              { title: 'Multiple Flavors', desc: 'Delicious flavors including chocolate, vanilla, strawberry, and more.' },
              { title: 'Third-Party Tested', desc: 'All products are tested by independent labs for quality assurance.' },
              { title: 'High Production Capacity', desc: 'Monthly capacity of 1 million units to meet bulk order requirements.' },
              { title: 'Custom Formulations', desc: 'Develop unique formulations tailored to your brand requirements.' },
              { title: 'Premium Packaging', desc: 'High-quality jars and pouches with custom branding options.' },
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
              Looking for Custom Protein Powder Formulations?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your protein powder manufacturing requirements. We offer competitive pricing and exceptional quality for all your sports nutrition needs.
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

export default ProteinPowder;
