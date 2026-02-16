import { SKILLS } from '@/constants/SkillList';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="md:w-3/6 mt-20 mx-auto" id="skills">
      <div>
        <h2 className="text-primary text-center mb-5 font-bold text-2xl md:text-3xl">
          Habilidades
        </h2>
      </div>

      <div className='space-y-3'>
        <div className="grid grid-cols-[repeat(auto-fit,120px)] gap-3 justify-center">
          {SKILLS.map((skill) => (
            <div key={skill.id}>
              <Skill>
                <span className="text-sm font-semibold">{skill.name}</span>
                {skill.icon}
              </Skill>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
