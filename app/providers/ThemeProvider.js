"use client";
import { createContext,useContext,useEffect,useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme,setTheme] = useState("dark");
    const [mounted,setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme") === "light" ? "light" : "dark";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        document.documentElement.classList.toggle("light", savedTheme === "light");
    },[]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.documentElement.classList.toggle("light", newTheme === "light");
    };

    return (
        <ThemeContext.Provider value={{ theme,toggleTheme,mounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
