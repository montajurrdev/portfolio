import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { Link } from "react-scroll";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";

const Header = () => {
  const [handleMenu, setMenu] = useState(false);


  return (
    <>
      <section>
        <Container className="fixed top-[10px] left-0 right-0 z-50 bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 shadow-md">
          <Flex className="justify-between items-center py-3 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            {/* Logo Section */}
            <div className="bg-[#232323] px-4 rounded-lg shadow-lg hover:scale-105 transition-all ease-in-out">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <Image imgSrc={Logo} alt="Logo" className="h-8 md:h-9" />
              </Link>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 ml-10 hidden lg:block">
              <ul className="flex justify-center gap-6 lg:gap-10 uppercase font-robo font-semibold text-white text-sm lg:text-base">
                {["Home", "About", "Skill", "Work", "Contact"].map(
                  (item, index) => (
                    <li key={index} className="text-center">
                      <Link
                        key={index}
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className="text-[#232323] transition-all hover:bg-gray-700 hover:text-[#fafafa] hover:rounded-md py-2 px-4 ease-in-out duration-300 cursor-pointer"
                        activeClass="active"
                        spy={true}
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* mobile menu Button */}
            <div>
              <button
                onClick={() => setMenu(!handleMenu)}
                className="lg:hidden text-3xl text-[#232323]"
              >
                <FcMenu />
              </button>
            </div>

            {/* Hire Me Button */}
            <div className="hidden lg:flex items-center justify-center">
              <Link
                to="hire"
                smooth={true}
                duration={500}
                className="cursor-pointer  text-white text-sm font-bold py-2 px-6 bg-teal-600 rounded-md hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300"
              >
                HIRE ME
              </Link>
            </div>
          </Flex>

          {/* mobile menu  */}
          {handleMenu && (
            <div className="bg-[#232323] p-6 ">
              <ul className="flex flex-col gap-5 text-center uppercase font-semibold ">
                {["Home", "About", "Skill", "Work", "Contact"].map(
                  (item, index) => {
                    return (
                      <>
                        <li key={index}>
                          <Link
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            onClick={() => setMenu(false)}
                            className="text-white cursor-pointer hover:text-teal-400 transition"
                          >
                            {item}
                          </Link>
                        </li>
                      </>
                    );
                  },
                )}
              </ul>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Header;