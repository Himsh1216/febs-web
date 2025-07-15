// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation bar with a simple dark mode toggle.
 */
const Navbar = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-white">
      <div className="flex justify-between items-center">
        <Link to="/">FEBS</Link>
        <div className="flex items-center gap-4">
          <Link to="/team" className="px-2">
            Team
          </Link>
          <Link to="/resources" className="px-2">
            Resources
          </Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className="border px-2 py-1 rounded-md"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;