import { useState } from "react";
import "./App.css";

// Import HEADER
import Header from "./components/Header.jsx";
// Import MAIN
import Main from "./components/Main.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
