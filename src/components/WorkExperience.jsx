import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "AMA-Computer College's Website",
      company: "AMA-Computer College",
      role: "Lead Developer",
      duration: "2023 - Present",
      description:
        "Led the development of the school's official website using modern web technologies and best practices.",
      technologies: ["React", "JavaScript", "TailwindCSS", "HTML"],
      achievements: [
        "Created a user-friendly front page for school inquiries",
        "Developed an accessible interface for prospective students",
        "Streamlined the school inquiry process",
      ],
    },
    {
      title: "Applicant Tracking System",
      company: "GlobalTek BPO Inc.",
      role: "Lead Developer",
      duration: "2024 - Present",
      description:
        "Serves as a helping tool for the HR, hiring manager, and recruiter.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "TailwindCSS",
        "MongoDB",
      ],
      achievements: [
        "Developed HR management interface",
        "Implemented applicant tracking functionality",
        "Created a user-friendly hiring process workflow",
      ],
    },
  ];

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
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-preahvihear mb-8 sm:mb-10 md:mb-12 gradient-text text-center md:text-left">
          Work Experience
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group hover-lift animated-border p-[1px] rounded-2xl"
            >
              <div className="p-4 sm:p-5 md:p-6 rounded-2xl glass-effect">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 text-center md:text-left">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-center md:text-left">
                      {exp.role}
                    </p>
                    <p className="text-gray-400 text-sm text-center md:text-left">
                      {exp.company}
                    </p>{" "}
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0 text-center md:text-right">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 text-center md:text-left text-sm sm:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-blue-900/40 text-blue-300 smooth-hover hover:bg-blue-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base text-center md:text-left">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="hover:text-blue-400 smooth-hover">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
