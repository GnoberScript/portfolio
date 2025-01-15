import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-400 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-preahvihear mb-8 sm:mb-10 md:mb-12 gradient-text text-center">
          Let's Connect!
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg px-4 sm:px-0">
            I'm always open to new opportunities and connections. Feel free to
            reach out to me on LinkedIn!{" "}
            <a
              href="https://www.linkedin.com/in/benjamin-rebong-15a5b12a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-1 sm:px-1  ml-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:translate-x-1"
            >
              ➡
              <FaLinkedin className=" sm:ml-2 text-xl sm:text-2xl" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
