"use client"; 

import React, { useState, useEffect } from 'react';
import './theme-toggle-btn.css';
import { useTheme } from 'next-themes';

const ThemeToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) {
      return null; 
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(theme === "dark" ? "light" : "dark")
  };

  return (
    <div className="themeToggleBtn flex items-center justify-center relative dark:bg-[#18191c] bg-white px-3 py-2 outline-none border-none rounded-3xl w-20">
      <button
        onClick={toggleTheme}
        className={`relative inline-flex border-none items-center h-6 w-12 rounded-full ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
        } focus:outline-none transition-all`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full shadow-md transition-transform ${
            isDarkMode ? 'translate-x-6 bg-yellow-400' : 'bg-gray-900'
          }`}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 116.707 2.707a8.001 8.001 0 0010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 0l.71.7a1 1 0 01-1.42 1.42l-.7-.71a1 1 0 010-1.42zM17 9a1 1 0 110 2h-1a1 1 0 110-2h1zM4 9a1 1 0 110 2H3a1 1 0 110-2h1zm1.64-5.64a1 1 0 011.42 0l.7.71a1 1 0 11-1.42 1.42l-.7-.71a1 1 0 010-1.42zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm5.66-2.34a1 1 0 010 1.42l-.7.71a1 1 0 11-1.42-1.42l.7-.71a1 1 0 011.42 0zM5.64 14.36a1 1 0 010 1.42l-.7.71a1 1 0 11-1.42-1.42l.7-.71a1 1 0 011.42 0zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
