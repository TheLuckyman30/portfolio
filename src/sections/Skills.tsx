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
  const amountToRender = 5;
  const render: number[] = new Array(amountToRender).fill(0);
  const renderSkill = (skill: string) => {
    return (
      <div className="flex flex-col items-center">
        <span className="text-[.9rem]">{skill}</span>
        <div>{findIcon(skill, "twoxl")}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-1 w-full overflow-hidden">
      {skillsCategories.map((category, i) => {
        const animationClass =
          i % 2 === 0 ? "animate-slide-left" : "animate-slide-right";
        const paddingClass = i % 2 === 0 ? "pr-1" : "pl-1";

        return (
          <div className="flex" key={category.name}>
            {render.map((_, j) => {
              const extraClass = j !== amountToRender - 1 ? paddingClass : "";

              return (
                <div className={`flex gap-1 ${animationClass} ${extraClass}`}>
                  {category.skills.map((skill) => (
                    <div className="hover:scale-105 duration-75">
                      <Chip key={skill}>{renderSkill(skill)}</Chip>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
