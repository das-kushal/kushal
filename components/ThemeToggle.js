"use client";
import { motion } from "framer-motion";
import { Sun,Moon } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function ThemeToggle() {
    const { theme,toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
            ) : (
                <Moon size={20} className="text-gray-700" />
            )}
        </motion.button>
    );
}
