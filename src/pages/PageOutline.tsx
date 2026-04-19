import type { JSX } from "react";

interface PageProps {
  pageName: string;
  pageElement: JSX.Element;
}

export function PageOutline({ pageName, pageElement }: PageProps) {
  return (
    <section className="flex flex-col h-full w-full pt-20">
      <div className="w-full text-center text-4xl text-blue-700 font-bold">
        {pageName}
      </div>
      <section className="p-5 w-full grow">{pageElement}</section>
    </section>
  );
}
