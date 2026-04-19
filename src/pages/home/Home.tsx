import { AboutMe } from "./sections";

const sections = [{ name: "About Me", element: <AboutMe /> }];

export function Home() {
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <section className="flex flex-col gap-5 justify-center min-h-screen">
        <p className="font-semibold text-6xl">Brandon Nauta</p>
        <p className="text-3xl text-blue-700">Software Engineer</p>
      </section>
      <section className="flex flex-col gap-15 w-[40%] h-fit">
        {sections.map((section) => (
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold text-3xl text-center text-blue-500">
              {section.name}
            </h1>
            {section.element}
          </div>
        ))}
      </section>
    </section>
  );
}
