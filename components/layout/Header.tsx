import React from 'react';
import searchIcon from '../../public/assets/search-icon.svg'; // Import your custom search icon
import logo from '../../public/assets/alx_logo.svg'; // Import your logo

/**
 * A responsive header component with a banner, logo, search bar, and auth buttons.
 */
const Header = () => {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-emerald-700 text-white py-2 px-4 sm:px-6 lg:px-8 flex justify-center items-center text-sm">
        <div className="flex items-center space-x-2">
          <span>Overseas trip? Get the latest information on travel guides</span>
          <button className="ml-4 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold py-1.5 px-3 rounded-full transition-colors">
            More Info
          </button>
        </div>
      </div>

      {/* Main Navigation and Search */}
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo  */}
          <div className="text-sm font-bold">
            <a href="/">
              <img src={logo} alt="Logo" className="h-8" />
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 max-w-xl bg-white border border-gray-200 rounded-full shadow-md divide-x divide-gray-200">
            {/* Location Input */}
            <div className="flex-1 p-2 px-4"> {/* Reduced padding here */}
              <label htmlFor="location-search" className="block text-[0.7rem] font-medium text-gray-700">Location</label>{/* Reduced font size */}
              <input
                type="text"
                id="location-search"
                placeholder="Search for destination"
                className="w-full text-xs bg-transparent border-none p-0 focus:ring-0 text-sm placeholder-gray-400"
              />
            </div>

            {/* Check-in Date Input */}
            <div className="w-24 p-2 px-3"> {/* Reduced width and padding here */}
              <label htmlFor="checkin-date" className="block text-[0.7rem] font-medium text-gray-700">Check in</label>{/* Reduced font size */}
              <input
                type="text"
                id="checkin-date"
                placeholder="Add date"
                className="w-full text-xs bg-transparent border-none p-0 focus:ring-0 text-sm placeholder-gray-400"
              />
            </div>

            {/* Check-out Date Input */}
            <div className="w-24 p-2 px-3"> {/* Reduced width and padding here */}
              <label htmlFor="checkout-date" className="block text-[0.7rem] font-medium text-gray-700">Check out</label>{/* Reduced font size */}
              <input
                type="text"
                id="checkout-date"
                placeholder="Add date"
                className="w-full text-xs bg-transparent border-none p-0 focus:ring-0 text-sm placeholder-gray-400"
              />
            </div>

            {/* People/Guests Input with Search Button */}
            <div className="flex items-center p-1 pl-3 relative"> {/* Reduced padding here and made relative */}
              <div className="flex-1">
                <label htmlFor="num-people" className="block text-[0.7rem] font-medium text-gray-700">People</label>{/* Reduced font size */}
                <input
                  type="text"
                  id="num-people"
                  placeholder="Add guest"
                  className="w-full text-xs bg-transparent border-none p-0 focus:ring-0 text-sm placeholder-gray-400"
                />
              </div>
              <button
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Search">
                <img src={searchIcon} alt="Search" className="h-5 w-5" /> {/* Use your custom icon */}
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="border border-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-full transition-colors hover:bg-emerald-700 hover:text-white">
              Sign in
            </button>
            <button className="border border-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-full transition-colors hover:bg-emerald-700 hover:text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;