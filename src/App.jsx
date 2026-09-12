import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ListPersonas from "./pages/ListPersonas";
import About from "./pages/About";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/hexatombe" element={<Home />} />
      <Route path="/list-personas" element={<ListPersonas />} />
      <Route path="/about/:id" element={<About />} />
    </Routes>
  );
}

export default App;
