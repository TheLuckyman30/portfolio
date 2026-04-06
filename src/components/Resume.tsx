import { Backdrop } from "./";

interface ResumeProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function Resume({ show, setShow }: ResumeProps) {
  return (
    <div className={`${show ? "" : "hidden"}`}>
      <Backdrop>
        <div className="flex flex-col gap-5 bg-gray-200 min-w-fit w-100 p-2 rounded-md shadow-md">
          <div className="flex w-full justify-between">
            <div className="font-bold text-2xl">Resume</div>
            <button
              className="text-xl text-slate-700 cursor-pointer"
              onClick={() => setShow(false)}
            >
              X
            </button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}
