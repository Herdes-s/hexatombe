import todosJuntos from "../assets/persona/aleatorias/todos-juntos.jpg";

import CardPersonagem from "./PersonagemCard/CardPersonagem";

function PersonagemCard() {
  return (
    <section className="relative mt-[100px]">
      <div className="relative w-[80%] mx-auto bg-linear-to-l from-[#000000] via-[#300000] to[#000000]">
        <div className="text-center py-5">
          <h2 className="text-[clamp(20px,6vw,80px)] pb-20px drop-shadow-[0_0_10px_#ff0000]">
            Personagens
          </h2>
          <img
            className="max-w-full h-auto mx-auto rounded-[20px_20px_100px_100px] mb-[250px]"
            src={todosJuntos}
            alt="todos-juntos"
          />
        </div>
        <div>
          <CardPersonagem />
        </div>
      </div>
    </section>
  );
}

export default PersonagemCard;
