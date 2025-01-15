import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFigma,
} from "react-icons/si";

const TechStack = () => {
  return (
    <div className="container mx-auto  ">
      <h2 className="text-4xl font-preahvihear mb-12 gradient-text">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="animated-border p-[1px] rounded-2xl">
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#090B1F]/90 h-full">
            <p className="text-xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Frontend
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <FaReact className="w-8 h-8 text-[#61DAFB] group-hover:animate-spin-slow" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  React
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <SiNextdotjs className="w-8 h-8 group-hover:scale-110 transition-transform " />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  Next.js
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <SiJavascript className="w-8 h-8 text-[#F7DF1E] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  JavaScript
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <FaHtml5 className="w-8 h-8 text-[#E34F26] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  HTML
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <FaCss3Alt className="w-8 h-8 text-[#1572B6] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  CSS
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <SiTailwindcss className="w-8 h-8 text-[#06B6D4] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  Tailwind
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <SiTypescript className="w-8 h-8 text-[#3178C6] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="animated-border p-[1px] rounded-2xl">
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#090B1F]/90 h-full">
            <p className="text-xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Backend
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <FaNode className="w-8 h-8 text-[#339933] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  Node.js
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <SiExpress className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  Express
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="animated-border p-[1px] rounded-2xl">
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#090B1F]/90 h-full">
            <p className="text-xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Database
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <SiMongodb className="w-8 h-8 text-[#47A248] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="animated-border p-[1px] rounded-2xl">
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#090B1F]/90 h-full">
            <p className="text-xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              Design Tool
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                <SiFigma className="w-8 h-8 text-[#F24E1E] group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-70 group-hover:opacity-100">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
