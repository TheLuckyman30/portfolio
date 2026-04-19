import { useState, type JSX } from "react";
import { ContactMe, Button, TextButton, Resume, Navbar } from "./components";
import { Home, Projects } from "./pages";
import "./App.css";

interface Page {
  name: string;
  element: JSX.Element;
}

interface Modal {
  name: string;
  element: JSX.Element;
  setShow: (show: boolean) => void;
}

const pages: Page[] = [
  { name: "Home", element: <Home /> },
  { name: "Projects", element: <Projects /> },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(pages[0]);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [showResume, setShowResume] = useState<boolean>(false);
  const modals: Modal[] = [
    {
      name: "Contact Me",
      element: (
        <ContactMe show={showContactForm} setShow={setShowContactForm} />
      ),
      setShow: setShowContactForm,
    },
    {
      name: "Resume",
      element: <Resume show={showResume} setShow={setShowResume} />,
      setShow: setShowResume,
    },
  ];

  return (
    <main>
      <Navbar>
        {pages.map((page) => (
          <TextButton onClick={() => setCurrentPage(page)}>
            {page.name}
          </TextButton>
        ))}
        {modals.map((modal) => (
          <Button onClick={() => modal.setShow(true)}>{modal.name}</Button>
        ))}
      </Navbar>
      {currentPage.element}
      {modals.map((modal) => modal.element)}
    </main>
  );
}

export default App;
