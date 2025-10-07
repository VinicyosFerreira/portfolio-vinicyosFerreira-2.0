const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:w-[90%] mx-auto" id="aboutMe">
      <div>
        <h2 className="font-bold text-primary text-2xl md:text-3xl">Um pouco sobre mim</h2>
      </div>
      <div className="w-5/6 space-y-5 text-sm md:text-lg">
        <p className="mt-2">
          Olá me chamo Vinicyos Ferreira, sou apaixonado por tecnologia
          e inovação. Me identifiquei pela TI aos 17 anos, quando comecei a
          pesquisar no Youtube sobre a área. Atualmente, estou graduando em Análise e desenvolvimento
          de sistemas e tenho experiência de 1 ano com projetos em React,Javascript e Typescript, 
          com estudos contínuos em Node.js e SQL para atuar com aplicações fullstack.
        </p>
        <p>
          Sempre buscando aperfeiçoar para aplicar métodos, técnicas e padrões
          alinhados com as melhores práticas do mercado. Meu objetivo é
          desenvolver projetos robustos e escaláveis no âmbito tecnológico,
          visando entregar resultados que agreguem valor às pessoas.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
