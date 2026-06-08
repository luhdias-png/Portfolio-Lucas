import './App.css'
import fundoHero from "./assets/Hero_fundo.png"
import lucasHero from "./assets/Lucas_hero.png"
import lucas from "./assets/Lucas Dias.jpg"

function App() {
  const tecnologias = [
    "React",
    "NestJs",
    "TypeScript",
    "Tailwind",
    "Python"
  ];

  const repetir = 10;

  return (
    <>
      <header className="relative flex w-full h-160 bg-zinc-950 overflow-hidden">
  <img
    src={fundoHero}
    alt="fundo hero"
    className="w-full h-full object-fix opacity-45"
  />

  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/90 to-transparent" />

  <div className="absolute inset-0 pointer-events-none opacity-70">
    <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
      <path id="motionPath"
        d="M1000 -400 L200 700"
      />

      <circle className="light-dot" cx="-400" cy="430" r="10" fill="#fff7f7">
        <animate attributeName="l" values="4;8;4" dur="8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="8s" repeatCount="indefinite" />
        <animateMotion dur="2s" repeatCount="indefinite">
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </circle>

      <circle className="light-dot" cx="-180" cy="420" r="5" fill="#fff7f7">
        <animate attributeName="l" values="4;8;4" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        <animateMotion dur="9s" begin="1s" repeatCount="indefinite">
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </circle>

      <circle className="light-dot" cx="60" cy="580" r="5" fill="#fff7f7">
        <animate attributeName="r" values="4;9;4" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
        <animateMotion dur="10s" begin="2s" repeatCount="indefinite">
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </circle>

      <circle className="light-dot" cx="620" cy="330" r="2" fill="#fff7f7">
        <animate attributeName="r" values="4;7;4" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
        <animateMotion dur="7.5s" begin="0.5s" repeatCount="indefinite">
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </circle>

      <circle className="light-dot" cx="180" cy="410" r="2" fill="#fff7f7">
        <animate attributeName="r" values="6;12;6" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
        <animateMotion dur="11s" begin="1.2s" repeatCount="indefinite">
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </circle>

      <circle className="light-dot" cx="1160" cy="300" r="5" fill="#fff7f7">
        <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
        <animateMotion dur="8.8s" begin="0.7s" repeatCount="indefinite">
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </circle>

      <circle className="light-dot" cx="1360" cy="300" r="2" fill="#fff7f7">
        <animate attributeName="r" values="6;11;6" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
        <animateMotion dur="9.5s" begin="1.5s" repeatCount="indefinite">
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </circle>
    </svg>
  </div>


<div className="absolute inset-0 flex items-center justify-around px-20">
  <div className="text-white">
    <p className="text-4xl opacity-0 animate-fade-left">Olá, sou</p>
    <h1 className="text-7xl font-bold opacity-0 animate-fade-left delay-200">André Lucas</h1>
    <h2 className="text-5xl text-zinc-300 opacity-0 animate-fade-left delay-400">
      Desenvolvedor <span className=' text-amber-500'>Fullstack</span>
    </h2>
    <p className="text-xl text-zinc-400 max-w-2xl opacity-0 animate-fade-up delay-600">
      Desenvolvendo aplicações web com React, TypeScript, Node.js e NestJS.
    </p>
    <div className='text-xl font-semibold flex gap-8 mt-2 items-center opacity-0 animate-fade-left delay-600'>
      <a href="http://" target="_blank" rel="noopener noreferrer" className="group relative inline-flex
        items-center gap-2 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full">Linkedin
        <span className="material-symbols-outlined transition-transform duration-300 group-hover:-rotate-45">
          arrow_forward</span>
      </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="group relative inline-flex
        items-center gap-2 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full">Github
        <span className="material-symbols-outlined transition-transform duration-300 group-hover:-rotate-45">
          arrow_forward</span>
      </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="group relative inline-flex
        items-center gap-2 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full">Curriculo
        <span className="material-symbols-outlined transition-transform duration-300 group-hover:-rotate-45">
          arrow_forward</span>
      </a>
    </div>
  </div>


  <div className="opacity-0 animate-fade-right delay-400">
    <img src={lucasHero} alt="Lucas hero" className="w-100 h-auto rounded-full opacity-60 hover:opacity-100 hover:scale-102 transition-all duration-500"
    />
  </div>
</div>
</header>
<div className="overflow-hidden h-10 flex items-center bg-[#040a17]">
  <div className="marquee-track">
    {Array.from({length: repetir}).map((_,i)=>(
      <span key={i} className='px-1 whitespace-nowrap text-white font-semibold text-2xl'>{tecnologias.join(" ")}</span>
    ))}
  </div>
</div>

<article className="w-full bg-[#091019] px-80 py-5">
  <p className="mb-5 mt-10 text-start font-semibold text-6xl text-white">
    Sobre mim
  </p>

  <section className="mx-auto flex max-w-7xl flex-col items-center gap-30 rounded-3xl md:flex-row">
  <div className="relative w-fit rounded-2xl p-1 overflow-hidden">
  <div className="absolute inset-[-50%] animate-border-spin bg-conic from-amber-500 to-[#091019] via-amber-500" />

  <img src={lucas} alt="Foto de André Lucas" className="relative h-100 w-90 rounded-2xl object-cover bg-zinc-950"/>
  </div>
    <div className="text-center md:text-left">
      <h3 className="mb-4 text-2xl font-bold text-amber-500">
        Minha trajetória
      </h3>

      <p className="max-w-2xl text-zinc-300 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius nihil,
        ex praesentium modi aspernatur cum impedit a quam saepe dicta quos
        deleniti voluptatem inventore sed quasi obcaecati. Voluptatem, vitae?
      </p>
      <hr className='text-white/20 mt-4'/>
      <h3 className="mt-4 mb-4 text-2xl font-bold text-amber-500">
        Minha transição
      </h3>

      <p className="max-w-2xl text-zinc-300 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius nihil,
        ex praesentium modi aspernatur cum impedit a quam saepe dicta quos
        deleniti voluptatem inventore sed quasi obcaecati. Voluptatem, vitae?
      </p>
      <hr className='text-white/20 mt-4'/>
      <h3 className="mt-4 mb-4 text-2xl font-bold text-amber-500">
        Hoje
      </h3>

      <p className="max-w-2xl text-zinc-300 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius nihil,
        ex praesentium modi aspernatur cum impedit a quam saepe dicta quos
        deleniti voluptatem inventore sed quasi obcaecati. Voluptatem, vitae?
      </p>
      
    </div>
  </section>
</article>

    </>
  )
}

export default App;
