import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="min-h-screen flex gap-8">
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
