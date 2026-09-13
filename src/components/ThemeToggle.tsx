import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export function ThemeToggle({ darkMode, toggleTheme }: ThemeToggleProps) {
  return (
    <button 
      onClick={toggleTheme}
      aria-label={darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-amber-500 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all duration-300"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}