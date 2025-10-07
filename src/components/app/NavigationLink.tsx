import type React from 'react';

interface NavigationLinkProps {
  children: React.ReactNode;
  href: string;
  size?: 'sm' | 'xl';
  bgHover? : 'bgHoverOne' | 'bgHoverTwo';
  closeMenu?: () => void;
}
const NavigationLink = ({ children, href, size = 'sm' , bgHover = 'bgHoverOne' , closeMenu }: NavigationLinkProps) => {

  const buttonVariants = {
    base: 'font-medium text-primary cursor-pointer hover:transition duration-300 p-2 rounded-md',
    size : {
      sm: 'text-sm',
      xl: 'text-xl'
    },
    bgHover : {
      bgHoverOne: 'hover:bg-accent',
      bgHoverTwo: 'hover:bg-muted-foreground/20'
    }
  }

  return (
    <div className='text-center'>
      <a
        href={href}
        className={`${buttonVariants.base} ${buttonVariants.size[size]} ${buttonVariants.bgHover[bgHover]}`}
        onClick={closeMenu}
      >
        {children}
      </a>
    </div>
  );
};

export default NavigationLink;
