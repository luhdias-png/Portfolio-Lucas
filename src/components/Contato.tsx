import { MessageCircle } from "lucide-react";

export function Contato(){

  const mensagem = "Olá André, gostaria de falar com você."
    return(
          <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-zinc-500/5 dark:bg-[#030712]"></div>
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
        Pronto para criar algo incrível?
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
        Estou sempre aberto a novas oportunidades, desafios e projetos freelancers. Sinta-se à vontade para me mandar uma mensagem pelas redes abaixo!
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href={`https://wa.me/5511958491873?text=${mensagem}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-300 hover:-translate-y-1 border border-zinc-700">
          <MessageCircle size={24} className="text-green-500" />
          Me chame no WhatsApp
        </a>
      </div>
    </div>
  </section>
    )
}