import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { Link } from "react-scroll";
import myphoto from "/src/assets/myphoto.jpg";

const About = () => {
  return (
    <>
      <section id="about" className="bg-gray-700">
        <Container className=" py-16 md:py-20 text-white  mx-auto  shadow-lg">
          {/* Headings */}
          <div className="pb-8 md:pb-12 text-center">
            <Heading
              text="About Me"
              as="h2"
              className="text-3xl md:text-5xl font-bold"
            />
            <p className="max-w-3xl text-base md:text-lg pt-2  mx-auto text-gray-300 leading-relaxed">
              I’m not just a developer. I’m a problem-solver, a layout
              optimizer, and a freelancer who turns ideas into scalable web
              solutions.
            </p>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row justify-between pt-12 gap-14 items-center lg:items-start">
            {/* Left Column – Image + Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col items-center ">
              <div className="flex flex-col items-center ">
                {/* Image */}
                <div className="w-full flex justify-center  rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <img
                    src={myphoto}
                    alt="Profile"
                    className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full shadow-xl border-4 border-slate-700 object-cover"
                  />
                </div>

                {/* Connect Section */}
                <div className="flex flex-col gap-3 mt-8  ">
                  <Heading
                    className=" text-2xl md:text-3xl font-semibold text-white text-center lg:text-left"
                    text="Let’s connect!"
                    as="h4"
                  />
                  <p className="text-gray-300 text-base md:text-lg w-full ">
                    Feel free to download my resume or contact me anytime.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-5 mt-12 ">
                    <a
                      href="/resume.pdf"
                      download
                      className="bg-gradient-to-r hover:from-teal-500 hover:via-green-500 hover:to-blue-500 text-white hover:text-[#232323] font-medium py-3.5 px-7 border border-teal-700 rounded-lg flex items-center justify-center gap-2 w-full transition ease-in-out duration-300"
                    >
                      <span>📄</span> Download My Resume
                    </a>
                    <Link className="cursor-pointer mt-10 bg-gradient-to-r hover:from-teal-500 hover:via-green-500 hover:to-blue-500 text-white hover:text-[#232323] font-medium py-3.5 px-7 border border-teal-700 rounded-lg flex items-center gap-2 w-full  justify-center transition ease-in-out duration-300">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column – Text + Highlights */}
            <div className="w-full lg:w-1/2 flex justify-center text-gray-300">
              <div className="max-w-[500px]">
                {/* Main Intro */}
                {/* <h2 className="text-white text-4xl font-bold mb-4">Hi</h2> */}
                <p className="text-base md:text-lg leading-relaxed mb-4 ">
                  <span className="text-white font-bold ">Hi,</span> I'm
                  Montajur, a Frontend Developer from Bangladesh specializing in
                  Building modern, responsive, and user-focused web
                  applications. I build clean, intuitive, and accessible digital
                  experiences using{" "}
                  <span className="font-semibold text-white">
                    React, Next.js, JavaScript (ES6+), Tailwind CSS, Bootstrap,
                    Sass
                  </span>{" "}
                  and other modern tools.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  I love transforming ideas into smooth UI interactions, solving
                  frontend problems, improving performance, and building
                  component-based architectures that scale.
                </p>

                {/* Highlight Cards */}
                <div className="flex flex-col gap-3 my-8 text-[14px] md:text-base">
                  <div className="flex items-center gap-3 bg-[#3B4656] p-4 rounded-xl shadow">
                    <span>🎯</span> <p>1+ Years Experience</p>
                  </div>
                  <div className="flex items-center gap-3 bg-[#3B4656] p-4 rounded-xl shadow">
                    <span>💡</span> <p>React & UI Specialist</p>
                  </div>
                  <div className="flex items-center gap-3 bg-[#3B4656] p-4 rounded-xl shadow">
                    <span>🚀</span> <p>Always Learning & Improving</p>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  I'm currently expanding into backend development with{" "}
                  <span className="font-semibold text-white">
                    Node.js, Express.js, MongoDB, Socket.io, and GraphQL
                  </span>{" "}
                  to become a full-stack developer capable of delivering
                  production-ready solutions.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  I'm open to freelance and remote opportunities. If you’re
                  looking for a developer who’s detail-oriented, growth-driven,
                  and passionate about building real-world applications—let’s
                  connect!
                </p>
              </div>
            </div>
          </div>

          {/* Section Divider */}
        </Container>
        <div className="mt-12 h-[1px] bg-gray-600 opacity-40"></div>
      </section>
    </>
  );
};

export default About;
