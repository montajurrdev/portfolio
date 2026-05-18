import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Skill = () => {
  return (
    <>
      <section id="skill" className="py-16 md:py-20 bg-gray-700 text-gray-300">
        <Container>
          <div>
            <div className="text-center mb-14">
              <Heading
                text="Skills & Expertise"
                as="h2"
                className="text-3xl md:text-5xl font-bold"
              />

              <p className="text-base md:text-lg max-w-3xl pt-2  mx-auto text-gray-300 leading-relaxed">
                Get to know the developer behind the code — where creativity
                meets functionality. Every line of code has a story. This is
                mine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="bg-slate-600 p-6 md:p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🎨</span> Frontend Development
                </h3>
                <ul className="space-y-3 text-sm sm:text-base md:text-lg  pl-8.5 md:pl-10 leading-relaxed">
                  <li>HTML5, CSS3, Sass, JavaScript (ES6+)</li>
                  <li>React, Next.js</li>
                  <li>Redux Toolkit, React Router DOM</li>
                  <li>Context API implementation and integration</li>

                  <li>Tailwind CSS, Bootstrap</li>
                  <li>
                    Material UI (MUI), Chakra UI, Ant Design, Shadcn, React
                    Bootstrap, DaisyUI, Flowbite, HyperUI, Preline UI
                  </li>

                  <li>
                    Framer Motion, CSS Animations, Transitions,
                    Micro-interactions
                  </li>
                  <li>
                    React Hook Form, React Query, Swiper.js, jQuery, Alpine.js,
                    React Toastify
                  </li>
                  <li>Font Awesome, React Icons, Bootstrap Icons, IconScout</li>
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-slate-600 p-6 md:p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center ">
                  <span className="size-8">🛠</span> Tools & Technologies
                </h3>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg  pl-8.5 md:pl-9 leading-relaxed">
                  <li>Git & GitHub</li>

                  {/* <li>Axios & Fetch</li> */}
                  <li>VS Code</li>
                  <li>npm, npx, pnpm, yarn</li>
                  <li>Postman</li>
                  <li>Figma, Photoshop, Adobe XD, Sketch </li>
                </ul>
              </div>

              {/* Soft Skills + Learning */}
              <div className="bg-slate-600 p-6 md:p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🚀</span> Soft Skills & Learning
                </h3>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg pl-8.5 md:pl-10 leading-relaxed">
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Time Management</li>
                  <li>Problem-Solving</li>
                  <li>Organizing & Documentation</li>
                  <li className="font-semibold text-white pt-3">
                    📚 Current Focus:
                  </li>
                  <li>Node.js, Express.js, MongoDB, Socket.io, and GraphQL</li>
                  <li>Full-Stack Web Development</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Skill;
