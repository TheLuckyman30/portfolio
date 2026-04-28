import { useState, type JSX } from "react";
import { TextButton, Navbar, Footer } from "./components";
import { Home, Projects } from "./pages";
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

  return (
    <main className="font-roboto">
      <Navbar>
        {pages.map((page) => (
          <TextButton key={page.name} onClick={() => setCurrentPage(page)}>
            {page.name}
          </TextButton>
        ))}
      </Navbar>
      {currentPage.element}
      <Footer />
    </main>
  );
}

export default App;
