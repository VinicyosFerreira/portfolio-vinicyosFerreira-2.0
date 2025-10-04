import { Typewriter } from 'react-simple-typewriter';
import ProfilePhoto from '../../assets/imgs/profile.jpeg';
const Hero = () => {
  return (
    <div className="mt-10 text-center space-y-5 md:flex md:justify-center md:align-center md:gap-15">
      <div className='md:flex flex-col md:justify-center md:align-center'>
        <h2 className="font-bold text-primary text-2xl md:text-4xl">
          Olá, sou o Vinicyos
        </h2>
        <p className="font-bold text-lg md:text-2xl">
          <Typewriter
            words={['Desenvolvedor front-end']}
            typeSpeed={85}
            loop={1}
          />
        </p>
      </div>
      <div className="w-full flex justify-center md:w-1/3 ">
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
