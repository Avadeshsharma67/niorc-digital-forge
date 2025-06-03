
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];
    
    let currentPath = '';
    pathnames.forEach((pathname) => {
      currentPath += `/${pathname}`;
      
      // Convert pathname to readable label
      let label = pathname
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Handle specific cases
      if (pathname === 'digital-transformation') label = 'Digital Transformation';
      if (pathname === 'enterprise-mobility') label = 'Enterprise Mobility';
      if (pathname === 'product-engineering') label = 'Product Engineering';
      if (pathname === 'quality-engineering') label = 'Quality Engineering';
      if (pathname === 'digital-marketing') label = 'Digital Marketing';
      if (pathname === 'content-marketing') label = 'Content Marketing';
      if (pathname === 'social-media') label = 'Social Media';
      if (pathname === 'case-studies') label = 'Case Studies';
      
      breadcrumbs.push({ label, path: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center">
              {index === 0 && <Home className="w-4 h-4 mr-1" />}
              {index < breadcrumbs.length - 1 ? (
                <Link
                  to={breadcrumb.path}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span className="text-gray-500">{breadcrumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
