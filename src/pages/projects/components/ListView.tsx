import { useProjPageConext } from "../../../utils/proj-page-context";
import { ProjectCard } from "./ProjectCard";

export function ListView() {
  const { allProjects, setSelectedProject } = useProjPageConext();
  return (
    <>
      <section className="p-2 flex gap-5 flex-wrap h-full">
        {allProjects.map((proj) => (
          <ProjectCard project={proj} setSelectedProject={setSelectedProject} />
        ))}
      </section>
    </>
  );
}
