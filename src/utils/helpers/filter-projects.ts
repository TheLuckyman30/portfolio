import type { MyProject } from "../";

export function filterProjects(projects: MyProject[], searchString: string) {
  return projects.filter((project) => {
    const description = project.longDesc.toLowerCase();
    const techUsed = project.techUsed.join(",").toLowerCase();
    const title = project.name.toLowerCase();

    return (
      !searchString ||
      title.includes(searchString) ||
      techUsed.includes(searchString) ||
      description.includes(searchString)
    );
  });
}
