import { useNavigate, useParams } from "react-router-dom";
import AllPersonas from "../../data/AllPersonas";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";

function Informations() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  const Personage = AllPersonas.find((p) => p.id.toString() === id);

  if (!Personage) {
    return <p>Personagem não encontrado!</p>;
  }

  return (
    <main
      className={`w-full h-full  transition-all duration-1000 ease-in-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <section className="relative w-[85%] mx-auto mt-16 mb-24">
        <div className="">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-[#aaa] hover:text-red-600 transition cursor-pointer"
          >
            <ChevronLeft size={18} />
            Retornar ao Arquivo
          </button>
          <h2 className="text-center text-[3.5rem] tracking-widest text-red-700 mt-4">
            {Personage.formas[0].name}
          </h2>
          <p className="text-center text-[#aaa] mt-2 mb-16 italic">
            {Personage.sitacao}
          </p>
          <div className="px-2.5 mt-auto grid grid-cols-[1fr_auto_420px] gap-12 items-center">
            <div className="space-y-6 text-[#d0d0d0] leading-relaxed max-w-xl self-center">
              <p className="opacity-90">{Personage.sobre[0].sobre01}</p>
              <p className="opacity-70">{Personage.sobre[1].sobre02}</p>
              <p className="opacity-50">{Personage.sobre[2].sobre03}</p>
            </div>
            <div className="w-[1px] bg-gradient-to-b from-transparent via-red-900/40 to-transparent" />

            <div className="relative px-6 py-6 flex flex-col h-full bg-linear-to-t from-[#200000] via-[#150000] to-[#0b0000]">
              <div>
                <h2 className="text-center text-sm tracking-widest text-[#bbb] mb-4">
                  {Personage.formas[1].name}
                </h2>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img
                  className="h-[24rem] object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                  src={Personage.formas[0].img}
                  alt="Personagem"
                />
              </div>
              <div className="px-2.5">
                <h2 className="text-center py-1.5 ">Sobre</h2>
                <div className="mt-6 border-t border-red-900/30 pt-4 text-sm text-[#ccc] space-y-2">
                  <p>
                    <span className="text-[#888]">Classe:</span>{" "}
                    {Personage.classe}
                  </p>
                  <p>
                    <span className="text-[#888]">Equipe:</span>{" "}
                    {Personage.equipe}
                  </p>
                  <p>
                    <span className="text-[#888]">Status:</span>{" "}
                    <span
                      className={`font-semibold ${
                        Personage.status === "Vivo"
                          ? "text-red-600"
                          : "text-[#777]"
                      }`}
                    >
                      {Personage.status}
                    </span>
                  </p>
                  <p>
                    <span className="text-[#888]">Intérprete:</span>{" "}
                    {Personage.interprete}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Informations;
