import { useEffect, useState } from "react";
// import AllPersonas from "../../data/AllPersonas";
import { getAllPersons, getPersonForms, getPersons } from "../../api/persons";
import Header from "../../components/characterListComponents/Header";
import Personas from "../../components/characterListComponents/Personas";
import BottomNav from "../../components/homePageComponents/BottonHeader/BottomNav";
import type { Cast, formas } from "../../types/TypesProtagonist";

function ListPersonas() {
  const [search, setSearch] = useState<string>("");
  const [persons, setPersons] = useState<Cast[]>([]);
  const [ocupacao, setOcupacao] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);

    async function carregarPersons() {
      try {
        const data = await getAllPersons();
        setPersons(data);
      } catch (error) {
        console.error("Erro ao carregar personagens:", error);
      }
    }

    carregarPersons();
  }, []);

  if (!persons) {
    return <p>Carregando...</p>;
  }

  const FilterAllPersonas: Cast[] = persons.filter((p) => {
    const MatchName = p.formas[0]?.name
      .toLowerCase()
      .includes(search.toLocaleLowerCase());

    const MatchOcupation =
      !ocupacao ||
      (Array.isArray(p.ocupacao)
        ? p.ocupacao.includes(ocupacao)
        : p.ocupacao === ocupacao);

    return MatchName && MatchOcupation;
  });

  return (
    <>
      {/* CONTAINER DO MUNDO */}
      <section className="relative min-h-screen overflow-hidden pb-16">
        {/* BACKGROUND AAA */}
        <div className="absolute inset-0 -z-10">
          {/* Base escura */}
          <div className="absolute inset-0 bg-[#050000]" />
          {/* Mancha vermelha difusa */}
          <div
            className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_30%,rgba(120,0,0,0.35),transparent_70%)]
          "
          />
          {/* Vinheta */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div
          className={` duration-1000 transition-all ease-in-out ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          <Header
            search={search}
            setSearch={setSearch}
            ocupacao={ocupacao}
            setOcupacao={setOcupacao}
          />
          <Personas FilterAllPersonas={FilterAllPersonas} />
        </div>
      </section>
      <BottomNav />
    </>
  );
}

export default ListPersonas;
