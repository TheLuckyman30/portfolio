import { createContext, useContext, useState } from "react";
import type { MyProject } from "./interfaces";

interface SelectedProjState {
  selectedProject: MyProject | null;
  setSelectedProject: (newProj: MyProject) => void;
}

const SelectedProjContext = createContext<SelectedProjState | undefined>(
  undefined,
);

export function SelectedProjContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedProject, setSelectedProject] = useState<MyProject | null>(
    null,
  );
  const defaultValue: SelectedProjState = {
    selectedProject,
    setSelectedProject,
  };

  return (
    <SelectedProjContext.Provider value={defaultValue}>
      {children}
    </SelectedProjContext.Provider>
  );
}

export function useSelectedProjConext() {
  const context = useContext(SelectedProjContext);

  if (context === undefined) {
    throw new Error("useProjPageConext requried a provider!");
  }

  return context;
}
