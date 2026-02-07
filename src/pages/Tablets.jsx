import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Beaker, Shield, Award } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Tablets = () => {
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

  const tabletList = [
    { srNo: 1, description: 'Multivitamin & Multimineral Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 2, description: 'Calcium with Vitamin D3 Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 3, description: 'Iron Folic Acid Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 4, description: 'Vitamin C with Zinc Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 5, description: 'Vitamin B Complex Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 6, description: 'Vitamin E Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 7, description: 'Glucosamine with MSM Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 8, description: 'Omega 3 Fish Oil Softgel Capsule', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 9, description: 'Green Tea Extract Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 10, description: 'Garcinia Cambogia Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 11, description: 'Ashwagandha Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 12, description: 'Shilajit Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 13, description: 'Spirulina Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 14, description: 'Aloe Vera Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 15, description: 'Neem Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 16, description: 'Turmeric (Curcumin) Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 17, description: 'Joint Care Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 18, description: 'Liver Care Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 19, description: 'Heart Care Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
    { srNo: 20, description: 'Diabetic Care Tablet', packaging: '10x10 / 10x15 / 30s / 60s' },
  ];

  const features = [
    { icon: Beaker, title: 'Advanced Formulation', desc: 'State-of-the-art tablet formulation with precise ingredient mixing' },
    { icon: Shield, title: 'Quality Assured', desc: 'Every batch undergoes rigorous quality testing and verification' },
    { icon: Award, title: 'GMP Certified', desc: 'Manufactured in WHO-GMP certified facilities' },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Tablets" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Products', path: '/our-product' },
          { label: 'Tablets' }
        ]} 
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src="/images/product-tablets.jpg" 
                alt="Tablets Manufacturing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Get the Premium Quality Tablet Formulation.
              </h2>
              <p className="text-brand-green text-lg mb-4">
                We provide the top services of the production of various types of tablet dosage forms, including: coated, uncoated, effervescent, and chewable tablets.
              </p>
              <p className="text-gray-600 mb-8">
                We produce excellent quality nutraceutical tablets using cutting-edge technology for different health requirements, ensuring consistency as well as safety. Our tablets are manufactured with precision and care to meet the highest quality standards.
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

      {/* Tablet List Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Product Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              A Detailed, High-Quality Tablet Composition List.
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
                  {tabletList.map((item, index) => (
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
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Why Choose Our Tablets</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Superior Quality Tablet Manufacturing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Various Shapes & Sizes', desc: 'Round, oval, and custom-shaped tablets in multiple sizes to suit your requirements.' },
              { title: 'Coating Options', desc: 'Film-coated, sugar-coated, and enteric-coated tablets for different applications.' },
              { title: 'Custom Formulations', desc: 'Develop unique formulations tailored to your specific health and wellness goals.' },
              { title: 'High Production Capacity', desc: 'Monthly capacity of 5 million tablets to meet bulk order requirements.' },
              { title: 'Quality Testing', desc: 'Complete in-house testing including dissolution, hardness, and disintegration tests.' },
              { title: 'Packaging Solutions', desc: 'Blister packs, strip packs, bottles, and custom packaging options available.' },
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
              Looking for Custom Tablet Formulations?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your tablet manufacturing requirements. We offer competitive pricing and exceptional quality for all your nutraceutical tablet needs.
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

export default Tablets;
