import { MyTab, MyTabGroup } from "../../components";
import type { MyProject } from "../../utils/interfaces";
import { CoverflowView, ListView } from "./components";
import { type JSX, useState } from "react";

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

const views = [
  { name: "List", element: <ListView myProjects={myProjects} /> },
  { name: "Gallery", element: <CoverflowView /> },
];

export function Projects() {
  const defaultIndex = 0;
  const [selectedView, setSelectedView] = useState<JSX.Element>(
    views[defaultIndex].element,
  );

  return (
    <>
      <section className="flex flex-col gap-5 h-1/2">
        <MyTabGroup
          defaultIndex={defaultIndex}
          change={(index) => setSelectedView(views[index].element)}
        >
          {views.map((view) => (
            <MyTab key={view.name}>{view.name}</MyTab>
          ))}
        </MyTabGroup>

        <div className="flex-1 max-h-full">{selectedView}</div>
      </section>
      <section className="h-1/2"></section>
    </>
  );
}
