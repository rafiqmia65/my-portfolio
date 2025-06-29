import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: "hoteleo",
    name: "Hoteleo",
    images: [
      "https://i.ibb.co/Z1m8MtxC/Screenshot-47.png",
      "https://i.ibb.co/jkpBFykM/Screenshot-48.png",
    ],
    description:
      "Hoteleo is a hotel booking platform where users can browse, filter, and book rooms. Includes authentication, booking dashboard, reviews, and admin controls.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Express",
      "MongoDB",
      "JWT",
      "DaisyUi",
    ],
    github: "https://github.com/rafiqmia65/hoteleo-client",
    live: "https://hoteleo.netlify.app/",
  },
  {
    id: "tasknexus",
    name: "TaskNexus",
    images: [
      "https://i.ibb.co/8gnZc5R8/Screenshot-49.png",
      "https://i.ibb.co/dJQY5W4v/Screenshot-50.png",
    ],
    description:
      "TaskNexus helps users manage their daily productivity through task creation, status updates,Task bids and deadlines. Includes authentication, role-based views, and REST API.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind",
    ],
    github: "https://github.com/rafiqmia65/tasknexus-client",
    live: "https://rafiqmia-tasknexus.netlify.app/",
  },
  {
    id: "hibiscus",
    name: "Job Tracks",
    images: [
      "https://i.ibb.co/Pv2Lvq03/Screenshot-51.png",
      "https://i.ibb.co/GvWtvjHd/Screenshot-52.png",
    ],
    description:
      "Job Tracks is a modern and efficient job application tracking platform designed to help job seekers organize and streamline their job hunt journey. It offers intuitive tools and a visually clean interface to monitor all application-related activities in one place.",
    technologies: ["React", "React Router", "Firebase", "Tailwind", "Express"],
    github: "https://github.com/rafiqmia65/hibiscus",
    live: "https://hibiscus-feee5.web.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-secondary py-12 pt-0 px-4 lg:px-20"
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        My Projects
      </h2>

      <div className="space-y-14">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col lg:flex-row p-5 rounded-2xl shadow-2xl ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Swiper Image Carousel */}
            <div className="w-full lg:w-1/2">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="custom-swiper rounded-lg shadow-lg"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                {project.name}
              </h3>
              <p className="text-accent">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/20 text-sm text-white rounded-full shadow-sm border border-primary/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-black transition"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-black font-medium rounded hover:bg-secondary transition border-primary border hover:text-primary"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
