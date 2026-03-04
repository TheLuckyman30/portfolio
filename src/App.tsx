import { useState, type JSX } from "react";
import "./App.css";
import AboutMe from "./pages/about-me/AboutMe";
import { MyTextButton, Sidebar } from "./components";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import ContactMe from "./pages/contact-me/ContactMe";

const PAGES = [
  { name: "About Me", element: <AboutMe /> },
  { name: "Projects", element: <Projects /> },
  { name: "Resume", element: <Resume /> },
  { name: "Contact Me", element: <ContactMe /> },
];

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(PAGES[0].element);

  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <section className="bg-white rounded-md shadow-2xl p-5 h-[95%] w-[85%] flex">
        <Sidebar>
          {PAGES.map((page) => (
            <MyTextButton onClick={() => setCurrentPage(page.element)}>
              {page.name}
            </MyTextButton>
          ))}
        </Sidebar>
        {currentPage}
      </section>
    </main>
  );
}

export default App;
