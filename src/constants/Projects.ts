import coverNewsFinder from '../assets/imgs/cover_news_finder.png';
import coverTaskManager from '../assets/imgs/cover_task_mananger.png';
import coverAparatusBarber from '../assets/imgs/cover_aparatus_barber.png';
import coverPortalProjetoVoluntario from '../assets/imgs/cover_projeto_portal-voluntarios.jpg'

export interface PROJECTS_TYPE {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  imgURL: string;
  repositorieURL?: string;
  demoURL: string;
}

export const PROJECTS: PROJECTS_TYPE[] = [
  {
    id: 1,
    name: 'Aparatus Barber',
    description:
      'Saas para agendamento de barbearia, com escolha por estabelecimentos, serviços, agendamentos e integração com gateway de pagamento.',
    imgURL: coverAparatusBarber,
    technologies: [
      'Next.js',
      'React',
      'Typescript',
      'Tailwind',
      'Prisma',
      'PostgreSQL',
      'Better Auth',
      'Stripe',
    ],
    repositorieURL: 'https://github.com/VinicyosFerreira/aparatus',
    demoURL: 'https://aparatus-chi.vercel.app/',
  },
  {
    id: 2,
    name: 'Task Mananger FSC',
    description: `CRUD completo de tarefas, com listagem organizada e um dashboard de status que mostra em tempo real as 
    tarefas disponíveis, concluídas, em andamento e não iniciadas.`,
    imgURL: coverTaskManager,
    technologies: [
      'React',
      'Javascript',
      'Tailwind',
      'Vite',
      'JSON Server',
      'React Query',
      'React Hook Form',
    ],
    repositorieURL: 'https://github.com/VinicyosFerreira/To-Do-List-Mananger',
    demoURL: 'https://to-do-list-mananger.vercel.app',
  },
  {
    id: 3,
    name: 'News Finder',
    description: `Aplicação que localiza notícias e imagens realizando requisições e filtrando os resultados, e 
    exibindo os resultados em um layout responsivo.`,
    imgURL: coverNewsFinder,
    technologies: [
      'React',
      'Javascript',
      'CSS',
      'Create React App',
      'Airtable',
      'Rest API',
    ],
    repositorieURL: 'https://github.com/VinicyosFerreira/Newtab-Newsfinder',
    demoURL: 'https://newtabnewsfinder.netlify.app',
  },
  {
    id: 4,
    name: 'Portal de Projetos Voluntários',
    description:
      'Portal focado em networking e capacitação profissional através de projetos voluntários reais.',
    imgURL:  coverPortalProjetoVoluntario,
    technologies: ['React', 'API REST', 'React Query', 'Tailwind CSS', 'React Router DOM'],
    demoURL: 'https://volunteer-hub-swart.vercel.app/'
  },
];
