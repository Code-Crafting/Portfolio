import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import Profile from "./components/Profile";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex relative">
      {/* aside */}
      <Aside />
      {/* main content */}
      <main className="flex-1 max-w-7xl mx-auto pt-16 px-8 pb-4 overflow-y-auto h-screen no-scrollbar">
        <Profile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
