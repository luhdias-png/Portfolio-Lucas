import { useState } from 'react';
import { Sun, Moon } from "lucide-react";
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
import { Skills } from './components/Skills'
import { Contato } from './components/Contato'

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-zinc-200 dark:bg-[#030712] min-h-screen text-zinc-900 dark:text-slate-200 font-sans selection:bg-amber-500 selection:text-zinc-900 transition-colors duration-500">
        <button 
          onClick={toggleTheme}
          aria-label={darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-amber-500 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all duration-300"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Contato />

        <footer className="py-8 border-t border-zinc-200/5 dark:dark:bg-zinc-950/50 text-center text-zinc-900 text-sm bg-zinc-50 dark:bg-[#030712] transition-colors duration-300 dark:text-amber-50">
          <p>© {new Date().getFullYear()} André Lucas. Todos os direitos reservados.</p>
          <p className="mt-1 flex items-center justify-center gap-1">
            Feito usando React & Tailwind
          </p>
        </footer>

      </div>
    </div>
  );
}