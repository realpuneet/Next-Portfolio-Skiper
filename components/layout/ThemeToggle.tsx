"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full border bg-card"
        >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
    )

}