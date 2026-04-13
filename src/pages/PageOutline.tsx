import type { JSX } from "react";

interface PageProps {
  pageName: string;
  pageElement: JSX.Element;
}

export function PageOutline({ pageName, pageElement }: PageProps) {
  return (
    <section className="flex flex-col w-full h-full">
      <div className="pt-2 pb-2 w-full text-center text-4xl text-blue-500 font-bold border-b border-b-gray-300 bg-gray-50">
        {pageName}
      </div>
      <div className="p-5 h-full w-full overflow-y-hidden">{pageElement}</div>
    </section>
  );
}
