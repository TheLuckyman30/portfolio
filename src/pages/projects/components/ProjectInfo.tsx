import { useProjPageConext } from "../../../utils/proj-page-context";

export function ProjectInfo() {
  const { selectedProject } = useProjPageConext();
  const test = [
    { label: "Description", value: selectedProject.description },
    { label: "Technology Used", value: selectedProject.techUsed },
  ];

  return (
    <section className="flex flex-col p-2 flex-1">
      <h1 className="text-3xl font-bold text-center mb-1">
        {selectedProject.name}
      </h1>
      <table>
        <tbody>
          {test.map((t) => (
            <tr>
              <td className="w-40 pb-10 font-semibold">{t.label}:</td>
              <td className="pb-10">{t.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
