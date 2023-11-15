import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hi from "./components/hi";
import Container from "./components/MapContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container />
    </>
  );
}

export default App;
