import React, { useState, useEffect, useCallback } from "react";
import IMG from "../assets/Abu.jpg";
import ResumeImage from "../assets/AbuCV Final_page-0001.jpg";
import ContactForm from "./ContactForm";

const HomeComponent = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const text = "I'm Abuzar";
  const typingSpeed = 75;
  const resetInterval = 6000;

  const handleResumeClick = () => {
    setShowResumeModal(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const handleCloseResumeModal = () => {
    setShowResumeModal(false);
  };

  const resetTypingEffect = useCallback(() => {
    setDisplayedText("");
    setIndex(0);
    setIsTyping(true);
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
      }
    } else {
      const timer = setTimeout(() => {
        resetTypingEffect();
      }, resetInterval);

      return () => clearTimeout(timer);
    }
  }, [index, text, isTyping, typingSpeed, resetTypingEffect]);

  return (
    <div className="relative w-full h-[697px] overflow-hidden bg-black">
      {/* Fallback Image */}
      <img
        src={IMG}
        alt="Fallback Image"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="flex flex-col items-center justify-center relative w-full h-full bg-black text-white p-4 md:p-8">
        <style>
          {`
            @keyframes popOutAndBack {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
              100% {
                transform: scale(1);
              }
            }

            .circle-container {
              position: relative;
              width: 12rem; /* Default size for small screens */
              height: 12rem; /* Default size for small screens */
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              overflow: hidden;
              border: 4px solid #d1d5db; /* Thin professional gray border */
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); /* Slightly less intense shadow */
              box-sizing: border-box;
            }

            .circle-container img {
              position: relative;
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: 0;
              animation: popOutAndBack 5s infinite;
            }

            .circle-container::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.4); /* Darker overlay for better contrast */
              z-index: 1;
            }

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

            @media (min-width: 768px) {
              .circle-container {
                width: 16rem; /* Larger size for medium and larger screens */
                height: 16rem; /* Larger size for medium and larger screens */
              }
            }
          `}
        </style>
        <div className="circle-container">
          <img src={IMG} alt="Abuzar" />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-200">
            {displayedText}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-300">
            Frontend Developer
          </h2>
          <p className="text-base max-w-xs sm:max-w-sm md:max-w-xl mx-auto mb-6 text-gray-400">
            Passionate Frontend Developer skilled in React and modern web
            technologies, creating efficient and dynamic web applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow-md hover:bg-teal-800 transition duration-300"
            >
              Connect with Me
            </button>
            <button
              onClick={handleResumeClick}
              className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 border text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-300"
            >
              My Resume
            </button>
          </div>
        </div>
        {showContactForm && (
          <div className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-75 z-50">
            <div className="relative bg-white w-full max-w-md h-full max-h-screen slide-in-left">
              <ContactForm onClose={handleCloseContactForm} />
            </div>
          </div>
        )}
        {showResumeModal && (
          <div className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-75 z-50">
            <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full slide-in-left">
              <button
                onClick={handleCloseResumeModal}
                className="absolute top-2 right-2 text-gray-800 text-xl font-bold"
              >
                &times;
              </button>
              <img src={ResumeImage} alt="Resume" className="w-full h-auto" />
              <a
                href={ResumeImage}
                download="Abuzar_Resume.jpg"
                className="absolute bottom-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-teal-800 transition duration-300 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7m-7 4l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
