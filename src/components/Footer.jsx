import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-8 mt-24 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Benjamin Joshua N. Rebong. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;