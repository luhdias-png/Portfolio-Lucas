import lucasHero from "../assets/Lucas_hero.png"
import fundoHero from "../assets/Hero_fundo.png"
import { FileText, ArrowRight } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Hero (){
    return(
    <header className="relative flex w-full lg:h-160 py-16 lg:py-0 bg-zinc-950 overflow-hidden items-center">
    <img src={fundoHero} alt="Fundo Hero" className='absolute z-1- w-full h-full object-cover opacity-30 dark:opacity-10' />
    <div className="absolute inset-0 z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-600/20 blur-[120px] animate-[pulseGlow_8s_ease-in-out_infinite] dark:bg-amber-600/10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[120px] animate-[pulseGlow_10s_ease-in-out_infinite_alternate] dark:bg-blue-600/10"></div>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up delay-5000 leading-tight text-zinc-100 dark:text-white">
          Olá, sou <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500 dark:from-amber-400 dark:to-amber-600">
            André Lucas
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#d8d9db] dark:text-zinc-100 mb-6 animate-fade-in-up delay-200">
          Desenvolvedor Full Stack
        </h2>
        <p className="text-base sm:text-lg text-white dark:text-zinc-100 max-w-lg mb-8 md:mb-10 animate-fade-in-up delay-300 leading-relaxed">
          Transformo ideias em aplicações web modernas, escaláveis e centradas na experiência do usuário, entregando código limpo e resultados de alto impacto.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center animate-fade-in-up delay-300">
          <a href="https://github.com/luhdias-png" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1" aria-label="Acessar meu GitHub">
            <GithubIcon size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/andre-lucas-dias-lima/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1" aria-label="Acessar meu LinkedIn">
            <LinkedinIcon size={20} /> LinkedIn
          </a>
          <a href="/CV - ANDRE LUCAS.pdf" download="CV_ANDRE_LUCAS.pdf" rel="noopener noreferrer" target="_blank" className="group relative text-white font-bold text-[18px] inline-flex items-center gap-2 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full" aria-label="Baixar meu Currículo em PDF">
            <FileText size={20} /> Currículo
            <ArrowRight size={25} className="material-symbols-outlined transition-transform duration-300 group-hover:-rotate-45" />
          </a>
        </div>
      </div>

<div className="w-full md:w-1/2 flex justify-center animate-fade-in-up delay-200">
  <div className="relative animate-float">
    <img 
      src={lucasHero} 
      alt="Foto de André Lucas" 
      className="w-48 sm:w-64 md:block hidden lg:w-100 h-auto shadow-2xl rounded-full opacity-80 hover:opacity-100 hover:scale-102 transition-all duration-500 hover:drop-shadow-[0_0_2px_#f59e0b] hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] hover:drop-shadow-[0_0_15px_rgba(217,119,6,0.4)]"
    />
  </div>
</div>
    </div>
  </header>
    )
}