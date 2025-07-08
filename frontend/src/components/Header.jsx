import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/templates', label: 'Templates' },
    { to: '/editor', label: 'Create CV' },
    { to: '/blog', label: 'Blog' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BestFit Resume
        </Link>
        <nav className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-blue-600 transition ${
                pathname === link.to ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
