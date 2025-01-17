import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-preahvihear font-semibold text-blue-500"
        >
          {"< GnoberScript / >"}
        </a>

        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
