import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page } from "react-pdf";
import { Backdrop } from "./";
import { pdfjs } from "react-pdf";
import resume from "../assets/files/Resume.pdf";

interface ResumeProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function Resume({ show, setShow }: ResumeProps) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-slate-500 hover:text-slate-700 duration-75"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </button>
          </div>
          <div className="w-fit bg-white p-1 rounded-md shadow-md hover:scale-105 duration-75">
            <a href={resume} download="bnauta-resume.pdf">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </a>
          </div>
          <div className="rounded-md overflow-hidden">
            <Document file={resume}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}
