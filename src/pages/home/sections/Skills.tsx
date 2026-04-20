interface Skill {
  name: string;
  test: string[];
}

const skills: Skill[] = [
  {
    name: "Programming Languages",
    test: ["Typescript", "Javascript", "Python", "C", "C++", "Java", "SQL"],
  },
  { name: "Frameworks/Libraries", test: [] },
];

export function Skills() {
  return (
    <div className="flex flex-col gap-10">
      {skills.map((skill) => (
        <div>
          <h2 className="text-lg text-gray-500 font-medium">{skill.name}</h2>
          {skill.test.map((t) => t)}
        </div>
      ))}
    </div>
  );
}
