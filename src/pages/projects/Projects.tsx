import { Tab, TabGroup, TabList } from "@headlessui/react";
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
];

const views = [
  { name: "List", element: <ListView /> },
  { name: "Gallery", element: <CoverflowView /> },
];

export function Projects() {
  const defaultIndex = 0;
  const [selectedView, setSelectedView] = useState<JSX.Element>(
    views[defaultIndex].element,
  );

  return (
    <>
      <section className="flex flex-col h-1/2">
        <TabGroup
          onChange={(index) => setSelectedView(views[index].element)}
          defaultIndex={defaultIndex}
        >
          <TabList className="flex gap-4 bg-black/15 p-1 shadow-md w-fit rounded-full font-semibold">
            {views.map((view) => (
              <Tab
                key={view.name}
                className="rounded-full px-2 py-0.5 cursor-pointer data-selected:bg-white data-selected:shadow-md focus-visible:outline-none"
              >
                {view.name}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
        <div className="flex-1">{selectedView}</div>
      </section>
      <section className="h-1/2"></section>
    </>
  );
}
