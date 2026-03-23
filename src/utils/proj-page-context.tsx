import { createContext, useContext, useState } from "react";
import type { MyProject } from "./interfaces";
import projects from "../data/my-projects.json";

interface ProjPageState {
  allProjects: MyProject[];
  selectedProject: MyProject;
  setSelectedProject: (newProj: MyProject) => void;
}

const ProjPageContext = createContext<ProjPageState | undefined>(undefined);

export function ProjPageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedProject, setSelectedProject] = useState<MyProject>(
    projects[0],
  );
  const defaultValue: ProjPageState = {
    allProjects: projects,
    selectedProject,
    setSelectedProject,
  };

  return (
    <ProjPageContext.Provider value={defaultValue}>
      {children}
    </ProjPageContext.Provider>
  );
}

export function useProjPageConext() {
  const context = useContext(ProjPageContext);

  if (context === undefined) {
    throw new Error("useProjPageConext requried a provider!");
  }

  return context;
}
