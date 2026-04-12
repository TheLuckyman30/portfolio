import type { JSX } from "react";

interface PageProps {
  pageName: string;
  pageElement: JSX.Element;
}

export function PageOutline({ pageName, pageElement }: PageProps) {
  return (
    <section className="flex flex-col w-full h-full">
      <div className="w-full text-center text-4xl text-blue-500 font-bold border-b-3 border-b-blue-300">
        {pageName}
      </div>
      <div className="p-2 h-full w-full overflow-y-hidden">{pageElement}</div>
    </section>
  );
}
