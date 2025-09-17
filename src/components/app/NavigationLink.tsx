import type React from 'react';

interface Children {
  href?: string;
  closeMenu?: () => void;
  children: React.ReactNode;
}
const NavigationLink = ({ children, href, closeMenu }: Children) => {
  return (
    <div className="text-primary text-center px-5">
      <a
        href={href}
        className="font-medium cursor-pointer hover:bg-accent transition duration-300 p-2 rounded-md text-xl"
        onClick={closeMenu}
      >
        {children}
      </a>
    </div>
  );
};

export default NavigationLink;
