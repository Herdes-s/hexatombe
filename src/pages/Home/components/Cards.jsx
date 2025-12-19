import { useState } from "react";
import personages from "../../../data/Protagonists";

function CardPersonagem() {
  const [index, setIndex] = useState(0);
  const [forma, setForma] = useState(0);

  const golpes = [1, 2, 3, 4]
    .map((n) => ({
      name: personages[index][`nameGolp${n}`],
      pd: personages[index][`PDGolp${n}`],
      desc: personages[index][`descriptionGolp${n}`],
      id: n,
    }))
    .filter((g) => g.name);

  const armas = [1, 2]
    .map((a) => ({
      arma: personages[index][`arma${a}`],
      descArma: personages[index][`descArma${a}`],
      id: a,
    }))
    .filter((b) => b.arma);

  return (
    <div className="relative w-full text-white py-5 flex" id="personagem">
      {/* LADO ESQUERDO → Texto */}
      <div className=" flex flex-col max-w-16 max-h-16 w-auto h-auto gap-1.5 ">
        {personages.map((p, i) => (
          <button
            key={i}
            className={`thumb-btn ${
              i === index
                ? "active rounded-full scale-110 outline-red-600 outline-1 my-1.5 drop-shadow-[0_0_10px_red] "
                : ""
            }`}
            onClick={() => setIndex(i)}
          >
            <img className="w-16 h-16 rounded-full" src={p.mini} alt={p.name} />
          </button>
        ))}
      </div>
      <div className="max-w-[90%]">
        <div>
          <h2 className=" text-center drop-shadow-[0_0_10px_red] text-black text-[clamp(20px,6vw,80px)]">
            {personages[index].formas[forma].name}
          </h2>
          <p className="text-center shadow-[-5px_0_10px_black] text-[clamp(10px,2vw,25px)] ">
            {personages[index].text}
          </p>
        </div>
        <div className="flex">
          {/* outra imagem */}
          <div className="w-[40%] m-auto animate-[motion-top-bottom_15s_ease-in-out_infinite]">
            {/* IMAGEM DO PERSONAGEM */}
            <img
              className="w-full h-auto drop-shadow-[0_0_20px_#300000] "
              src={personages[index].formas[forma].img}
              alt="personagem"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-[50%] justify-center items-center animate-motion-top-bottom ">
            {/* GOLPES */}
            {golpes.map((golpe) => (
              <div
                key={golpe.id}
                className="w-full drop-shadow-[0_0_20px_#300000]"
              >
                <div className="bg-white text-black flex justify-between items-center py-[3px] px-[5px]  text-[clamp(10px,2vw,20px)]">
                  <h3>{golpe.name}</h3>
                  <p>{golpe.pd}</p>
                </div>
                <div className="bg-black py-1 px-2  text-[clamp(8px,2vw,16px)]">
                  <p>{golpe.desc}</p>
                </div>
              </div>
            ))}
            {/* ARMAS */}
            {armas.map((arma) => (
              <div
                key={arma.id}
                className="w-full drop-shadow-[0_0_20px_#300000]"
              >
                <div className="bg-red-700 text-black flex justify-between items-center py-[3px] px-[5px]  text-[clamp(10px,2vw,20px)]">
                  <h3>{arma.arma}</h3>
                </div>
                <div className="bg-black py-1 px-2  text-[clamp(8px,2vw,16px)]">
                  <p>{arma.descArma}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-linear-to-l from-transparent via-[#000000] to-transparent py-1">
          <div className="flex w-auto h-auto gap-1.5 items-center justify-center">
            {personages[index].formas.map((f, i) => (
              <button
                key={i}
                onClick={() => {
                  setForma(i);
                }}
                className={` ${
                  i === forma
                    ? "rounded-full scale-110 outline-red-600 outline-1 my-1.5 drop-shadow-[0_0_10px_red] "
                    : ""
                }`}
              >
                <img
                  className="w-16 h-16 rounded-full"
                  src={f.img}
                  alt={f.name}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center items-center py-5">
          <div className="w-full flex justify rounded-[10px] drop-shadow-[0_0_20px_#300000]">
            <p className="bg-black py-1.5 px-2.5 text-[clamp(10px,2vw,16px)]">
              {personages[index].about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPersonagem;
