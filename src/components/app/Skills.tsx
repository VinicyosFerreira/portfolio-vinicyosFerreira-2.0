import skillList from '@/constants/SkillList';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="w-5/6 mx-auto mt-10">
      <div>
        <h2 className="text-primary text-center mb-5 font-bold text-2xl">
          Habilidades
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,120px)] grid-rows-2 gap-3 justify-center">
        {skillList.map((skill) => (
          <div key={skill.id}>
            <Skill>
                <span className='text-sm font-semibold'>{skill.name}</span>
                {skill.icon}
            </Skill>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
