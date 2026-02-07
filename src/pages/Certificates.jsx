import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Certificates = () => {
  const observerRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

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

  const certificates = [
    {
      name: 'GST Registration',
      image: '/images/cert-gst.jpg',
      description: 'Goods and Services Tax registration certificate ensuring compliance with Indian tax regulations.',
      issuedBy: 'Government of India'
    },
    {
      name: 'MSME Udyam Registration',
      image: '/images/cert-msme.jpg',
      description: 'Micro, Small and Medium Enterprises registration recognizing our business classification.',
      issuedBy: 'Ministry of MSME, Government of India'
    },
    {
      name: 'FSSAI License',
      image: '/images/cert-fssai.jpg',
      description: 'Food Safety and Standards Authority of India license for food and supplement manufacturing.',
      issuedBy: 'FSSAI, Government of India'
    },
    {
      name: 'GMP Certificate',
      image: '/images/cert-gmp.jpg',
      description: 'Good Manufacturing Practice certification ensuring pharmaceutical quality standards.',
      issuedBy: 'WHO-GMP Certified'
    },
    {
      name: 'ISO 9001:2015',
      image: '/images/cert-iso.jpg',
      description: 'International Organization for Standardization certification for quality management systems.',
      issuedBy: 'ISO Certified Body'
    },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Certificates" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Certificates' }
        ]} 
      />

      {/* Certificates Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Our Certificates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Accredited certifications ensuring superior quality in manufacturing processes and products.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="reveal group">
                <div 
                  className="relative bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-brand-navy" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-brand-navy text-lg mb-1">{cert.name}</h3>
                    <p className="text-brand-green text-sm">{cert.issuedBy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Quality Assurance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Our Quality Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'GMP Compliance', 
                desc: 'All our manufacturing processes strictly adhere to Good Manufacturing Practice guidelines set by WHO.' 
              },
              { 
                title: 'ISO 9001:2015', 
                desc: 'Our quality management system is certified to meet international standards.' 
              },
              { 
                title: 'FSSAI Standards', 
                desc: 'We comply with all Food Safety and Standards Authority of India regulations.' 
              },
              { 
                title: 'In-House Testing', 
                desc: 'Equipped with HPLC and UV spectrophotometers for real-time quality testing.' 
              },
              { 
                title: 'Batch Consistency', 
                desc: 'Every batch is tested to ensure consistency and compliance with pharmacopeial standards.' 
              },
              { 
                title: 'Documentation', 
                desc: 'Complete documentation and traceability for all products manufactured.' 
              },
            ].map((item, index) => (
              <div key={index} className="reveal bg-white rounded-xl p-6 shadow-card">
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-brand-navy text-lg">{selectedCert.name}</h3>
                <p className="text-brand-green text-sm">{selectedCert.issuedBy}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-4 text-gray-600">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
