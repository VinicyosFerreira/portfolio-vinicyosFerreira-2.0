import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs
} from 'react-icons/si';

interface SKILLS_LIST_TYPE {
    id: number,
    name: string,
    icon: React.ReactNode,
}

const SKILLS_LIST: SKILLS_LIST_TYPE[] = [
    {id: 1, name: "HTML", icon: <SiHtml5 className="text-red-500 w-20 h-20"/>},
    {id: 2, name: "CSS", icon: <SiCss3 className="text-blue-500 w-20 h-20"/>},
    {id: 3, name: "Javascript", icon: <SiJavascript className="text-yellow-500 w-20 h-20"/>},
    {id: 4, name: "React", icon: <SiReact className="text-blue-500 w-20 h-20"/>},
    {id: 5, name: "Typescript", icon: <SiTypescript className="text-blue-500 w-20 h-20"/>},
    {id: 6, name: "Tailwind", icon: <SiTailwindcss className="text-sky-500 w-20 h-20"/>},
    {id: 7, name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-20 h-20"/>},
    {id: 8, name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-20 h-20"/>},
]

export default SKILLS_LIST