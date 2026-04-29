import { useRef } from "react";
import { TextButton, Navbar, Footer } from "./components";
import { Introduction, Skills, Projects, ContactMe, Home } from "./sections";
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
        id="sections"
        className="flex flex-col mx-auto mb-5 w-full sm:max-w-5xl px-5 h-fit"
      >
        <Home />
        <div className="flex flex-col gap-50 ">
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
