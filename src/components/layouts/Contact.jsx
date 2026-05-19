import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Input from "../Input";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";


const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-gray-700 text-white py-16 md:py-20">
        <Container>
          {/* Heading */}
          <div className="text-center mb-14">
            <Heading
              text="Contact Me"
              as="h2"
              className="text-3xl md:text-5xl font-bold"
            />

            <p className="text-base md:text-lg pt-4 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Whether you're a startup, agency, or entrepreneur — I’m here to
              help bring your ideas to life through modern and scalable web
              experiences.
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* Availability */}
              <div className="inline-block px-6 py-3 rounded-full bg-teal-500/20 border border-teal-400 w-full lg:w-fit">
                <p className="text-sm md:text-base font-medium text-center">
                  Available for freelance opportunities
                </p>
              </div>

              {/* Intro */}
              <div className="space-y-4">
                <Heading
                  text="Let's build something great together."
                  as="h3"
                  className="text-2xl md:text-3xl font-semibold"
                />
                <p className="text-gray-300 leading-relaxed max-w-lg">
                  I’m currently open to freelance and remote opportunities
                  focused on frontend and fullstack web development.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 text-gray-200">
                <p className="flex items-center gap-3">
                  <MdOutlineMailOutline />
                  <span>montajurrdev@gmail.com</span>
                </p>

                <p className="flex items-center gap-3">
                  <MdOutlineLocationOn />
                  <span>Dhaka, Bangladesh</span>
                </p>
              </div>

              {/* Socials */}
              <div className="flex gap-5 pt-2">
                <a
                  href="https://github.com/montajurrdev/"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 transition "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="http://linkedin.com/in/montajurrdev/"
                  target="_blank"
                  className=" flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 transition "
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className=" bg-slate-600 p-6 md:p-8 rounded-2xl shadow-lg ">
              <form
                action={"https://formspree.io/f/mnjrnzal"}
                method="POST"
                className="space-y-6"
              >
                <Input
                  type="text"
                  name={"name"}
                  placeholder="Your Name"
                  className=" w-full py-3 px-4 rounded-lg outline-none text-black"
                />

                <Input
                  type="email"
                  name={"email"}
                  placeholder="Your Email"
                  className=" w-full py-3 px-4 rounded-lg outline-none text-black"
                />

                <textarea
                  placeholder="Your Message"
                  name="message"
                  className=" w-full h-40 rounded-lg outline-none px-4 py-3 text-white "
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 font-semibold hover:opacity-90 transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
