import { TypeAnimation } from "react-type-animation";
import profilepicture from "../assets/profilepicture.jpg";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
      {/* Image container with modern styling */}
      <div className="flex-shrink-0">
        <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 blur-sm rounded-2xl rotate-6 transform transition-transform hover:rotate-12 duration-300"></div>
          <img
            src={profilepicture}
            alt="Benjamin Joshua N. Rebong"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl z-10 "
          />
        </div>
      </div>

      {/* Existing text content */}
      <div className="flex-1">
        <div className="mb-12">
          <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-preahvihear text-blue-400 text-center md:text-left">
            Hello! I am
          </h4>
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-preahvihear text-center md:text-left">
            Benjamin Joshua N. Rebong
          </h2>
          <div className="text-center md:text-left text-[28px] sm:text-[32px] md:text-[36px] font-preahvihear">
            <TypeAnimation
              sequence={[
                "a Software Engineer",
                1000,
                "a UI/UX Designer",
                1000,
                "a Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="text-[14px] space-y-4 max-w-lg text-center md:text-justify">
          <p>
            A full stack engineer with strong proficiency in frontend
            development, I make meaningful and efficient web applications that
            provide great services.
          </p>
          <p>
            During my time in college, I had the opportunity to lead my batch in
            many projects. I was also entrusted with creating my school&apos;s
            website, a project that I&apos;m proud of, and that reflects my
            commitment in using technology to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
