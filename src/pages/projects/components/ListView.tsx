import type { MyProject } from "../../../utils/interfaces";

interface ListViewProps {
  myProjects: MyProject[];
}

function Card({ project }: { project: MyProject }) {
  return (
    <div className="bg-black/10 w-80 h-80 p-2 rounded-md hover:scale-105 duration-75 cursor-pointer">
      <div className="font-semibold">{project.name}</div>
    </div>
  );
}

export function ListView({ myProjects }: ListViewProps) {
  return (
    <>
      <section className="p-2 flex gap-5 flex-wrap h-full overflow-y-scroll">
        {myProjects.map((proj) => (
          <Card project={proj} />
        ))}
      </section>
    </>
  );
}
