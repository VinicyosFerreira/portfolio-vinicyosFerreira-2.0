import coverNewsFinder from '../assets/imgs/cover_news_finder.png';
import coverTaskManager from '../assets/imgs/cover_task_mananger.png';
import coverDevNotes from '../assets/imgs/cover_dev_notes.png';
import coverLandingPage from '../assets/imgs/cover_landing_page.png';

export interface PROJECTS_TYPE {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  imgURL: string;
  repositorieURL: string;
  demoURL: string;
}

export const PROJECTS: PROJECTS_TYPE[] = [
  {
    id: 1,
    name: 'Task Mananger FSC',
    description: 'Aplicação para gerenciamento de tarefas.',
    imgURL: coverTaskManager,
    technologies: ['React', 'Javascript', 'Tailwind', 'Vite' , 'JSON Server', 'React Query' , 'React Hook Form'],
    repositorieURL: "https://github.com/VinicyosFerreira/To-Do-List-Mananger",
    demoURL: "https://to-do-list-mananger.vercel.app"
  },
  {
    id: 2,
    name: 'News Finder',
    description:
      `Aplicação que localiza notícias .`,
    imgURL: coverNewsFinder,
    technologies: ['React', 'Javascript', 'CSS', 'Create React App' , 'Airtable' , 'Rest API'],
    repositorieURL: "https://github.com/VinicyosFerreira/Newtab-Newsfinder",
    demoURL: "https://newtabnewsfinder.netlify.app"
  },
  {
    id: 3,
    name: 'Dev Notes',
    description: 'Aplicação para gerenciamento de notas.',
    imgURL: coverDevNotes,
    technologies: ['HTML' , 'CSS' , 'Javascript'],
    repositorieURL: "https://github.com/VinicyosFerreira/Dev_Notes",
    demoURL: "https://vinicyosferreira.github.io/Dev_Notes/"
  },
  {
    id: 4,
    name: 'Landing Page',
    description: 'Aplicação para simulação de landing page',
    imgURL: coverLandingPage,
    technologies: ['React' , 'Javascript' , 'CSS' , 'Formik' , 'Yup', 'Rest API'],
    repositorieURL: "https://github.com/VinicyosFerreira/Landing-Page",
    demoURL: "https://vinicyosferreira.github.io/Landing_Page/"
  }
];



