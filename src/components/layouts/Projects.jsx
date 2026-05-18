import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import project_01 from "/src/assets/project-01.png";
import project_02 from "/src/assets/project-02.png";
import project_03 from "/src/assets/project-03.png";
import project_04 from "/src/assets/project-04.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return ( 
    <section id="work">
      <Container className={"py-16 md:py-20"}>
        <div className="pb-12 text-center text-zinc-900">
          <Heading
            text="Project Gallery"
            as="h2"
            className="text-3xl md:text-5xl font-bold"
          />
          <p className="text-base md:text-lg max-w-3xl mx-auto text-center pt-4 leading-relaxed ">
            A showcase of my recent projects, featuring clean UI, modern
            frontend development, and responsive user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          <ProjectCard
            projectImg={project_01}
            projectType="Frontend Development"
            projectCategory="E-Commerce"
            clientName="Practice Project"
            liveUrl="https://orebi-website-frontend.netlify.app/"
            codeUrl={"https://github.com/montajurrdev/orebi_website_frontend"}
            className=""
          />
          <ProjectCard
            projectImg={project_02}
            projectType="Frontend Development"
            projectCategory="E-Commerce"
            clientName="Practice Project"
            liveUrl="https://montajurrdev.github.io/furniro_website_frontend/"
            codeUrl={"https://github.com/montajurrdev/furniro_website_frontend"}
            className=""
          />
          <ProjectCard
            projectImg={project_03}
            projectType="Frontend Development"
            projectCategory="E-Commerce"
            clientName="Practice Project"
            liveUrl="https://tech-e-commerce-with-react-and-boot.vercel.app/"
            codeUrl={
              "https://github.com/montajurrdev/tech_e-commerce_with_react_and_bootstrap"
            }
            className=""
          />
          <ProjectCard
            projectImg={project_04}
            projectType="Frontend Development"
            projectCategory="Creative Agency"
            clientName="Practice Project"
            liveUrl="https://montajurrdev.github.io/creative-agency__with__vanilla_html-css-js__and_sass/"
            codeUrl={
              "https://github.com/montajurrdev/creative-agency__with__vanilla_html-css-js__and_sass"
            }
            className=""
          />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
