import DADOS from "./json/dados.json"

export function Skills(){
    return(
        <section className="py-14 bg-zinc-50 dark:bg-zinc-950/50 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 animate-fade-in-up">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mt-2">
          Tecnologias que domino
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {Object.entries({
          'Front-end': DADOS.skills.frontend,
          'Back-end': DADOS.skills.backend,
          'Ferramentas': DADOS.skills.ferramentas
        }).map(([categoria, listaSkills], catIdx) => (
          <div key={categoria} className="bg-white dark:bg-zinc-900/40 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm animate-fade-in-up" style={{ animationDelay: `${(catIdx + 1) * 200}ms` }}>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-4">{categoria}</h3>
            <div className="grid grid-cols-2 gap-6">
              {listaSkills.map((t) => (
                <div key={t.nome} className="flex flex-col items-center justify-center gap-3 group">
                  <div className="w-16 h-16 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-500/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <img src={t.icone} alt={`Ícone ${t.nome}`} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    {t.nome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    )
}