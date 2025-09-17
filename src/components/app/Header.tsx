import { CodeIcon } from 'lucide-react';
import { Button } from '../ui/button';
import NavigationMenu from './NavigationMenu';
import NewMenuNavigation from './NewMenuNavigation';

const Header = () => {
  return (
    <header className=" bg-secondary justify-between flex items-center p-2">
      <div className='flex items-center gap-2.5'>
        <Button variant="ghost" size="icon" asChild>
          <CodeIcon className="text-primary"/>
        </Button>
        <h1 className='text-primary text-xl font-semibold'>Vinicyos Ferreira</h1>
      </div>
      <NewMenuNavigation />
    </header>
  );
};

export default Header;
