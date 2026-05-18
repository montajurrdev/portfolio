import React from "react";
import Image from "../Image";
import Heading from "../Heading";

const ProjectCard = ({
  projectImg,
  className,
  projectType,
  projectCategory,
  clientName,
  liveUrl,
  codeUrl,
}) => {
  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-lg drop-shadow-gray-500">
        <div className="bg-amber-50">
          <div className="relative group">
            <Image
              className={
                "h-[220px] sm:h-[260px] md:h-[300px] w-full" + className
              }
              imgSrc={projectImg}
            />
            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all ease-in-out duration-300">
              <div className=" bg-black/70 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <Heading
                  className="text-sm md:text-base text-white font-bold text-center bg-gray-800 px-5 py-1 rounded-md "
                  text={projectType}
                  as="h5"
                />
                <p className="text-sm md:text-base text-white text-center pt-4 pb-3 flex gap-x-2 mb-8">
                  <Heading className="font-bold" text="Client:" as="span" />
                  <Heading className="" text={clientName} as="span" />
                </p>
                <div className="flex items-center gap-8">
                  <a
                    href={codeUrl}
                    target="_blank"
                    className="px-5 py-1 bg-teal-500 rounded-[10px] text-sm md:text-base text-black font-semibold transition hover:scale-105"
                  >
                    Code
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    className="px-5 py-1 bg-teal-500 rounded-[10px] text-sm md:text-base text-black font-semibold transition hover:scale-105"
                  >
                    LIVE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Category  */}
          <Heading
            className="text-sm md:text-lg  text-center py-2"
            text={projectCategory}
            as="p"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
