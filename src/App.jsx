import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import PlayGroundLayout from "./layout/PlayGroundLayout";
import { lazy, Suspense } from "react";

const TicTacToe = lazy(() => import("./components/games/TicTacToe"));
const Snake = lazy(() => import("./components/games/Snake"));
const MemoryGame = lazy(() => import("./components/games/MemoryGame"));

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
          <Route
            path="/tictactoe"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <TicTacToe />
              </Suspense>
            }
          />
          <Route
            path="/snake"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Snake />
              </Suspense>
            }
          />
          <Route
            path="/memory"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <MemoryGame />
              </Suspense>
            }
          />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
