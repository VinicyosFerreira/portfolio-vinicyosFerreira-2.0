import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
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
                <div
                  className="bg-accent cursor-pointer p-2 w-45 rounded-lg"
                >
                  <a
                    href={project.repositorieURL}
                    className="text-primary font-semibold flex justify-center items-center gap-2"
                    target="_blank"
                  >
                    <span>Ver repositório</span>
                    <FaGithub size={35} />
                  </a>
                </div>

                <div className="bg-accent cursor-pointer w-45 p-2 rounded-lg">
                  <a
                    href={project.demoURL}
                    className="text-primary font-semibold flex justify-center items-center gap-2"
                    target="_blank"
                  >
                    <span>Ver demo</span>
                    <FaGlobe size={35} className="text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
