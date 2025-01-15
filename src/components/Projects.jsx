import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-preahvihear mb-8 sm:mb-10 md:mb-12 gradient-text text-center md:text-left">
        Certifications
      </h2>

      <div className="group rounded-2xl animated-border p-[1px] relative overflow-hidden">
        <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#090B1F]/90 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left">
            Professional Certifications
          </h3>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base text-center md:text-left">
            View my complete collection of professional certifications and
            achievements on Credly.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.credly.com/users/benjamin-rebong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-6 py-4 sm:py-3 text-white bg-blue-900/40 hover:bg-blue-800/40 active:bg-blue-700/40 rounded-full transition-colors text-base sm:text-sm z-20"
            >
              <FaExternalLinkAlt /> View My Certifications
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
