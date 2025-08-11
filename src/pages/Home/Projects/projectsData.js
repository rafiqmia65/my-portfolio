// src/components/Projects/projectsData.js
export const projects = [
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
      { category: "Services", items: ["Firebase Auth", "Stripe", "Cloudinary"] }
    ],
    links: {
      live: "https://mentorium-app.web.app/",
      client: "https://github.com/rafiqmia65/mentorium-client",
      server: "https://github.com/rafiqmia65/mentorium-server"
    },
    features: [
      "Admin, Teacher & Student Dashboards",
      "Class & Assignment Management",
      "Real-time Progress Tracking",
      "Secure Payment Integration"
    ]
  },
  {
    id: "hoteleo",
    name: "Hoteleo",
    tagline: "Hotel Booking Platform",
    description:
      "A modern hotel booking web application with advanced filtering, real-time availability, and booking management.",
    image: "https://i.ibb.co/4jbyV4M/hoteleo.jpg",
    technologies: [
      { category: "Frontend", items: ["React", "Tailwind CSS", "React Leaflet"] },
      { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { category: "Services", items: ["Firebase Auth", "JWT"] }
    ],
    links: {
      live: "https://hoteleo.netlify.app/",
      client: "https://github.com/rafiqmia65/hoteleo-client",
      server: "https://github.com/rafiqmia65/hoteleo-server"
    },
    features: [
      "Advanced Room Filtering",
      "Real-time Booking System",
      "Interactive Map View",
      "Secure Authentication"
    ]
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
      { category: "Services", items: ["Firebase Auth"] }
    ],
    links: {
      live: "https://rafiqmia-tasknexus.netlify.app/",
      client: "https://github.com/rafiqmia65/tasknexus-client",
      server: "https://github.com/rafiqmia65/tasknexus-server"
    },
    features: [
      "Task Creation & Management",
      "Priority System",
      "Responsive Design",
      "Secure User Accounts"
    ]
  }
];
