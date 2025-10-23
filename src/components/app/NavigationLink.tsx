import type React from 'react';
import { Button } from '../ui/button';

interface NavigationLinkProps {
  children: React.ReactNode;
  href: string;
  size?: 'sm' | 'xl';
  bgHover?: 'bgHoverOne' | 'bgHoverTwo';
  closeMenu?: () => void;
}
const NavigationLink = ({
  children,
  href,
  size = 'sm',
  bgHover = 'bgHoverOne',
  closeMenu,
}: NavigationLinkProps) => {
  const buttonVariants = {
    base: 'font-medium text-primary cursor-pointer hover:transition duration-300 p-2 rounded-md hover:no-underline',
    size: {
      sm: 'text-sm',
      xl: 'text-xl',
    },
    bgHover: {
      bgHoverOne: 'hover:bg-accent',
      bgHoverTwo: 'hover:bg-muted-foreground/20',
    },
  };

  return (
    <Button
      variant="link"
      asChild
      className={`${buttonVariants.base} ${buttonVariants.size[size]} ${buttonVariants.bgHover[bgHover]}`}
      onClick={closeMenu}
    >
      <a href={href}>{children}</a>
    </Button>
  );
};

export default NavigationLink;
