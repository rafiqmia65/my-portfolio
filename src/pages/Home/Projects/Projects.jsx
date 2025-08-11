import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    id: "mentorium",
    name: "Mentorium",
    tagline: "Class Management Platform",
    description:
      "A comprehensive class management platform with role-based dashboards for admins, teachers, and students.",
    image: "https://i.ibb.co/mTDv63m/mentorium.jpg",
    technologies: [
      { category: "Frontend", items: ["React", "Tailwind CSS", "React Query"] },
      { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      {
        category: "Services",
        items: ["Firebase Auth", "Stripe", "Cloudinary"],
      },
    ],
    links: {
      live: "https://rafiqmia-mentorium.netlify.app/",
      client: "https://github.com/rafiqmia65/mentorium-client",
      server: "https://github.com/rafiqmia65/mentorium-server",
    },
    features: [
      "Roles & Management: Admin, Teacher, Student Dashboards",
      "Features: Class & Assignment Management, Enrollment, Feedback",
      "Extras: Real-time Progress, Secure Payment (Stripe), Firebase Auth",
    ],
  },
  {
    id: "hoteleo",
    name: "Hoteleo",
    tagline: "Hotel Booking Platform",
    description:
      "A modern hotel booking web application with advanced filtering, real-time availability, and booking management.",
    image: "https://i.ibb.co/4jbyV4M/hoteleo.jpg",
    technologies: [
      {
        category: "Frontend",
        items: ["React", "Tailwind CSS", "React Leaflet"],
      },
      { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { category: "Services", items: ["Firebase Auth", "JWT"] },
    ],
    links: {
      live: "https://hoteleo.netlify.app/",
      client: "https://github.com/rafiqmia65/hoteleo-client",
      server: "https://github.com/rafiqmia65/hoteleo-server",
    },
    features: [
      " Filtering & Search: Rooms by Price, Category, Availability",
      "Booking: Real-time Availability, Manage (Update, Cancel, Review)",
      "Security: Firebase Auth (Email & Google)",
    ],
  },
  {
    id: "tasknexus",
    name: "TaskNexus",
    tagline: "Productivity Management",
    description:
      "A task management application with secure authentication and a fully responsive interface.",
    image: "https://i.ibb.co/Ss8L8zH/tasknexus.jpg",
    technologies: [
      { category: "Frontend", items: ["React", "Tailwind CSS", "DaisyUI"] },
      { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { category: "Services", items: ["Firebase Auth"] },
    ],
    links: {
      live: "https://rafiqmia-tasknexus.netlify.app/",
      client: "https://github.com/rafiqmia65/task-nexus-client",
      server: "https://github.com/rafiqmia65/task-nexus-server",
    },
    features: [
      "Task Management: Create, Edit, Complete, Delete Tasks",
      "Security: Firebase Auth with Secure Access",
      "UI: Fully Responsive & User-Friendly Interface",
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/98 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-success bg-clip-text text-transparent">
            Featured Projects
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
    </section>
  );
};

export default Projects;
