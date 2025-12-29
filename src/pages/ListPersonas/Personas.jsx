import { useNavigate } from "react-router-dom";

function Personas({ FilterAllPersonas }) {
  const navigate = useNavigate();

  return (
    <section >
      <div className="grid grid-cols-6 justify-items-center py-2.5 gap-5  ">
        {FilterAllPersonas.map((p) => (
          <div
            key={p.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/about/${p.id}`)}
          >
            <div className="relative h-64 w-44 bg-linear-to-t from-[#120000] via-[#1a0000] to-[#050000] text-[#e0e0e0] shadow-[inset_0_-30px_40px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 ease-out group-hover:shadow-[0_0_25px_rgba(120,0,0,0.6)]">
              {/* Vinheta */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none">
                {/* Personagem */}
                <img
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 h-48 transition-transform duration-700 ease-out group-hover:scale-105"
                  src={p.formas[0].img}
                  alt="Imagem-Persona"
                />
              </div>
              {/* Nome */}
              <div className="absolute bottom-0 w-full bg-black/80 py-2 text-center border-t border-[#300000]">
                <h2 className="tracking-wide text-sm font-semibold">
                  {p.formas[0].name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Personas;
