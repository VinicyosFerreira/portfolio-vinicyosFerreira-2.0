import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@/components/ui/card';

import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

import PROJECTS from '@/constants/Projects';

const Projects = () => {
  return (
    <div className="my-10">
      <h2 className="text-primary text-2xl font-bold text-center my-5">
        Projetos
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {PROJECTS.map((project) => (
          <Card
            className="flex flex-col w-[95%] mx-auto relative"
            key={project.id}
          >
            <CardHeader>
              <CardTitle className="text-center font-semibold text-lg">
                {project.name}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <img
                  src={project.imgURL}
                  alt="Capa da imagem do projeto News Finder"
                />
                <div
                  className="absolute inset-0 opacity-0 
                  group-hover:opacity-100 transition-opacity ease-in-out duration-500 
                  delay-75 backdrop-blur flex flex-col items-center justify-center gap-3"
                >
                  <div className="bg-accent cursor-pointer p-2 w-45 rounded-lg">
                    <a
                      className="text-primary font-semibold flex justify-center items-center gap-2"
                      target="_blank"
                    >
                      <FaGithub size={30} className="text-white" />
                      <span>Ver repositório</span>
                    </a>
                  </div>

                  <div className="bg-accent cursor-pointer w-45 p-2 rounded-lg">
                    <a
                      href={project.demoURL}
                      className="text-primary font-semibold flex justify-center items-center gap-2"
                      target="_blank"
                    >
                      <FaGlobe size={30} className="text-white" />
                      <span>Ver demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter>
               <p className='text-sm'><span className='font-semibold'>Tecnologias: </span>{project.technologies.join(', ')}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
