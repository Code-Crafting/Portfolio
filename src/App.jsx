import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import PlayGroundLayout from "./layout/PlayGroundLayout";
import TicTacToe from "./components/games/TicTacToe";
import Snake from "./components/games/Snake";
import MemoryGame from "./components/games/MemoryGame";

function App() {
  return (
    <div className="min-h-screen flex relative">
      {/* aside */}
      <Aside />

      <Routes>
        {/* Portfolio Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Playground Layout */}
        <Route element={<PlayGroundLayout />}>
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/memory" element={<MemoryGame />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
