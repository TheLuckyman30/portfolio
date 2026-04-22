import { Chip } from "../../../components";

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
      "SQL",
      "Kotlin",
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
      "Android Studio",
    ],
  },
  {
    name: "Software",
    skills: ["Git", "Github", "Supabase"],
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
              <Chip size={"md"}>{skill}</Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
