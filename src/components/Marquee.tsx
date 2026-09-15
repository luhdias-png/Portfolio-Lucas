import DADOS from "./json/dados.json"

export function Marquee() {
    return(
        <div className="border-y border-zinc-600 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/50 py-4 overflow-hidden relative flex md:block hidden">
    <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-zinc-500 dark:from-[#030712] to-transparent z-10 pointer-events-none"></div>
    <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-zinc-500 dark:from-[#030712] to-transparent z-10 pointer-events-none"></div>
    
    <div className="flex w-[200%] animate-[marquee_30s_linear_infinite]">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex w-1/2 justify-around items-center">
          {DADOS.tecnologiasMarquee.map((tech, index) => (
            <span key={index} className="text-base sm:text-xl font-bold text-from-[#030712] dark:text-zinc-300 uppercase tracking-widest mx-2 sm:mx-4">
              {tech}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
    )
}