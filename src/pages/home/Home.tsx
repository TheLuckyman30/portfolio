import { AboutMe, FeaturedProjects } from "./sections";

const sections = [
  { name: "About Me", element: <AboutMe /> },
  { name: "Featured Projects", element: <FeaturedProjects /> },
];

export function Home() {
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <section className="flex font-montserrat gap-5 items-center min-h-screen">
        <div className="rounded-full h-55 w-55 border border-blue-700 bg-gray-200" />
        <div>
          <p className="font-semibold text-6xl">Brandon Nauta</p>
          <p className="text-3xl text-blue-700">Software Engineer</p>
        </div>
      </section>
      <section className="flex flex-col gap-50 w-[40%] h-fit">
        {sections.map((section) => (
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold font-montserrat text-center text-3xl text-blue-500">
              {section.name}
            </h1>
            {section.element}
          </div>
        ))}
      </section>
    </section>
  );
}
