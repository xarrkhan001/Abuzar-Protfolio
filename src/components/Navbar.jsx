import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactButtonClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Navbar with Overlay */}
        <nav className="relative bg-black text-white shadow-md w-full">
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

              @keyframes slideInLeft {
                from {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                to {
                  transform: translateX(0);
                  opacity: 1;
                }
              }

              .slide-in-left {
                animation: slideInLeft 0.5s ease-out forwards;
              }

              .text-gradient {
                background: linear-gradient(to right, #14b8a6, #06b6d4, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: bold;
                font-size: 2rem;
              }

              .logo {
                font-family: 'Pacifico', cursive;
                font-size: 1.5rem;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                background: linear-gradient(to right, #14b8a6, #06b6d4, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
              }

              .navbar-line {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px; /* Thinner underline */
                background: #4b5563; /* Light gray color */
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                margin: 0; /* Remove any margin */
                padding: 0; /* Remove any padding */
              }

              .hamburger-menu {
                font-size: 1.5rem;
                cursor: pointer;
                transition: color 0.3s;
              }

              .hamburger-menu:hover {
                color: #3b82f6;
              }

              .mobile-menu {
                width: 50%;
                max-width: 300px;
                background: rgba(0, 0, 0, 0.9);
                box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
                transition: transform 0.3s ease;
                z-index: 40;
              }

              .mobile-menu ul li {
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
              }

              .mobile-menu .nav-item {
                color: white; /* White color for items in the mobile menu */
              }

              .mobile-menu .nav-item:hover {
                color: #06b6d4; /* Highlight color on hover for mobile menu items */
              }

              .contact-form-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.75);
                z-index: 50;
                display: flex;
                align-items: center;
                justify-content: flex-start;
              }

              .contact-form-content {
                width: 100%;
                max-width: 400px;
                height: 100%;
                background: white;
                overflow: auto;
                position: relative;
                transform: translateX(-100%);
                animation: slideInLeft 0.5s ease-out forwards;
              }

              @media (max-width: 768px) {
                .logo {
                  display: none; /* Hide logo on small screens */
                }
              }
            `}
          </style>
          <div className="container mx-auto flex items-center justify-between p-4 relative z-10">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden hamburger-menu text-white focus:outline-none"
            >
              &#9776;
            </button>

            {/* Logo as Link */}
            <Link to="/" className="logo">
              ABUZAR
            </Link>

            {/* Navigation Links */}
            <ul
              className={`fixed inset-0 top-20 lg:static lg:flex lg:space-x-8 lg:bg-transparent lg:opacity-100 lg:transition-none lg:translate-x-0 transform transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "mobile-menu translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`transition-transform duration-500 ${
                    isVisible ? "slide-in-left" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Link
                    to={item.path}
                    className={`nav-item text-lg font-medium hover:text-gray-300 transition duration-300 block px-4 py-2 ${
                      isMobileMenuOpen ? "text-white" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Connect Button */}
            <div className="hidden lg:block">
              <button
                onClick={handleContactButtonClick}
                className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
              >
                Connect with Me
              </button>
            </div>

            {/* Mobile Connect Text */}
            <div className="lg:hidden">
              <button
                onClick={handleContactButtonClick}
                className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white px-4 py-1 rounded-full shadow hover:bg-blue-700 transition duration-300"
              >
                Connect
              </button>
            </div>
          </div>
          {/* Decorative Line */}
          <div className="navbar-line"></div>
        </nav>
      </div>

      {/* Conditionally render ContactForm component with slide-in effect */}
      {showContactForm && (
        <div className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-75 z-50">
          <div className="relative bg-white w-full max-w-md h-full max-h-screen slide-in-left">
            <ContactForm onClose={handleCloseContactForm} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
