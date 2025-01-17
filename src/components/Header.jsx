import "../styles/modern-header.css";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  dark:bg-slate-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } header-shadow`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="relative flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-preahvihear font-semibold text-blue-500"
          >
            {"< GnoberScript / >"}
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-blue-500 hover:text-blue-600 absolute right-0 "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop and Mobile Navigation */}
          <div className={`lg:block ${isMobileMenuOpen ? "block" : "hidden"}`}>
            <NavLinks
              isMobile={isMobileMenuOpen}
              onLinkClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
