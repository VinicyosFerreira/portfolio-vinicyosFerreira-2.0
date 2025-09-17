import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavigationLink from './NavigationLink';
import IconsContact from './IconsContact';

const NewMenuNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = ():void => {
    setIsOpen(true);
  };

  const closeMenu = ():void => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div>
      <Button
        className="md:hidden cursor-pointer"
        variant={'outline'}
        size="icon"
        onClick={openMenu}
      >
        <MenuIcon className="text-primary" />
      </Button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-background flex items-center justify-center">
          <Button
            className="absolute top-2 right-2"
            variant={'outline'}
            onClick={closeMenu}
          >
            X
          </Button>
          <nav className="flex flex-col gap-5 justify-center items-center">
            <NavigationLink href='#' closeMenu={() => closeMenu()}>Home</NavigationLink>
            <NavigationLink href='#aboutMe' closeMenu={() => closeMenu()}>Sobre</NavigationLink>
            <NavigationLink href='#projects'>Projetos</NavigationLink>
            <NavigationLink href='#skills' closeMenu={() => closeMenu()}>Habilidades</NavigationLink>
            <NavigationLink>Contatos</NavigationLink>
            <IconsContact />
          </nav>
        </div>
      )}
    </div>
  );
};

export default NewMenuNavigation;
