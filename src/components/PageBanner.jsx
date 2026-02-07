import { Link } from 'react-router-dom';

const PageBanner = ({ title, breadcrumbs }) => {
  return (
    <div 
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/page-banner-bg.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-green/80"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <nav className="flex justify-center items-center gap-2 text-white/90">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-white/60">/</span>}
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-red-400">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageBanner;
