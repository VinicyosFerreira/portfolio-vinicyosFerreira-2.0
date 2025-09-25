import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import NavigationLink from './NavigationLink';
import IconsContact from './IconsContact';

const NavigationMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full" aria-describedby={undefined}>
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-5 justify-center items-center h-screen">
          <NavigationLink>Home</NavigationLink>
          <NavigationLink>Sobre</NavigationLink>
          <NavigationLink>Projetos</NavigationLink>
          <NavigationLink>Habilidades</NavigationLink>
          <NavigationLink>Contatos</NavigationLink>
          <div >
            <IconsContact />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationMenu;
