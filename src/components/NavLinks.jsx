import React from "react";
import "../styles/navlinks-animation.css";
import "../styles/nav-theme.css";

const NavLinks = ({ isMobile, onLinkClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const element = document.querySelector(target);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={
        isMobile
          ? "mobile-nav flex flex-col space-y-4 absolute top-16 right-0 left-0 w-full z-50"
          : "flex items-center space-x-6"
      }
    >
      <a
        href="#about"
        onClick={(e) => {
          handleClick(e);
          onLinkClick && onLinkClick();
        }}
        className="nav-link text-blue-200 dark:text-gray-300"
        style={isMobile ? { "--nav-index": "0" } : undefined}
      >
        About
      </a>
      <a
        href="#experience"
        onClick={(e) => {
          handleClick(e);
          onLinkClick && onLinkClick();
        }}
        className="nav-link text-blue-200 dark:text-gray-300"
        style={isMobile ? { "--nav-index": "1" } : undefined}
      >
        Experience
      </a>
      <a
        href="#tech"
        onClick={(e) => {
          handleClick(e);
          onLinkClick && onLinkClick();
        }}
        className="nav-link text-blue-200 dark:text-gray-300"
        style={isMobile ? { "--nav-index": "2" } : undefined}
      >
        Tech Stack
      </a>

      <a
        href="#certificates"
        onClick={(e) => {
          handleClick(e);
          onLinkClick && onLinkClick();
        }}
        className="nav-link text-blue-200 dark:text-gray-300"
        style={isMobile ? { "--nav-index": "4" } : undefined}
      >
        Certifications
      </a>
    </nav>
  );
};

export default NavLinks;
