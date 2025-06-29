// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  //   const formRef = useRef();
  //   const [done, setDone] = useState(false);
  // ref={formRef} onSubmit={sendEmail}
  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     emailjs
  //       .sendForm(
  //         "your_service_id", // Replace with your EmailJS service ID
  //         "your_template_id", // Replace with your EmailJS template ID
  //         formRef.current,
  //         "your_user_id" // Replace with your EmailJS public key
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           setDone(true);
  //           formRef.current.reset();
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };

  return (
    <section id="contact" className="bg-secondary py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Contact Me
      </h2>
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form className="space-y-5 w-full">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-accent bg-accent/10 text-white placeholder:text-white rounded-md outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-accent bg-accent/10 text-white placeholder:text-white rounded-md outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full px-4 py-3 border border-accent bg-accent/10 text-white placeholder:text-white rounded-md outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-black transition-all px-6 py-3 rounded-md font-semibold hover:bg-accent cursor-pointer"
          >
            Send Message
          </button>
          {/* {done && (
            <p className="text-success mt-3">Message sent successfully ✅</p>
          )} */}
        </form>
        {/* Contact Info */}
        <div className="space-y-5 mx-auto">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-xl" />
            <span className="text-white">rafiqdeveloper4465@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-primary text-xl" />
            <span className="text-white">+880 1741134465</span>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-primary text-xl" />
            <span className="text-white">+880 1741134465</span>
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-2xl mt-6">
            <a
              href="https://github.com/rafiqmia65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rafiqmia65/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/rafiqmia65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
