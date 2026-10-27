"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={16} className="text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={16} className="text-indigo-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
