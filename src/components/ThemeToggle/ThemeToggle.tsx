"use client";

// Importing required modules
import { useState, useEffect } from 'react';

// This is your DarkModeToggle component
export const ThemeToggle = () => {
    // This state variable keeps track of whether dark mode is enabled
    const [darkMode, setDarkMode] = useState(false);

    // This hook will run once after the component has mounted
    useEffect(() => {
        // This function checks if dark mode is enabled in the system
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setDarkMode(darkModeMediaQuery.matches);

        // This function handles changes in the media query
        const handleChange = (event: MediaQueryListEvent) => setDarkMode(event.matches);

        // Monitor the media query and set dark mode if it changes
        darkModeMediaQuery.addEventListener('change', handleChange);

        // Clean up the listener when the component unmounts
        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);

    // This function toggles dark mode on and off
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute('data-mode', darkMode ? 'light' : 'dark');
    };

    // Render the toggle button
    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};
