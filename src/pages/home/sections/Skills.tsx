import { Chip } from "../../../components";
import { findIcon } from "../../../components/common-ui";

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
      "Tanstack Start",
      "Prisma",
      "NestJs",
      "ExpressJs",
      "Zustand",
    ],
  },
  {
    name: "Database",
    skills: ["SQL", "Postgres", "Supabase"],
  },
  {
    name: "Tools/Software",
    skills: ["Git", "Github", "Vite", "Android Studio"],
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
