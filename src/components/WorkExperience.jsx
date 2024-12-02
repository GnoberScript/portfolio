/* eslint-disable react/no-unescaped-entities */
const WorkExperience = () => {
  return (
    <div className="relative ">
      {/* Gradient background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-96 h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-400 rounded-full transform blur-3xl opacity-40 "></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-[32px] ">Work Experience</h1>
        </div>
        <div className="flex gap-4">
          <div className="hover:-translate-y-1 hover:shadow-lg transition-all ease-in duration-300 cursor-pointer space-y-1 bg-gradient-to-tr from-[#152743] via-[#3e5971] to-[#3E6DB5] inline-block max-w-md p-6 rounded-[15px] border-t-[6px] border-t-[#d3d2e1]">
            <h4 className="font-poppins font-semibold text-[20px]">
              Our School's Website
            </h4>
            <p className="font-poppins text-[12px] max-w-sm">
              I created my school's website, serving as a front where people can
              inquire about the school.
            </p>
          </div>
          <div className="hover:-translate-y-1 hover:shadow-lg transition-all ease-in duration-300 cursor-pointer space-y-1 bg-gradient-to-tr from-[#152743] via-[#3e5971] to-[#3E6DB5] inline-block max-w-md p-6 rounded-[15px] border-t-[6px] border-t-[#d3d2e1]">
            <h4 className="font-poppins font-semibold text-[20px]">
              Applicant Tracking System
            </h4>
            <p className="font-poppins text-[12px] max-w-sm">
              Serves as a helping tool for the HR, hiring manager, and
              recruiter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
