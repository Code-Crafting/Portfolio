import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="min-h-screen flex">
      {/* aside */}
      <Aside />

      {/* main content */}
      <main className="flex-1 max-w-7xl mx-auto pt-16 pl-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
