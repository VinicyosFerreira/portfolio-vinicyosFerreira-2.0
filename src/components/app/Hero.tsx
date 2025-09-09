import { Typewriter } from 'react-simple-typewriter';
import ProfilePhoto from '../../assets/imgs/profile.jpeg';
const Hero = () => {
  return (
    <div className="mt-5 text-center space-y-5">
      <div>
        <h2 className="font-bold text-primary text-2xl">
          Olá, sou o Vinicyos
        </h2>
        <p className="font-bold text-lg">
          <Typewriter
            words={['Desenvolvedor front-end']}
            typeSpeed={85}
            loop={1}
          />
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img
          src={ProfilePhoto}
          alt="Imagem pessoal para perfil do portfólio"
          className="w-1/2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
