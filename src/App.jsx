import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  }, [window.innerHeight]);
  return (
    <div className="container" style={{ height: height, width: "100vw" }}>
      <Header />
      <TodoList />
      <Footer/>
    </div>
  );
}

export default App;
