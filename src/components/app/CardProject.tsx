import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import { FaGithub } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';

import type { PROJECTS_TYPE } from '@/constants/Projects';

const CardProject = ({ project }: { project: PROJECTS_TYPE }) => {
  return (
    <Card className="flex flex-col w-[95%] mx-auto relative" key={project.id}>
      <CardHeader>
        <CardTitle className="text-center font-semibold text-lg">
          {project.name}
        </CardTitle>
        <CardDescription className='h-[55px]'>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative group">
          <img
            src={project.imgURL}
            alt={project.name}
            className="w-full rounded-md h-[250px] object-cover"
          />
          <div
            className="absolute inset-0 opacity-0 
                  group-hover:opacity-100 transition-opacity ease-in-out duration-500 
                  delay-75 backdrop-blur flex flex-col items-center justify-center gap-3"
          >
            {project.repositorieURL && (
              <div className="bg-accent cursor-pointer p-2 w-45 rounded-lg">
                <a
                  href={project.repositorieURL}
                  className="text-primary font-semibold flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {project.repositorieURL && (
                    <>
                      <FaGithub size={30} className="text-white" />
                      <span>Ver repositório</span>
                    </>
                  )}
                </a>
              </div>
            )}

            <div className="bg-accent cursor-pointer w-45 p-2 rounded-lg">
              <a
                href={project.demoURL}
                className="text-primary font-semibold flex justify-center items-center gap-2"
                target="_blank"
              >
                <FaRocket size={30} className="text-white" />
                <span>Ver demo</span>
              </a>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm">
          <span className="font-semibold">Tecnologias: </span>
          {project.technologies.join(', ')}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
