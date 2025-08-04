import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 bg-gradient-to-r from-rose-300 via-rose-200 to-pink-100 text-gray-800 shadow-inner border-t border-rose-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col items-center space-y-3 text-center">
        <p className="text-xl sm:text-2xl font-semibold">
          Made with love ❤️ & chai ☕!
        </p>
        <p className="text-sm sm:text-base text-gray-700 hover:text-rose-700 transition duration-200">
          💬 Feel free to connect anytime.
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          &copy; {currentYear} <span className="font-medium">Avinash Kr Mandal</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
