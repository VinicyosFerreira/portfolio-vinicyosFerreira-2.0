import type React from 'react';

interface Children {
  children: React.ReactNode;
}
const NavigationLink = ({ children }: Children) => {
  return (
    <div className="text-primary text-center px-5">
      <a
        className="font-medium cursor-pointer hover:bg-accent transition duration-300 p-2 rounded-md text-xl"
      >
        {children}
      </a>
    </div>
  );
};

export default NavigationLink;
