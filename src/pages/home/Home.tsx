import { AboutMe, FeaturedProjects, Skills } from "./sections";

const sections = [
  { name: "About Me", element: <AboutMe /> },
  { name: "Skills", element: <Skills /> },
  { name: "Featured Projects", element: <FeaturedProjects /> },
];

export function Home() {
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <section className="flex font-montserrat gap-5 items-center min-h-screen">
        <div className="rounded-full h-25 w-25 border border-blue-700 bg-gray-200 md:h-55 md:w-55" />
        <div>
          <p className="font-semibold text-2xl sm:text-4xl md:text-6xl">
            Brandon Nauta
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-700">
            Software Engineer
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-50 mx-auto w-full sm:max-w-5xl px-5 h-fit">
        {sections.map((section) => (
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold font-montserrat text-center text-xl sm:text-3xl text-blue-500">
              {section.name}
            </h1>
            {section.element}
          </div>
        ))}
      </section>
    </section>
  );
}
