import NavigationLink from './NavigationLink';

const MenuDesktop = () => {
  return (
    <nav className="hidden md:flex justify-center items-center">
      <NavigationLink href="#" bgHover='bgHoverTwo'>
        Home
      </NavigationLink>
      <NavigationLink href="#aboutMe" bgHover='bgHoverTwo'>
        Sobre
      </NavigationLink>
      <NavigationLink href="#projects" bgHover='bgHoverTwo'>
        Projetos
      </NavigationLink>
      <NavigationLink href="#skills" bgHover='bgHoverTwo'>
        Habilidades
      </NavigationLink>
      <NavigationLink href="#contacts" bgHover='bgHoverTwo'>
        Contatos
      </NavigationLink>
    </nav>
  );
};

export default MenuDesktop;
