import React from 'react';
import logo from '../../public/assets/alx_logo.svg';

// Storing links in an object makes them easier to manage
const footerLinks = {
  explore: [
    { name: 'Apartments in Dubai', href: '#' },
    { name: 'Hotels in New York', href: '#' },
    { name: 'Villa in Spain', href: '#' },
    { name: 'Mansion in Indonesia', href: '#' },
  ],
  company: [
    { name: 'About us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Brand', href: '#' },
  ],
  help: [
    { name: 'Support', href: '#' },
    { name: 'Cancel booking', href: '#' },
    { name: 'Refunds Process', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          
          {/* Column 1: Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-3 mr-10">
            <img src={logo} alt="ALX Logo" className="h-8 mb-4" />
            <p className="text-sm leading-relaxed">
              ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy, city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div className="mx-10">
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="mx-10">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Help Links */}
          <div className="ml-10">
            <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-10" />

        {/* Sub-footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-center sm:text-left mb-4 sm:mb-0">
            Some hotel requires you to cancel more than 24 hours before check-in. Details <a href="#" className="text-white underline hover:no-underline">here</a>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Policy service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
            <a href="#" className="hover:text-white transition-colors">Partners</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;