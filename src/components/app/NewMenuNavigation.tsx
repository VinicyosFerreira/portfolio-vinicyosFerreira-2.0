import './NavigationMenu.css';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavigationLink from './NavigationLink';
import IconsContact from './IconsContact';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const NewMenuNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
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

      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={400}
        unmountOnExit
        classNames="navigation-menu"
      >
        <div className="fixed top-0 left-0 w-full h-screen bg-background flex items-center justify-center" ref={nodeRef}>
          <Button
            className="absolute top-2 right-2 cursor-pointer"
            variant={'outline'}
            onClick={closeMenu}
          >
            X
          </Button>
          <nav className="flex flex-col gap-5 justify-center items-center">
            <NavigationLink href="#" closeMenu={() => closeMenu()}>
              Home
            </NavigationLink>
            <NavigationLink href="#aboutMe" closeMenu={() => closeMenu()}>
              Sobre
            </NavigationLink>
            <NavigationLink href="#projects" closeMenu={() => closeMenu()}>
              Projetos
            </NavigationLink>
            <NavigationLink href="#skills" closeMenu={() => closeMenu()}>
              Habilidades
            </NavigationLink>
            <NavigationLink href="#contacts" closeMenu={() => closeMenu()}>
              Contatos
            </NavigationLink>
            <IconsContact />
          </nav>
        </div>
      </CSSTransition>
    </div>
  );
};

export default NewMenuNavigation;
