import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Import project images
import ProjectImage1 from "../assets/Eccomerce01.jpg";
import ProjectImage2 from "../assets/Eccomerce02.jpg";
import ProjectImage3 from "../assets/Portfolio01.jpg";
import ProjectImage4 from "../assets/FYP01.jpg";
import ProjectImage5 from "../assets/Fruits01.jpg";
import ProjectImage6 from "../assets/Disney01.jpg";

const projects = [
  {
    title: "E-ccomerce",
    link: "https://eccomerce-01-abuzar.vercel.app/",
    image: ProjectImage1,
  },
  {
    title: "E-ccomerce Stylio",
    link: "https://eccomerce-02-abuzar.vercel.app/",
    image: ProjectImage2,
  },
  {
    title: "Portfolio",
    link: "https://maa-old-portfolio.vercel.app/",
    image: ProjectImage3,
  },
  {
    title: "IntraChat Of Islamia College",
    link: "https://fyp-intra-chat-3gdl.vercel.app/",
    image: ProjectImage4,
  },
  {
    title: "Fruits",
    link: "https://grocery-store-react-one.vercel.app/",
    image: ProjectImage5,
  },
  {
    title: "Disney +",
    link: "https://disney-abuzar.vercel.app/",
    image: ProjectImage6,
  },
];

const ProjectComponent = () => {
  return (
    <div className="relative w-full h-[693px] overflow-auto bg-black">
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
                className="relative bg-gray-800 border-2 border-gray-600 rounded-md overflow-hidden shadow-lg glow-effect"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h2 className="text-lg font-bold mb-2 text-gray-200">
                      {project.title}
                    </h2>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
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
