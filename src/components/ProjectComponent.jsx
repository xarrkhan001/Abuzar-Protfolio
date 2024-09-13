import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Import project images
import ProjectImage1 from "../assets/img7.jpg"; // Replace with your actual image path
import ProjectImage2 from "../assets/img7.jpg"; // Replace with your actual image path
import ProjectImage3 from "../assets/img7.jpg"; // Replace with your actual image path
import ProjectImage4 from "../assets/img7.jpg"; // Replace with your actual image path
import ProjectImage5 from "../assets/img7.jpg"; // Replace with your actual image path
import ProjectImage6 from "../assets/img7.jpg"; // Replace with your actual image path

const projects = [
  {
    title: "IntraChat Of Islamia College University",
    description: "A brief description of Project 1.",
    link: "https://fyp-intra-chat.vercel.app/",
    image: ProjectImage1,
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    link: "https://fyp-intra-chat.vercel.app/",
    image: ProjectImage2,
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    link: "https://fyp-intra-chat.vercel.app/",
    image: ProjectImage3,
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4.",
    link: "https://fyp-intra-chat.vercel.app/",
    image: ProjectImage4,
  },
  {
    title: "Project 5",
    description: "A brief description of Project 5.",
    link: "https://fyp-intra-chat.vercel.app/",
    image: ProjectImage5,
  },
  {
    title: "Project 6",
    description: "A brief description of Project 6.",
    link: "https://fyp-intra-chat.vercel.app/",
    image: ProjectImage6,
  },
];

const ProjectComponent = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="relative w-full h-[693px] overflow-auto bg-black">
      {/* Overlay and Content Container */}
      <div className="absolute inset-0 bg-black p-8 lg:p-16 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-12 text-gray-200 text-center">
          My Latest Work
        </h1>
        <style>
          {`
            @keyframes glow {
              0% {
                box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              }
              50% {
                box-shadow: 0 0 15px rgba(255, 255, 255, 1);
              }
              100% {
                box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              }
            }

            .glow-effect {
              animation: glow 1s infinite;
            }
          `}
        </style>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative bg-gray-800 border-2 border-gray-600 rounded-md overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                  activeProject === index ? "glow-effect" : ""
                }`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h2 className="text-lg font-bold mb-2 text-gray-200">
                      {project.title}
                    </h2>
                    <p className="text-sm mb-4 text-gray-400">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
                      onClick={() => setActiveProject(index)}
                    >
                      <span>View Live Project</span>
                      <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
