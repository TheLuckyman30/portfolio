import { useRef } from "react";
import { TextButton, Navbar, Footer, SectionHeader } from "./components";
import { About, Skills, Projects, ContactMe, Home } from "./sections";
import "./App.css";

const sections = [
  { id: "projects", name: "Projects", element: <Projects /> },
  { id: "about", name: "About", element: <About /> },
  { id: "skills", name: "Skills", element: <Skills /> },
  { id: "contact-me", name: "Contact Me", element: <ContactMe /> },
];

function App() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <main className="main">
      <Navbar>
        <TextButton
          key="home"
          onClick={() =>
            sectionRefs.current["home"]?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Home
        </TextButton>
        {sections.map((section) => (
          <TextButton
            key={section.id}
            onClick={() =>
              sectionRefs.current[section.id]?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {section.name}
          </TextButton>
        ))}
      </Navbar>
      <section id="sections" className="sections">
        <div
          ref={(element) => {
            sectionRefs.current["home"] = element;
          }}
        >
          <Home
            scrollToContact={() =>
              sectionRefs.current["contact-me"]?.scrollIntoView({
                behavior: "smooth",
              })
            }
          />
        </div>
        <div className="section">
          {sections.map((section) => (
            <section
              id={section.id}
              ref={(element) => {
                sectionRefs.current[section.id] = element;
              }}
              key={section.id}
              className="section-content"
            >
              <SectionHeader sectionName={section.name} />
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
