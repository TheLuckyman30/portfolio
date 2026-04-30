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
  return (
    <div className="flex flex-col gap-10 bg-linear-65 from-purple-500 to-blue-500 p-3 rounded-md shadow-xl">
      {skillsCategories.map((category) => (
        <div key={category.name} className="flex flex-col gap-5">
          <h2 className="text-lg text-white font-medium">{category.name}</h2>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Chip key={skill} size={"md"}>
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
