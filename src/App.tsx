import "./App.css";
import MyButton from "./components/MyButton";
import MyTextButton from "./components/MyTextButon";

function App() {
  return (
    <main className="flex-col h-screen w-screen flex justify-center items-center text-xl">
      <MyButton>Hello World!</MyButton>
      <MyTextButton>Hello World!</MyTextButton>
    </main>
  );
}

export default App;
