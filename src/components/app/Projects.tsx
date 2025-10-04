import CardProject from "./CardProject";

import {PROJECTS, type PROJECTS_TYPE} from "@/constants/Projects";

const Projects = () => {
  return (
    <div className="mt-20 md:w-[80%] md:mx-auto" id="projects">
      <h2 className="text-primary text-2xl font-bold text-center my-5 md:text-3xl">
        Projetos
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {PROJECTS.map((project: PROJECTS_TYPE) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
