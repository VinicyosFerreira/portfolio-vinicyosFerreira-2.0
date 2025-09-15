interface Props {
 children: React.ReactNode
}

const Skill = ({ children}: Props) => {
  return (
    <div
      className="flex flex-col items-center gap-2
     justify-center border border-border rounded-md
     p-2 cursor-pointer scale-100 hover:bg-accent text-accent-foreground 
     transition duration-300 hover:scale-110 "
    >
      {children}
    </div>
  );
};

export default Skill;
