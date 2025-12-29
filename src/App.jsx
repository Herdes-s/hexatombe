import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ListPersonas from "./pages/ListPersonas";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/list-personas" element={<ListPersonas />} />
      <Route path="/about/:id" element={<About />} />
    </Routes>
  );
}

export default App;
