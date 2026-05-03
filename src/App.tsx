import { useRef } from "react";
import { TextButton, Navbar, Footer } from "./components";
import { About, Skills, Projects, ContactMe, Home } from "./sections";
import "./App.css";

const sections = [
  { id: "projects", name: "Projects", element: <Projects /> },
  { id: "about", name: "About", element: <About /> },
  { id: "skills", name: "Skills", element: <Skills /> },
  { id: "contact-me", name: "Contact Me", element: <ContactMe /> },
];

function App() {
  const refs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <main className="font-roboto">
      <Navbar>
        <TextButton
          key="home"
          onClick={() =>
            refs.current["home"]?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Home
        </TextButton>
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
      <section id="sections" className="flex flex-col mb-5">
        <div
          ref={(element) => {
            refs.current["home"] = element;
          }}
        >
          <Home
            scrollToContact={() =>
              refs.current["contact-me"]?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
        <div className="flex flex-col gap-50 mx-auto w-full sm:max-w-5xl px-5 h-fit">
          {sections.map((section) => (
            <section
              id={section.id}
              ref={(element) => {
                refs.current[section.id] = element;
              }}
              key={section.id}
              className="flex flex-col gap-10 scroll-m-30"
            >
              <h1 className="font-bold font-poppins text-center text-4xl sm:text-5xl text-blue-500">
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
