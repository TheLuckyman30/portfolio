import { Chip, findIcon } from "../components";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      "Typescript",
      "Javascript",
      "Python",
      "C",
      "C++",
      "Java",
      "Kotlin",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Frameworks/Libraries",
    skills: [
      "React",
      "Tanstack",
      "Prisma",
      "NestJs",
      "ExpressJs",
      "Zustand",
      "DiscordJs",
      "Jetpack Compose",
    ],
  },
  {
    name: "Database",
    skills: ["SQL", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    name: "Tools/Software",
    skills: ["Git", "Github", "NodeJs", "Vite", "VSCode", "Android Studio"],
  },
];

export function Skills() {
  const renderSkill = (skill: string) => {
    return (
      <div className="flex flex-col items-center">
        <span className="text-[.9rem]">{skill}</span>
        <div>{findIcon(skill, "twoxl")}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-1 w-full overflow-hidden delay-200">
      {skillsCategories.map((category, index) => {
        const animationClass =
          index % 2 === 0 ? "animate-slide-left" : "animate-slide-right";
        const paddingClass = index % 2 === 0 ? "pr-1" : "pl-1";
        const sharedClasses = `flex gap-1 ${animationClass} ${paddingClass}`;

        return (
          <div className="flex" key={category.name}>
            <div className={sharedClasses}>
              {category.skills.map((skill) => (
                <Chip key={skill}>{renderSkill(skill)}</Chip>
              ))}
            </div>

            <div className={sharedClasses}>
              {category.skills.map((skill) => (
                <Chip key={skill}>{renderSkill(skill)}</Chip>
              ))}
            </div>

            <div className={sharedClasses}>
              {category.skills.map((skill) => (
                <Chip key={skill}>{renderSkill(skill)}</Chip>
              ))}
            </div>

            <div className={sharedClasses}>
              {category.skills.map((skill) => (
                <Chip key={skill}>{renderSkill(skill)}</Chip>
              ))}
            </div>

            <div className={`flex gap-1 ${animationClass}`}>
              {category.skills.map((skill) => (
                <Chip key={skill}>{renderSkill(skill)}</Chip>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
