import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  const resumeUrl = "/MdRafiqMia_Resume.pdf";

  return (
    <section
      id="home"
      className="min-h-screen bg-secondary flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 py-12 lg:py-0"
    >
      {/* Left: Text */}
      <div className="flex-1 text-center lg:text-left space-y-6 lg:pr-10 mt-12 lg:mt-0">
        <div>
          <span className="text-lg font-medium text-primary">Hello, I'm</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2">
            Md Rafiq Mia
          </h1>
        </div>

        <p className="text-2xl font-semibold text-primary bg-primary/10 px-4 py-2 rounded-lg inline-block backdrop-blur-sm border border-primary/20">
          FrontEnd Developer | React.js Specialist
        </p>

        <p className="max-w-lg mx-auto lg:mx-0 text-lg text-white leading-relaxed">
          I'm a Frontend Developer passionate about building modern, responsive,
          and user-friendly web interfaces using React.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href={resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-success hover:bg-success/90 text-base font-semibold transition-all shadow-lg hover:shadow-success/40 hover:-translate-y-1 transform duration-300"
          >
            <FaDownload className="text-lg" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 font-semibold transition-all hover:shadow-lg hover:-translate-y-1 transform duration-300"
          >
            <FaPaperPlane className="text-lg" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center lg:justify-start space-x-5 text-2xl">
          <a
            href="https://github.com/rafiqmia65"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-white hover:text-primary transition-all hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rafiqmia65/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-white hover:text-primary transition-all hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/rafiqmia65"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="text-white hover:text-primary transition-all hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/8801785489196"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="text-white hover:text-primary transition-all hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="flex-1 flex justify-center relative">
        <div className="relative">
          <img
            src="https://i.ibb.co/39x6vLZQ/1717276024050.jpg"
            alt="Md Rafiq Mia"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-success relative z-10"
          />
          {/* Border and Glow Effects */}
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-full border-4 border-error z-0"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-error/20 z-0 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-error/20 z-0 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
