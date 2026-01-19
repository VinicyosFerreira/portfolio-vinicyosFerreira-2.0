import { Card, CardContent } from '@/components/ui/card';

const MetricCards = () => {
  return (
    <Card className="flex flex-col md:flex-row justify-center items-center bg-transparent mt-10 md:w-[80%] w-full md:mx-auto border-none">
      <CardContent className="bg-secondary/60 px-0 rounded-lg w-[300px] h-[80px] flex flex-col justify-center items-center hover:border-2">
        <span className="font-bold text-chart-4 text-xl ">
          + 5 projetos
        </span>
      </CardContent>

      <CardContent className="bg-secondary/60 rounded-lg  w-[300px] h-[80px] flex flex-col justify-center items-center hover:border-2">
        <span className="font-bold text-chart-2 text-xl">
          + 2 anos de experiência
        </span>
      </CardContent>

      <CardContent className="bg-secondary/60 rounded-lg  w-[300px] h-[80px] flex flex-col justify-center items-center hover:border-2">
        <span className="font-bold text-chart-3 text-xl">+ 15 tecnologias</span>
      </CardContent>

      <CardContent className="bg-secondary/60 rounded-lg  w-[300px] h-[80px] flex flex-col justify-center items-center hover:border-2">
        <span className="font-bold text-chart-1 text-xl">+ 600 commits</span>
      </CardContent>
    </Card>
  );
};

export default MetricCards;
