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
      <div className="w-1/3  p-5  drop-shadow-2xl drop-shadow-gray-500">
        <div className="bg-amber-50">
          <div className="relative group">
            <Image
              className={"h-[300px] w-full" + className}
              imgSrc={projectImg}
            />
            <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
              <div className=" bg-black absolute top-0 left-0 w-full h-full opacity-70 flex flex-col justify-center items-center">
                <Heading
                  className="text-[16px] text-white font-bold text-center bg-gray-800 px-5  "
                  text={projectType}
                  as="h5"
                />
                <p className="text-[16px] text-white text-center pt-4 pb-3 flex gap-x-2 mb-[50px]">
                  <Heading className="font-bold" text="Client:" as="span" />
                  <Heading className="" text={clientName} as="span" />
                </p>
                <div className="flex items-center gap-x-5">
                  <a
                    href={codeUrl}
                    target="_blank"
                    className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black font-semibold text-center"
                  >
                    Code
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    className="px-5 py-1 bg-teal-500 rounded-[10px] text-[16px] text-black font-semibold text-center"
                  >
                    LIVE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Heading
            className="text-[16px]  text-center py-2"
            text={projectCategory}
            as="p"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
