import { useNavigate, useParams } from "react-router-dom";
import { getAllPersons } from "../../api/persons";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import type { Personas } from "../../types/TypesProtagonist";

function Informations() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<number>(0);
  const [persons, setPersons] = useState<Personas[]>([]);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);

    async function loadPerson() {
      try {
        const data = await getAllPersons();
        setPersons(data);
      } catch (error) {
        console.error("Erro ao carregar personagem", error);
      }
    }
    
    loadPerson();
  }, []);

  const Person = persons.find((p) => p.id.toString() === id);
  const CurrentFormas = Person ? Person.formas[activeForm] : null;

  if (!Person) {
    return <p>Personagem não encontrado!</p>;
  }

  return (
    <main
      className={`w-full h-full  transition-all duration-1000 ease-in-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <section className="relative max-w-300 p-10 mx-auto">
        <div className="">
          <button
            onClick={() => {
              navigate(-1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1 text-[#aaa] hover:text-red-600 transition cursor-pointer"
          >
            <ChevronLeft size={18} />
            Retornar ao Arquivo
          </button>
          <h2 className="text-center text-[clamp(2.875rem,1.27vw+2.55rem,3.5rem)] wrap-break-word tracking-widest text-red-700 mt-4">
            {CurrentFormas?.name}
          </h2>
          <p className="text-center text-[#aaa] mt-2 mb-16 italic">
            {Person.sitacao}
          </p>
          <div className="px-2.5 mt-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="space-y-6 text-[#d0d0d0] leading-relaxed max-w-xl self-center">
              <p className="opacity-90">{Person.sobre01}</p>
              <p className="opacity-70">{Person.sobre02}</p>
              <p className="opacity-50">{Person.sobre03}</p>
            </div>
            <div className="w-px bg-linear-to-b from-transparent via-red-900/40 to-transparent" />

            <div className="relative px-6 py-6 flex flex-col h-full bg-linear-to-t from-[#200000] via-[#150000] to-[#0b0000]">
              <div className="flex justify-around">
                {Person.formas.map((formas, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveForm(index)}
                    className={`text-xs tracking-widest p-5 transition ${
                      activeForm === index
                        ? "text-red-600 border-b border-red-600"
                        : "text-[#777] hover:text-[#bbb]"
                    } `}
                  >
                    {formas.name}
                  </button>
                ))}
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img
                  className="h-96 object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                  src={CurrentFormas?.img}
                  alt="Personagem"
                />
              </div>
              <div className="px-2.5">
                <h2 className="text-center py-1.5 ">Sobre</h2>
                <div className="mt-6 border-t border-red-900/30 pt-4 text-sm text-[#ccc] space-y-2">
                  <p>
                    <span className="text-[#888]">Classe:</span> {Person.classe}
                  </p>
                  <p>
                    <span className="text-[#888]">Equipe:</span> {Person.equipe}
                  </p>
                  <p>
                    <span className="text-[#888]">Status:</span>{" "}
                    <span
                      className={`font-semibold ${
                        Person.status === "Vivo"
                          ? "text-red-600"
                          : "text-[#777]"
                      }`}
                    >
                      {Person.status}
                    </span>
                  </p>
                  {Person.interprete && (
                    <p>
                      <span className="text-[#888]">Intérprete:</span>{" "}
                      {Person.interprete}
                    </p>
                  )}
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
