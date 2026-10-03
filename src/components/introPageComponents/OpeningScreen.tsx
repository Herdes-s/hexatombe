import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logoOrdem.png";
import temporadas from "../../data/Seasons";
import lab from "../../assets/images/Simbulos/lab.jpg";
import { useEffect, useState } from "react";
import type { Season } from "../../types/TypesProtagonist";
import { getAllSeasons } from "../../api/persons";

export default function OpeningScreen() {
  const navigate = useNavigate();
  const [seasons, setSeasons] = useState<Season[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllSeasons();
        setSeasons(data);
      } catch (error) {
        console.error("Erro ao buscar todas as Temporadas:", error);
      }
    }

    load();
  }, []);

  if (seasons.length === 0) {
    return (
      <section className="h-screen w-screen relative bg-zinc-950 overflow-hidden whitespace-nowrap">
        <div className={`animate-[mecher_50s_linear_-7.5s_infinite] absolute top-0 left-0 w-full h-full z-1 opacity-10 `}
          style={{
            backgroundImage: `url(${lab})`,
          }}
        />
        <h2 className="text-3xl font- font-bold text-white text-center mt-10">
          Sessões não encontradas
        </h2>
      </section>
    );
  }

  return (
    <section className="h-screen w-screen relative bg-zinc-950 overflow-hidden whitespace-nowrap">
      <div
        className={`animate-[mecher_50s_linear_-7.5s_infinite] absolute top-0 left-0 w-full h-full z-1 opacity-10 `}
        style={{
          backgroundImage: `url(${lab})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "cover",
          backgroundPosition: "0 0",
        }}
      />
      <div className="max-w-300 p-10 m-auto z-1 relative">
        <div className="flex justify-center">
          <img src={logo} alt="logo ordem paranormal" className="h-35" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-20 justify-center items-center">
          {seasons.map((t, i) => (
            <div
              key={i}
              className=" flex flex-col gap-2 cursor-pointer group items-center "
              onClick={() => navigate(`/${t.link}`)}
            >
              <h3 className="text-2xl font-bold text-white text-center transition-all duration-300 group-hover:scale-110 border-2 border-transparent group-hover:border-white p-2 rounded-md">
                Entrar em Hexatombe
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
