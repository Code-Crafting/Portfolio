import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import { lazy, Suspense } from "react";
import Profile from "./components/Profile";
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="min-h-screen flex">
      {/* aside */}
      <Aside />

      {/* main content */}
      <main className="flex-1 max-w-7xl mx-auto pt-16 px-8">
        <Profile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
