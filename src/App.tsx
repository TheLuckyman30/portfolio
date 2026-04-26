import { useState, type JSX } from "react";
import { TextButton, Navbar, Footer, ProjectModal } from "./components";
import { Home, Projects } from "./pages";
import { useSelectedProjConext } from "./utils";
import "./App.css";

interface Page {
  name: string;
  element: JSX.Element;
}

const pages: Page[] = [
  { name: "Home", element: <Home /> },
  { name: "All Projects", element: <Projects /> },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(pages[0]);
  const { selectedProject } = useSelectedProjConext();

  return (
    <main className="font-roboto">
      <Navbar>
        {pages.map((page) => (
          <TextButton onClick={() => setCurrentPage(page)}>
            {page.name}
          </TextButton>
        ))}
      </Navbar>
      {currentPage.element}
      <Footer />
      {selectedProject !== null && (
        <ProjectModal selectedProject={selectedProject} />
      )}
    </main>
  );
}

export default App;
