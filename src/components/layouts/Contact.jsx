import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Input from "../Input";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaLocationDot, FaSquarePhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section
        className="bg-gray-700 pt-20 pb-10 mt-10 text-white"
        id="contact"
      >
        <Container>
          <div>
            <div className="pb-8 text-center mb-12">
              <Heading
                text="Contact Me"
                as="h2"
                className="text-[40px] font-bold"
              />

              <p className="text-[18px] pt-2  mx-auto ">
                Whether you're a startup, agency, or entrepreneur — I’m here to
                help bring your web ideas to life. Let’s collaborate to build
                something impactful and scalable.
              </p>
            </div>
            <div className="flex justify-between w-full items-start">
              <div className="flex flex-col items-center text-[16px]">
                {/* Left Section - Availability and Email */}
                <div className="bg-gray-100  size-[200px] rounded-full flex flex-col justify-center text-center text-black font-medium">
                  <Heading text="i'm available for" as="h5" />
                  <Heading text="freelance work" as="h5" />
                </div>
                <p className="text-white pt-4 ">
                   montajurrdev@gmail.com
                </p>
                {/* <p className="text-white pt-4 ">
                   Freelancer.com  : @montajurrdev
                </p> */}
              </div>

              {/* Contact Form */}
              <div className="w-[30%]">
                <form action="">
                  <div className="grid text-[#232323] gap-y-7 ">
                    <div>
                      <Input
                        type={"text"}
                        placeholder={"Name"}
                        className={"outline-0 py-3 pl-2 "}
                      />
                    </div>
                    <div>
                      <Input
                        type={"email"}
                        placeholder={"Email"}
                        className={"outline-0 py-3 pl-2"}
                      />
                    </div>
                    <div className="">
                      <textarea
                        name="text"
                        id="text"
                        placeholder="Your Message"
                        className=" bg-gray-100 outline-0 py-3 h-[100px] pl-2 w-full rounded-md"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-center">
                      <input
                        type="submit"
                        value="Submit"
                        className="w-1/2 py-3 px-7  bg-transparent  bg-gradient-to-r hover:from-teal-500 hover:via-green-500 hover:to-blue-500 text-white hover:text-[#232323] font-medium border border-teal-700 rounded-lg flex items-center gap-2  justify-center transition ease-in-out duration-300"
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Section - Social Links */}

              <div className="grid gap-y-20">
                <div className="text-white flex flex-col gap-y-6">
                  <p className="flex items-center justify-between">
                    <a className="flex items-center gap-x-3 text-[18px] w-[130px]">
                      <FaLinkedin /> Linkedin
                    </a>
                    <a className="px-4 py-0 border rounded-full hover:bg-white hover:text-black text-[16px] transition-all ease-in-out duration-300">
                      Follow
                    </a>
                  </p>
                  <p className="flex items-center justify-between">
                    <a className="flex items-center gap-x-3 text-[18px] w-[130px]">
                      <FaGithub /> GitHub
                    </a>
                    <a className="px-4 py-0 border rounded-full hover:bg-white hover:text-black text-[16px] transition-all ease-in-out duration-300">
                      Follow
                    </a>
                  </p>
                </div>
                <div className="text-white flex flex-col gap-y-6 ">
                  <p className="flex items-center gap-x-3 text-[18px]">
                    <FaSquarePhone /> <span className="w-[85px]">Phone</span>:{" "}
                    <span>01844906613</span>
                    {/* <span>--------</span> */}
                  </p>

                  <p className="flex items-center gap-x-3 text-[18px]">
                    <FaLocationDot /> <span className="w-[85px]">Location</span>
                    : <span>Dhaka, Bangladesh</span>
                    {/* : <span>--------</span> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
