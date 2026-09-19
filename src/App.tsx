import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListPersonas from "./pages/CharacterList";
import About from "./pages/About";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<IntroPage />} />
      <Route path="/hexatombe" element={<HomePage />} />
      <Route path="/list-personas" element={<ListPersonas />} />
      <Route path="/about/:id" element={<About />} />
    </Routes>
  );
}

export default App;
