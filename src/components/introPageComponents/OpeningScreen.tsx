import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logoOrdem.png";
import temporadas from "../../data/Temporadas";
import lab from "../../assets/images/Simbulos/lab.jpg";

export default function OpeningScreen() {
  const navigate = useNavigate();

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
          {temporadas.map((t, i) => (
            <div
              key={i}
              className=" flex flex-col gap-2 cursor-pointer group items-center "
              onClick={() => navigate(`/${t.link}`)}
            >
              <img
                src={t.logo}
                alt="logo"
                className="w-50 shadow-[0px_4px_8px_rgba(255,255,255,0.22)] group-hover:shadow-[0px_0px_16px_rgba(255,255,255,0.22)] group-hover:scale-105 group-hover:translate-y-2 transition-all ease-in-out"
              />
              <h3 className="group-hover:scale-95 group-hover:-translate-y-4 transition-all ease-in-out">
                {t.nome}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
