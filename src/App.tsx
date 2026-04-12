import { useState, type JSX } from "react";
import { ContactMe, Button, TextButton, Resume, Sidebar } from "./components";
import { AboutMe, PageOutline, Projects } from "./pages";
import "./App.css";
import { ProjPageContextProvider } from "./utils/proj-page-context";

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
  { name: "About Me", element: <AboutMe /> },
  {
    name: "Projects",
    element: (
      <ProjPageContextProvider>
        <Projects />
      </ProjPageContextProvider>
    ),
  },
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
    <main className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <section className="bg-white rounded-md shadow-2xl p-5 h-[95%] w-[85%] flex">
        <Sidebar>
          {pages.map((page) => (
            <TextButton onClick={() => setCurrentPage(page)}>
              {page.name}
            </TextButton>
          ))}
          {modals.map((modal) => (
            <Button onClick={() => modal.setShow(true)}>{modal.name}</Button>
          ))}
        </Sidebar>
        <PageOutline
          pageName={currentPage.name}
          pageElement={currentPage.element}
        />
      </section>
      {modals.map((modal) => modal.element)}
    </main>
  );
}

export default App;
