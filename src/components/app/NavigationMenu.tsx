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
    <Sheet >
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden cursor-pointer"
        >
          <MenuIcon className="text-primary"/>
        </Button>
      </SheetTrigger>
      <SheetContent className='w-2/4' aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle ></SheetTitle>
        </SheetHeader>
        <NavigationLink>Home</NavigationLink>
        <NavigationLink>Sobre</NavigationLink>
        <NavigationLink>Projetos</NavigationLink>
        <NavigationLink>Contatos</NavigationLink>
        <IconsContact/>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationMenu;
