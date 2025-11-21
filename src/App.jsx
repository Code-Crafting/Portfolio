import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import PlayGroundLayout from "./layout/PlayGroundLayout";
import { lazy } from "react";
import LazyWrapper from "./components/LazyWrapper";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/themeContext";
import { CurrentPageProvider } from "./contexts/currentPageContext";

const TicTacToe = lazy(() => import("./components/games/TicTacToe"));
const Snake = lazy(() => import("./components/games/Snake"));
const MemoryGame = lazy(() => import("./components/games/MemoryGame"));
const ProjectInfo = lazy(() => import("./pages/ProjectInfo"));

function App() {
  return (
    <div className="min-h-screen 850px:flex relative">
      <ThemeContextProvider>
        <CurrentPageProvider>
          {/* aside */}
          <Aside />
          <Navbar /> {/* only visible before 850px */}
          <Routes>
            {/* Portfolio Layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Project Details */}
            <Route path="/project/:projectId" element={<ProjectInfo />} />

            {/* Playground Layout */}
            <Route element={<PlayGroundLayout />}>
              <Route
                path="/tictactoe"
                element={
                  <LazyWrapper>
                    <TicTacToe />
                  </LazyWrapper>
                }
              />
              <Route
                path="/snake"
                element={
                  <LazyWrapper>
                    <Snake />
                  </LazyWrapper>
                }
              />
              <Route
                path="/memory"
                element={
                  <LazyWrapper>
                    <MemoryGame />
                  </LazyWrapper>
                }
              />
            </Route>

            {/* 404 Fallback */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </CurrentPageProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
