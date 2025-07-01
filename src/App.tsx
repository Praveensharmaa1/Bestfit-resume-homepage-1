import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UploadResume from "./pages/UploadResume";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-white shadow mb-6">
        <Link to="/" className="mr-4 font-semibold">Home</Link>
        <Link to="/upload" className="font-semibold">Upload Resume</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadResume />} />
      </Routes>
    </Router>
  );
}
