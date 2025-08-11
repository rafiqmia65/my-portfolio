import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Loader from "../Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && location.hash) {
      const id = location.hash.substring(1);
      const sectionRefs = {
        home: homeSectionRef,
        about: aboutSectionRef,
        skills: skillsSectionRef,
        projects: projectsSectionRef,
        contact: contactSectionRef,
      };

      const targetRef = sectionRefs[id];

      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <section id="home" ref={homeSectionRef}>
        <Hero />
      </section>
      <section id="about" ref={aboutSectionRef}>
        <About />
      </section>
      <section id="skills" ref={skillsSectionRef}>
        <Skills />
      </section>
      <section id="projects" ref={projectsSectionRef}>
        <Projects />
      </section>
      <section id="contact" ref={contactSectionRef}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
