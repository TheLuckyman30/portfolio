import { Chip } from "../../../components";
import { findIcon } from "../../../components";

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
  return (
    <div className="flex flex-col gap-10">
      {skillsCategories.map((category) => (
        <div className="flex flex-col gap-5">
          <h2 className="text-lg text-gray-500 font-medium">{category.name}</h2>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Chip size={"md"}>
                <div className="flex items-center gap-2">
                  {findIcon(skill, "md")}
                  {skill}
                </div>
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
