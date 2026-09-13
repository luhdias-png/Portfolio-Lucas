import { useRef, useState } from 'react';
import DADOS from "../components/json/dados.json"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export function Projects (){
    const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

  const projetosRef = useRef<HTMLDivElement | null>(null);
  const [filtro, setFiltro] = useState('Todos');

  const scrollProjetos = (dir: 'left' | 'right') => {
    if (projetosRef.current) {
      projetosRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  const categorias = ['Todos', ...new Set(DADOS.projetos.map(p => p.categoria))];
  const projetosFiltrados = filtro === 'Todos' ? DADOS.projetos : DADOS.projetos.filter(p => p.categoria === filtro);
    return(
            <section className="py-14 bg-zinc-50 dark:bg-zinc-950/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mt-2 mb-8">Projetos em Destaque</h2>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                filtro === cat 
                  ? 'bg-amber-500/50 text-zinc-950 shadow-lg scale-105 hover:bg-amber-500' 
                  : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-800 border border-zinc-800 dark:border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative group animate-fade-in-up">
        <button onClick={() => scrollProjetos('left')} aria-label="Projetos anteriores" className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-zinc-900 p-3 rounded-full border border-amber-500/50 text-amber-500 dark:opacity-50 cursor-pointer hover:opacity-100 transition-all hover:bg-amber-500 hover:text-white dark:hover:text-zinc-950 hidden md:block shadow-lg">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => scrollProjetos('right')} aria-label="Próximos projetos" className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-zinc- dark:bg-zinc-900 p-3 rounded-full border border-amber-500/50 text-amber-500 dark:opacity-50 cursor-pointer hover:opacity-100 transition-all hover:bg-amber-500 hover:text-white dark:hover:text-zinc-950 hidden md:block shadow-lg">
          <ChevronRight size={24} />
        </button>

        <div ref={projetosRef} className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory">
          {projetosFiltrados.map((proj, idx) => (
            <div key={idx} className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center">
              <div className="bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-2xl overflow-hidden h-full flex flex-col group/card hover:-translate-y-2 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)]">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-zinc-900/40 group-hover/card:bg-transparent z-10 transition-colors duration-300"></div>
                  <div className="absolute top-3 right-3 z-20 bg-zinc-900/80 text-amber-400 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {proj.categoria}
                  </div>
                  <img src={proj.imagem} alt={`Capa do projeto ${proj.titulo}`} className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{proj.titulo}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">{proj.descricao}</p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-xs italic mb-6 flex-grow border-l-2 border-amber-500 pl-3">
                    <span className="font-semibold not-italic text-zinc-700 dark:text-zinc-300">Meu papel:</span> {proj.papel}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.techs.map(tech => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-amber-600 dark:text-amber-400 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                      <GithubIcon size={16} /> Repositório
                    </a>
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors flex items-center gap-1 text-sm font-medium">
                      <ExternalLink size={16} /> Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        
    )
}