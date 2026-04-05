import { useState, type JSX } from "react";
import { ContactMe, MyButton, MyTextButton, Sidebar } from "./components";
import { AboutMe, Projects } from "./pages";
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

  const modals: Modal[] = [
    {
      name: "Contact Me",
      element: (
        <ContactMe show={showContactForm} setShow={setShowContactForm} />
      ),
      setShow: setShowContactForm,
    },
  ];

  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <section className="bg-white rounded-md shadow-2xl p-5 h-[95%] w-[85%] flex">
        <Sidebar>
          {pages.map((page) => (
            <MyTextButton onClick={() => setCurrentPage(page)}>
              {page.name}
            </MyTextButton>
          ))}
          {modals.map((modal) => (
            <MyButton onClick={() => modal.setShow(true)}>
              {modal.name}
            </MyButton>
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
      {modals.map((modal) => modal.element)}
    </main>
  );
}

export default App;
