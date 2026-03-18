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
      "Prisma",
      "Postgres",
      "Zustand",
    ],
    tags: [],
    siteLink: "",
    githubLink: "https://github.com/selinAbacaz/CapstoneDyslexease",
  },
  {
    name: "Premier League Simulator",
    description:
      "A web app that simulates an entire Premier League season, generating match results, league tables, and team statistics.",
    techUsed: ["Typescript", "React", "Vite", "CSS"],
    tags: ["Simulation", "Sports"],
    siteLink: "",
    githubLink: "",
  },
  {
    name: "Campus Event Bot",
    description:
      "A Discord bot that manages campus events, sends reminders, and allows users to export schedules as calendar files.",
    techUsed: ["Typescript", "Node.js", "Discord.js"],
    tags: ["Bot", "Automation"],
    siteLink: "",
    githubLink: "",
  },
  {
    name: "Career Quiz Platform",
    description:
      "An interactive quiz platform that helps users discover potential career paths based on their interests and skills.",
    techUsed: ["React", "Typescript", "Firebase"],
    tags: ["Education", "Quiz"],
    siteLink: "",
    githubLink: "",
  },
  {
    name: "Stellaris Mod Manager",
    description:
      "A tool for managing and customizing Stellaris mods, including load order optimization and compatibility checks.",
    techUsed: ["Typescript", "Electron", "Node.js"],
    tags: ["Gaming", "Tooling"],
    siteLink: "",
    githubLink: "",
  },
  {
    name: "Schedule Planner",
    description:
      "A web-based planner that allows users to organize schedules, visualize timelines, and manage daily tasks efficiently.",
    techUsed: ["React", "Typescript", "Zustand"],
    tags: ["Productivity"],
    siteLink: "",
    githubLink: "",
  },
];

const views = [
  {
    name: "List",
    element: (setSelectedProject: (newProj: MyProject) => void) => (
      <ListView
        myProjects={myProjects}
        setSelectedProject={setSelectedProject}
      />
    ),
  },
  {
    name: "Gallery",
    element: (setSelectedProject: (newProj: MyProject) => void) => (
      <CoverflowView />
    ),
  },
];

export function Projects() {
  const defaultIndex = 0;
  const [selectedProject, setSelectedProject] = useState<MyProject>(
    myProjects[0],
  );
  const [selectedView, setSelectedView] = useState<JSX.Element>(
    views[defaultIndex].element(setSelectedProject),
  );

  return (
    <>
      <div className="flex flex-col h-full">
        <section className="flex flex-col gap-5 h-1/2">
          <MyTabGroup
            defaultIndex={defaultIndex}
            change={(index) =>
              setSelectedView(views[index].element(setSelectedProject))
            }
          >
            {views.map((view) => (
              <MyTab key={view.name}>{view.name}</MyTab>
            ))}
          </MyTabGroup>

          <div className="flex-1 overflow-y-auto">{selectedView}</div>
        </section>
        <section className="p-2 flex-1">{selectedProject.description}</section>
      </div>
    </>
  );
}
