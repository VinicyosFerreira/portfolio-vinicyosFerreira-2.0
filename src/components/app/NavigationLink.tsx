interface Children {
  children: React.ReactNode;
};

const NavigationLink = ({ children }: Children) => {
  return (
    <div className="text-primary text-right px-5">
      <a href="#" className="font-medium text-sm hover:bg-accent transition duration-300 p-2 rounded-md">
        {children}
        </a>
    </div>
  );
};

export default NavigationLink;
