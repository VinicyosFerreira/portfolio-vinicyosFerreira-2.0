import coverNewsFinder from '../assets/imgs/cover_news_finder.png';

interface Projects {
  id: number;
  name: string;
  description: string;
  imgURL: string;
  repositorieURL: string;
  demoURL: string;
}

const PROJECTS: Projects[] = [
  {
    id: 1,
    name: 'News Finder',
    description:
      `Aplicação que localiza notícias e imagens realizando requisições e filtrando os resultados, e
       exibindo os resultados em um layout responsivo.`,
    imgURL: coverNewsFinder,
    repositorieURL: "https://github.com/VinicyosFerreira/Newtab-Newsfinder",
    demoURL: "https://newtabnewsfinder.netlify.app"
  },
];

export default PROJECTS;

