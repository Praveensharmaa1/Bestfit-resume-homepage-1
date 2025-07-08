import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages & Components
import Header from './components/Header';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Editor from './pages/Editor';
import Blog from './pages/Blog';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      {/* Header will be shown on every page */}
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          {/* Fallback route */}
          <Route
            path="*"
            element={
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold">404 – Page Not Found</h2>
                <p className="mt-4">Sorry, we couldn’t find that page.</p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* You can add a global footer here if desired */}
    </BrowserRouter>
  );
}
