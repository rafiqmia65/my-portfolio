import { useState, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../../assets/MR.png";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeLink, setActiveLink] = useState("home");

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar bg-secondary shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo (Desktop only) */}
        <div className="text-xl font-bold text-primary hidden lg:block">
          <img className="w-10 h-8" src={logo} alt="" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-colors duration-300 ${
                activeLink === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Toggle Button */}
        <div className="hidden lg:block">
          <button
            onClick={handleThemeToggle}
            className="btn btn-sm btn-circle border-none bg-white text-black hover:bg-primary hover:text-white transition"
            title="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile View */}
        <div className="flex justify-between items-center w-full lg:hidden">
          {/* Mobile Left: Icons */}
          <div className="flex gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`p-2 rounded-full ${
                  activeLink === link.href.replace("#", "")
                    ? "text-primary bg-white shadow"
                    : "text-white hover:text-primary"
                }`}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Right: Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className="btn btn-sm btn-circle border-none bg-white text-black hover:bg-primary hover:text-white transition"
            title="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
