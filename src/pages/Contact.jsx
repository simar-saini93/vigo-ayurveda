import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Contact = () => {
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: [
        'F-95, Focal Point, Phase 7, Industrial Area,',
        'Sector 73, Sahibzada Ajit Singh Nagar,',
        'Punjab 160062'
      ],
      link: 'https://maps.app.goo.gl/zWkjSNBvpKxYUeVe9'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['vigoayurveda@gmail.com', 'customercare@vigoayurveda.com'],
      link: 'mailto:info@vigoayurveda.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-7888840794', '+91-7888840792'],
      link: 'tel:+917888840794'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: [
        'Monday - Friday: 09.00 am to 07.00 pm',
        'Saturday: 10.00 am to 06.00 pm',
        'Sunday: Closed'
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Contact" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' }
        ]} 
      />

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1234567890123!2d76.12345678901234!3d30.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjQiTiA3NsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vigo Ayurveda Location"
        ></iframe>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="reveal">
              <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Quick Contact</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3 mb-4">
                Have Questions? Don't Hesitate to Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Contact Vigo Ayurveda for all inquiries—our services are free and we're here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 text-sm hover:text-brand-green transition-colors"
                        >
                          {item.details.map((detail, dIndex) => (
                            <span key={dIndex} className="block">{detail}</span>
                          ))}
                        </a>
                      ) : (
                        <div className="text-gray-600 text-sm">
                          {item.details.map((detail, dIndex) => (
                            <span key={dIndex} className="block">{detail}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal">
              <span className="text-brand-green font-medium uppercase tracking-wide text-sm">Let's Connect</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3 mb-6">
                Send Your Message
              </h2>

              {submitMessage && (
                <div className="bg-brand-green/10 border border-brand-green text-brand-green px-4 py-3 rounded-lg mb-6">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="product"
                      placeholder="Your Product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green text-white py-3 rounded-lg font-medium hover:bg-brand-dark-green transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8">
              Get in touch with us today to discuss your manufacturing requirements. We offer competitive pricing and exceptional quality for all your ayurvedic product needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+917888840794"
                className="bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark-green transition-colors inline-flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a 
                href="mailto:info@vigoayurveda.com"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-brand-navy transition-colors inline-flex items-center gap-2"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
