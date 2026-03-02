const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:w-[90%] mx-auto" id="aboutMe">
      <div>
        <h2 className="font-bold text-primary text-2xl md:text-3xl">Um pouco sobre mim</h2>
      </div>
      <div className="w-5/6 space-y-5 md:text-lg">
        <p className="mt-2">
          Olá me chamo Vinicyos Ferreira, sou apaixonado por tecnologia
          e inovação. Me identifiquei pela TI aos 17 anos, quando comecei a
          pesquisar no Youtube sobre a área. Atualmente, estou graduando em Análise e desenvolvimento
          de sistemas, com mais de 2 anos de experiência em 
          desenvolvimento de aplicações web modernas, especializado em React, Node.js e arquiteturas escaláveis.
        </p>
        <p>
          Atuação com ferramentas de infraestrutura e DevOps, como Docker e CI/CD, garantindo estabilidade e
           continuidade no deploy. Possuo mais de 2 anos de atuação direta em suporte e infraestrutura, 
           o que me permite colaborar com uma visão crítica sobre sustentação de sistemas e 
           foco total na experiência do usuário. 
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
