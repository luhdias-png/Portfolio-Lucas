import lucasDias from "../assets/Lucas Dias.jpg"

export function About() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-5/12 relative group animate-fade-in-up">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl opacity-20 group-hover:opacity-60 blur transition duration-500"></div>
          <img src={lucasDias} alt="André Lucas" className="relative w-full h-80 sm:h-96 md:h-140 object-cover rounded-2xl"/>
        </div>

        <div className="w-full md:w-7/12 animate-fade-in-up delay-200">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mt-2 mb-6 md:mb-8">
            Sobre Mim
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-4 h-[15px] rounded-2xl bg-amber-500"></span> Minha trajetória
              </h3>
              <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                Comecei minha jornada na Área Patrimonial, onde desenvolvi uma forte base de responsabilidade e gestão. Essa experiência me ensinou a resolver problemas de forma analítica, habilidade que carrego até hoje na programação.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-4 h-[15px] rounded-2xl bg-amber-500"></span> A Transição
              </h3>
              <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                Movido pela curiosidade tecnológica, iniciei a graduação em Análise e Desenvolvimento de Sistemas e me formei no intensivo bootcamp Full Stack da Generation Brasil, onde a paixão por criar software tomou conta da minha carreira.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-4 h-[15px] rounded-2xl bg-amber-500"></span> Hoje
              </h3>
              <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                Atuo como Desenvolvedor Full Stack, construindo APIs robustas com NestJS/Node.js e interfaces dinâmicas com React e Tailwind. Meu foco é sempre entregar código limpo, testável e soluções que impactam positivamente os negócios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}