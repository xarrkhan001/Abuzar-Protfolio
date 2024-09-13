import React, { useState, useEffect, useCallback } from "react";
import IMG from "../assets/Abu.jpg";
import ResumeImage from "../assets/AbuCV Final_page-0001.jpg";
import ContactForm from "./ContactForm";
import BackgroundVideo from "../assets/AnimatedVideo.mp4";

const HomeComponent = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
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
    <div className="relative w-full h-[693px] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Image */}
      {videoError && (
        <img
          src={IMG}
          alt="Fallback Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
      )}

      {/* Loading Indicator */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-12 h-12 border-4 border-t-4 border-pink-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center relative w-full h-full bg-black bg-opacity-50 text-white p-4 md:p-8">
        <style>
          {`
            @keyframes rotate-border {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

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
              border: 4px solid rgba(255, 255, 255, 0.7);
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
              background: rgba(0, 0, 0, 0.5);
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
          <h1 className="text-4xl md:text-6xl font-bold bg-green-50 bg-clip-text text-transparent mb-4">
            {displayedText}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Frontend Developer
          </h2>
          <p className="text-base max-w-xs sm:max-w-sm md:max-w-xl mx-auto mb-6">
            Passionate Frontend Developer skilled in React and modern web
            technologies, creating efficient and dynamic web applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Connect with Me
            </button>
            <button
              onClick={handleResumeClick}
              className="bg-gradient-to-br from-black via-gray-800 to-black border text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            >
              My Resume
            </button>
          </div>
        </div>
        {showContactForm && (
          <div className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-75 z-50">
            <div className="relative bg-transparent w-full max-w-md h-full max-h-screen slide-in-left">
              <ContactForm onClose={handleCloseContactForm} />
            </div>
          </div>
        )}
        {showResumeModal && (
          <div className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-75 z-50">
            <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full slide-in-left">
              <button
                onClick={handleCloseResumeModal}
                className="absolute top-2 right-2 text-black text-xl font-bold"
              >
                &times;
              </button>
              <img src={ResumeImage} alt="Resume" className="w-full h-auto" />
              <a
                href={ResumeImage}
                download="Abuzar_Resume.jpg"
                className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center"
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
