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
              X
            </button>
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
