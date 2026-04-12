import { Tab, TabGroup } from "../../components";
import { CoverflowView, ListView, ProjectInfo } from "./components";
import { type JSX, useState } from "react";

const views = [
  {
    name: "List",
    element: <ListView />,
  },
  {
    name: "Gallery",
    element: <CoverflowView />,
  },
];

export function Projects() {
  const defaultIndex = 0;
  const [selectedView, setSelectedView] = useState<JSX.Element>(
    views[defaultIndex].element,
  );

  return (
    <>
      <div className="flex flex-col h-full">
        <section className="flex flex-col gap-5 h-1/2">
          <TabGroup
            defaultIndex={defaultIndex}
            change={(index) => setSelectedView(views[index].element)}
          >
            {views.map((view) => (
              <Tab key={view.name}>{view.name}</Tab>
            ))}
          </TabGroup>
          <div className="flex-1 overflow-y-auto">{selectedView}</div>
        </section>
        <ProjectInfo />
      </div>
    </>
  );
}
