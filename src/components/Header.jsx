import React from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from "react-icons";
import { FaArrowRight } from 'react-icons/fa'

const Header = () => {
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Logo">
              Logo
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="btn-md text-gray-200 bg-gray-900 hover:bg-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out ml-3">
                  <span>Sign up</span>
                  <IconContext.Provider value={{ className: "text-gray-200 ml-2" }}>
                    <div>
                      <FaArrowRight />
                    </div>
                  </IconContext.Provider>
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
