import { Backdrop, Chip, findIcon } from "./common-ui";
import type { MyProject } from "../utils/interfaces";
import pic from "../assets/images/test.png";

interface ProjectModalProps {
  selectedProject: MyProject;
}

export function ProjectModal({ selectedProject }: ProjectModalProps) {
  return (
    <Backdrop>
      <div className="flex flex-col w-[90%] min-h-[90%] 2xl:w-200 2xl:min-h-150 rounded-md shadow-xl overflow-hidden bg-white">
        <div
          className="w-full h-40"
          style={{ backgroundImage: `url(${pic})` }}
        />
        <div className="p-2 text-xl text-gray-700">{selectedProject.name}</div>
        <div className="p-2 px-5 grow text-sm">
          {selectedProject.description}
        </div>
        <div className="flex flex-wrap gap-2 p-2">
          {selectedProject.techUsed.map((tech) => (
            <Chip>
              <div className="flex items-center gap-2">
                {findIcon(tech, "sm")}
                {tech}
              </div>
            </Chip>
          ))}
        </div>
        <div className="p-2 border-t border-gray-300 bg-gray-50">
          Links here
        </div>
      </div>
    </Backdrop>
  );
}
