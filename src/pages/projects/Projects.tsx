import { MyTab, MyTabGroup } from "../../components";
import { CoverflowView, ListView } from "./components";
import { useProjPageConext } from "../../utils/proj-page-context";
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
  const { selectedProject } = useProjPageConext();
  const [selectedView, setSelectedView] = useState<JSX.Element>(
    views[defaultIndex].element,
  );

  return (
    <>
      <div className="flex flex-col h-full">
        <section className="flex flex-col gap-5 h-1/2">
          <MyTabGroup
            defaultIndex={defaultIndex}
            change={(index) => setSelectedView(views[index].element)}
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
