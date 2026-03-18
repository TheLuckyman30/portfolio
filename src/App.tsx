import { useState, type JSX } from "react";
import { MyTextButton, Sidebar } from "./components";
import { AboutMe, ContactMe, Projects, Resume } from "./pages";
import "./App.css";

interface Page {
  name: string;
  element: JSX.Element;
}

const PAGES: Page[] = [
  { name: "About Me", element: <AboutMe /> },
  { name: "Projects", element: <Projects /> },
  { name: "Resume", element: <Resume /> },
  { name: "Contact Me", element: <ContactMe /> },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(PAGES[0]);

  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <section className="bg-white rounded-md shadow-2xl p-5 h-[95%] w-[85%] flex">
        <Sidebar>
          {PAGES.map((page) => (
            <MyTextButton onClick={() => setCurrentPage(page)}>
              {page.name}
            </MyTextButton>
          ))}
        </Sidebar>
        <section className="flex flex-col w-full h-full">
          <div className="w-full text-center text-4xl text-blue-500 font-bold border-b-3 border-b-blue-300">
            {currentPage.name}
          </div>
          <div className="p-2 h-full w-full overflow-y-hidden">
            {currentPage.element}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
