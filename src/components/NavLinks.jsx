import React from "react";

const NavLinks = () => {
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
    <nav className="flex items-center space-x-6">
      <a
        href="#about"
        onClick={handleClick}
        className="nav-link text-blue-200 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        About
      </a>
      <a
        href="#experience"
        onClick={handleClick}
        className="nav-link text-blue-200 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        Experience
      </a>

      <a
        href="#tech"
        onClick={handleClick}
        className="nav-link text-blue-200 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        Tech Stack
      </a>
      <a
        href="#certificates"
        onClick={handleClick}
        className="nav-link text-blue-200 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        Certificates
      </a>
    </nav>
  );
};

export default NavLinks;
