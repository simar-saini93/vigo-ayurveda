import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Blogs = () => {
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

  const blogPosts = [
    {
      title: 'Understanding Nutraceuticals: Benefits and Applications',
      excerpt: 'Nutraceuticals are products derived from food sources that provide extra health benefits beyond basic nutritional value. Learn about their various applications in healthcare.',
      image: '/images/product-capsules.jpg',
      author: 'Harmeda Healthcare',
      date: 'Jan 15, 2025',
      category: 'Nutraceuticals'
    },
    {
      title: 'The Rise of Ayurvedic Medicine in Modern Healthcare',
      excerpt: 'Ayurvedic medicine has been gaining popularity worldwide. Discover how traditional Indian medicine is being integrated into modern healthcare practices.',
      image: '/images/product-liquids.jpg',
      author: 'Harmeda Healthcare',
      date: 'Jan 10, 2025',
      category: 'Ayurveda'
    },
    {
      title: 'GMP Certification: Why It Matters for Pharmaceutical Manufacturing',
      excerpt: 'Good Manufacturing Practice (GMP) certification ensures that products are consistently produced and controlled to quality standards. Learn why its crucial.',
      image: '/images/about-lab.jpg',
      author: 'Harmeda Healthcare',
      date: 'Jan 5, 2025',
      category: 'Quality'
    },
    {
      title: 'Protein Supplements: Types and Benefits',
      excerpt: 'Protein supplements come in various forms including whey, casein, and plant-based options. Understand which type suits your needs best.',
      image: '/images/product-protein.jpg',
      author: 'Harmeda Healthcare',
      date: 'Dec 28, 2024',
      category: 'Supplements'
    },
    {
      title: 'Third-Party Manufacturing: Advantages for Your Business',
      excerpt: 'Outsourcing manufacturing to specialized facilities can help businesses scale efficiently. Explore the benefits of third-party pharmaceutical manufacturing.',
      image: '/images/feature-rnd.jpg',
      author: 'Harmeda Healthcare',
      date: 'Dec 20, 2024',
      category: 'Manufacturing'
    },
    {
      title: 'Quality Control in Pharmaceutical Production',
      excerpt: 'Quality control is essential in pharmaceutical manufacturing. Learn about the various testing methods and standards that ensure product safety.',
      image: '/images/hero-banner.jpg',
      author: 'Harmeda Healthcare',
      date: 'Dec 15, 2024',
      category: 'Quality'
    },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Blogs" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blogs' }
        ]} 
      />

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
              Latest News & Articles
            </h2>
            <p className="text-gray-600 mt-4">
              Stay updated with the latest trends and insights in the nutraceutical and ayurvedic manufacturing industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="reveal group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-green text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-brand-navy text-lg mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link 
                      to="#"
                      className="inline-flex items-center gap-2 text-brand-green font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-brand-light-green">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest updates on our products, industry news, and health tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
              />
              <button
                type="submit"
                className="bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark-green transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
