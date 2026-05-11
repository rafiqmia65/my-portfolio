import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  // const resumeUrl = "/Resume.pdf";

  return (
    <section className="relative min-h-screen pt-25 pb-12 lg:pb-5 lg:pt-35 overflow-hidden bg-primary">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-success/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-success/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-0 flex flex-col-reverse lg:flex-row items-center justify-center relative z-10">
        {/* Left: Text & Buttons */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:pr-10 mt-12 lg:mt-0">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium tracking-wider uppercase border border-success/20">
              Hello, I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-2 leading-tight">
              Md <span className="text-success">Rafiq Mia</span>
            </h1>
          </div>

          <div className="w-[320px] md:w-[420px] h-[60px] mx-auto lg:mx-0 flex items-center justify-center lg:justify-start text-2xl font-bold text-white bg-white/5 px-6 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Backend Developer",
                "Frontend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <p className="max-w-lg mx-auto lg:mx-0 text-lg text-white/80 leading-relaxed font-medium">
            Full Stack Developer focused on building modern, scalable, and
            high-performance web applications with great user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://drive.google.com/file/d/1qpEHK-46o8DuH7AAehZ2ImEN3QJ5GYdo/view"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-success text-[#1c352d] font-bold transition-all shadow-[0_0_20px_rgba(166,178,139,0.3)] hover:shadow-[0_0_30px_rgba(166,178,139,0.5)] hover:-translate-y-1 transform duration-300"
            >
              <FaDownload className="text-lg group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-success/50 text-success hover:bg-success/10 font-bold transition-all hover:-translate-y-1 transform duration-300 backdrop-blur-sm"
            >
              <FaPaperPlane className="text-lg" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center lg:justify-start space-x-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/rafiqmia65", title: "GitHub" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rafiqmia65/", title: "LinkedIn" },
              { icon: <FaTwitter />, link: "https://x.com/rafiqmia65", title: "Twitter" },
              { icon: <FaWhatsapp />, link: "https://wa.me/8801785489196", title: "WhatsApp" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:text-success hover:border-success/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(166,178,139,0.3)]"
              >
                <div className="text-xl">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center relative lg:pl-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Background Decorative Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-success/20 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border border-success/10 animate-ping [animation-duration:3s]"></div>
            
            {/* The Image Container with Gradient Mask for Blending */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-success/30 shadow-2xl z-10 group">
              <img
                src="https://i.ibb.co.com/BVpfJsNy/IMG-20260225-003144.png"
                alt="Md Rafiq Mia"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  mixBlendMode: "multiply", // Blends the light grey background with the dark green
                }}
              />
              {/* Overlay to ensure the subject stays visible if multiply is too aggressive */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c352d]/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Accent Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-success/20 rounded-full blur-2xl animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-success/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
