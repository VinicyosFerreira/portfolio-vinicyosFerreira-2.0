import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiDocker,
  SiPostgresql
} from 'react-icons/si';

interface SKILLS_LIST_TYPE {
    id: number,
    name: string,
    icon: React.ReactNode,
}

const SKILLS_LIST: SKILLS_LIST_TYPE[] = [
    {id: 1, name: "HTML", icon: <SiHtml5 className="text-[#E34F26] w-20 h-20"/>},
    {id: 2, name: "CSS", icon: <SiCss3 className="text-[#007ACC] w-20 h-20"/>},
    {id: 3, name: "Javascript", icon: <SiJavascript className="text-[#F0DB4F] w-20 h-20"/>},
    {id: 4, name: "React", icon: <SiReact className="text-blue-500 w-20 h-20"/>},
    {id: 5, name: "Typescript", icon: <SiTypescript className="text-[#3178C6] w-20 h-20"/>},
    {id: 6, name: "Tailwind", icon: <SiTailwindcss className="text-sky-500 w-20 h-20"/>},
    {id: 7, name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-20 h-20"/>},
    {id: 8, name: "Node.js", icon: <SiNodedotjs className="text-[#3C873A] w-20 h-20"/>},
    {id: 9, name: "Docker", icon: <SiDocker className="text-[#1D63ED] w-20 h-20"/>},
    {id: 10, name: "PostgreSQL", icon: <SiPostgresql className="text-[#0064a5] w-20 h-20"/>},
]

export default SKILLS_LIST