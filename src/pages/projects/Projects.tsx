import type { MyProject } from "../../utils/interfaces";

const myProjects: MyProject[] = [
  {
    name: "Dyslexease",
    description:
      "A full-stack web app that allows users to input their documents and quickly make dyslexic friendly modifications.",
    techUsed: [
      "Typescript",
      "React",
      "NestJs",
      "Prsima",
      "Postgres",
      "Zustand",
    ],
    tags: [],
    siteLink: "",
    githubLink: "https://github.com/selinAbacaz/CapstoneDyslexease",
  },
];

export function Projects() {
  return <div>Projects</div>;
}
