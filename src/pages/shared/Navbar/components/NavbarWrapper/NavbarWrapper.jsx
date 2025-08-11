// src/components/NavbarWrapper.js

import React, { useState, useEffect } from "react";
import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobileNavbar";

const NavbarWrapper = ({ navLinks, theme, onThemeToggle }) => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentActive = section.id;
        }
      });
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <DesktopNavbar
        navLinks={navLinks}
        activeLink={activeLink}
        theme={theme}
        onThemeToggle={onThemeToggle}
      />
      <MobileNavbar
        navLinks={navLinks}
        activeLink={activeLink}
        theme={theme}
        onThemeToggle={onThemeToggle}
      />
    </>
  );
};

export default NavbarWrapper;