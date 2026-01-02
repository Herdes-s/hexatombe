import todosJuntos from "../../assets/images/persona/aleatorias/todos-juntos.jpg";

import Cards from "./components/Cards";
import FadeIn from "../../hooks/FadeIn";

function PersonagemCard() {
  return (
    <section className="relative mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#120000] to-black opacity-80 pointer-events-none" />

      <div className="relative w-[85%] mx-auto">
        <div className="text-center py-5">
          <FadeIn>
            <h2 className="text-[clamp(24px,6vw,64px)] tracking-widest text-red-700 drop-shadow-[0_0_15px_#300000] mb-10">
              Personagens
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-[-120px] h-60 bg-linear-to-t from-[#300000]/80 to-transparent blur-2xl" />
              <img
                className="relative z-10 max-w-full mx-auto rounded-[40px] drop-shadow-[0_0_40px_#180000] border border-red-900/30 "
                src={todosJuntos}
                alt="todos-juntos"
              />
            </div>
          </FadeIn>
        </div>
        <div className="relative z-10">
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default PersonagemCard;
