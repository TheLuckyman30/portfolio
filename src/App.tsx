import { useRef } from "react";
import { TextButton, Navbar, Footer } from "./components";
import { Introduction, Skills, Projects, ContactMe } from "./sections";
import picOfMe from "./assets/images/me.png";
import "./App.css";

const sections = [
  { id: "introduction", name: "Introduction", element: <Introduction /> },
  { id: "projects", name: "Projects", element: <Projects /> },
  { id: "skills", name: "Skills", element: <Skills /> },
  { id: "contact-me", name: "Contact Me", element: <ContactMe /> },
];

function App() {
  const refs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <main className="font-roboto">
      <Navbar>
        {sections.map((section) => (
          <TextButton
            key={section.id}
            onClick={() =>
              refs.current[section.id]?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {section.name}
          </TextButton>
        ))}
      </Navbar>
      <section
        id="all-sections"
        className="flex flex-col justify-center items-center p-5"
      >
        <section
          id="landing"
          className="flex font-montserrat gap-5 items-center min-h-screen"
        >
          <div
            className="rounded-full shadow-xl h-25 w-25 bg-gray-200 md:h-55 md:w-55 bg-cover"
            style={{ backgroundImage: `url(${picOfMe})` }}
          />
          <div>
            <p className="font-semibold text-2xl sm:text-4xl md:text-6xl">
              Brandon Nauta
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-700">
              Software Engineer
            </p>
          </div>
        </section>
        <div
          id="main-sections-container"
          className="flex flex-col gap-50 mx-auto w-full sm:max-w-5xl px-5 h-fit"
        >
          {sections.map((section) => (
            <section
              id={section.id}
              ref={(element) => {
                refs.current[section.id] = element;
              }}
              key={section.id}
              className="flex flex-col gap-10 scroll-m-30"
            >
              <h1 className="font-semibold font-montserrat text-center text-2xl sm:text-4xl text-blue-500">
                {section.name}
              </h1>
              {section.element}
            </section>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
