import React from "react";
import MyImage from "../assets/img7.jpg";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const AboutComponent = () => {
  return (
    <div className="relative w-full h-[693px] bg-black">
      {/* Background Image */}
      <img
        src={MyImage}
        alt="Background Image"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />

      {/* Overlay and Content Container */}
      <div className="absolute inset-0 bg-black flex flex-col lg:flex-row items-center lg:items-start justify-center p-4 md:p-8 lg:p-16 overflow-auto">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-4 lg:mb-0">
          <img
            src={MyImage}
            alt="About Me"
            className="w-full max-w-xs lg:max-w-sm h-auto lg:h-[500px] rounded-lg object-cover border-4 border-gray-500 shadow-lg"
          />
        </div>

        {/* Right Side: Text and Skills */}
        <div className="w-full lg:w-2/3 lg:pl-16 flex flex-col items-center lg:items-start">
          {/* About Me Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6 text-gray-200 text-center lg:text-left">
            About Me
          </h1>

          {/* Paragraph Text for Small and Medium Screens */}
          <div className="block lg:hidden mb-4 text-center text-gray-200">
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              I am an enthusiastic Frontend Developer who enjoys crafting
              engaging web experiences. My focus is on building dynamic and
              intuitive interfaces.
            </p>
          </div>

          {/* Paragraph Text for Large Screens */}
          <div className="hidden lg:block text-gray-200 leading-relaxed text-center lg:text-left">
            <p className="text-base md:text-lg mb-4">
              I’m Abuzar, a Front-End Web Developer from Peshawar, Pakistan. I
              hold a Bachelor’s degree in Software Engineering from Islamia
              College University Peshawar and have two years of experience
              specializing in front-end web development. My expertise lies in
              creating responsive and user-friendly websites.
            </p>
            <p className="text-base md:text-lg mb-6">
              My journey in web development has been marked by a commitment to
              innovation and a drive for continuous improvement. From
              collaborating with cross-functional teams to leading individual
              projects, I bring a blend of creativity and technical proficiency
              to every challenge I encounter.
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full flex flex-col items-center lg:items-start gap-8 overflow-x-auto">
            {/* Skills Heading for Large Screens */}
            <h2 className="hidden lg:block text-2xl lg:text-3xl font-bold text-gray-200">
              Skills
            </h2>

            {/* Skills List */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 overflow-x-auto">
              {/* Skill: HTML */}
              <div className="flex items-center space-x-2 min-w-[120px]">
                <FaHtml5 className="w-8 h-8 text-[#E34F26]" />
                <span className="text-gray-200 text-lg">HTML5</span>
              </div>

              {/* Skill: CSS */}
              <div className="flex items-center space-x-2 min-w-[120px]">
                <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />
                <span className="text-gray-200 text-lg">CSS3</span>
              </div>

              {/* Skill: React */}
              <div className="flex items-center space-x-2 min-w-[120px]">
                <FaReact className="w-8 h-8 text-[#61DAFB]" />
                <span className="text-gray-200 text-lg">React</span>
              </div>

              {/* Skill: TailwindCSS */}
              <div className="flex items-center space-x-2 min-w-[120px]">
                <SiTailwindcss className="w-8 h-8 text-[#38BDF8]" />
                <span className="text-gray-200 text-lg">TailwindCSS</span>
              </div>

              {/* Skill: JavaScript */}
              <div className="flex items-center space-x-2 min-w-[120px]">
                <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />
                <span className="text-gray-200 text-lg">JavaScript</span>
              </div>

              {/* Skill: Next.js */}
              <div className="flex items-center space-x-2 min-w-[120px]">
                <SiNextdotjs className="w-8 h-8 text-[#000000]" />
                <span className="text-gray-200 text-lg">Next.js</span>
              </div>

              {/* Skill: MongoDB */}
              <div className="flex items-center space-x-2 min-w-[120px]">
                <SiMongodb className="w-8 h-8 text-[#4DB33D]" />
                <span className="text-gray-200 text-lg">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
