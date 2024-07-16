import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Project } from "./pages/project";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/about" element={<About />} />,
        <Route path="/project" element={<Project />} />,
      </Routes>
    </div>
  );
}

export default App;
