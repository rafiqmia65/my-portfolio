import { useState, useEffect, useMemo } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Initial theme apply
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "#home", icon: <FaHome /> },
      { name: "About", href: "#about", icon: <FaUser /> },
      { name: "Skills", href: "#skills", icon: <FaCode /> },
      { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
      { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
    ],
    []
  );

  // Scroll observer for active link
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
  }, [navLinks]);

  return (
    <>
      <DesktopNavbar
        navLinks={navLinks}
        activeLink={activeLink}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
      <MobileNavbar
        navLinks={navLinks}
        activeLink={activeLink}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
    </>
  );
};

export default Navbar;
