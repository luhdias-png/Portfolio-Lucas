import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import DADOS from "../components/json/dados.json"

export function Timeline() {
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const scrollTimeline = (dir: 'left' | 'right') => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };
    return(
        <section className="py-14 relative">
      <div className="max-w-7xl mx-auto px-6 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mt-2 mb-16">Linha do Tempo</h2>

        <div className="relative group">
          <button onClick={() => scrollTimeline('left')} aria-label="Voltar no tempo" className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-zinc-900 p-3 rounded-full border border-amber-500/50 text-amber-500 opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-500 hover:text-white dark:hover:text-zinc-950 hidden md:block shadow-lg">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scrollTimeline('right')} aria-label="Avançar no tempo" className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-zinc-900 p-3 rounded-full border border-amber-500/50 text-amber-500 opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-500 hover:text-white dark:hover:text-zinc-950 hidden md:block shadow-lg">
            <ChevronRight size={24} />
          </button>

          <div ref={timelineRef} className="flex overflow-x-auto gap-6 pb-10 hide-scrollbar snap-x snap-mandatory">
            {DADOS.eventos.map((item, index) => {
              return (
                <div key={index} className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] snap-start relative pl-6 py-6 border-l-2 border-zinc-300 dark:border-zinc-800 group hover:border-amber-500 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                  <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-300 dark:border-zinc-700 group-hover:border-amber-500 transition-colors duration-300 shadow-[0_0_0_4px_#fff] dark:shadow-[0_0_0_4px_#030712]"></div>
                  
                  <div className="bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 h-full shadow-sm hover:shadow-md dark:hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                    <h3 className="text-2xl font-black text-zinc-600 dark:text-white/10 absolute top-4 right-4 select-none">
                      {item.ano}
                    </h3>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 pr-20">{item.titulo}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    )
    
}