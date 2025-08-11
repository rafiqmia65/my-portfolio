import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (e) {
        console.error("Failed to fetch projects:", e);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/98 text-white"
      >
        <div className="container mx-auto text-center">
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/98 text-white"
      >
        <div className="container mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/98 text-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-success bg-clip-text text-transparent">
            <span className="text-white">Featured</span> Projects
          </h2>
          <p className="mt-3 text-lg text-white">
            Showcasing my best work with modern tech & sleek design.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <a
          href={"https://github.com/rafiqmia65"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit mx-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-success/90 to-emerald-700 text-white font-semibold hover:shadow-lg hover:shadow-success/20 transition-all duration-300"
        >
          <FaExternalLinkAlt />
          <span>View more on Github</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
