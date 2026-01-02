import { useState } from "react";
import personages from "../../../data/Protagonists";
import FadeIn from "../../../hooks/FadeIn";

function Cards() {
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
    <section
      id="personagem"
      className="relative w-full py-10 text-[#ddd]"
    >
      <div className="flex gap-8 w-[90%] mx-auto">

        {/* MINIATURAS */}
        <FadeIn>
          <div className="flex flex-col gap-2">
            {personages.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setForma(0);
                }}
                className={`transition ${
                  i === index
                    ? "scale-110 drop-shadow-[0_0_12px_red]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={p.mini}
                  alt={p.name}
                  className="w-16 h-16 rounded-full border border-red-900/40"
                />
              </button>
            ))}
          </div>
        </FadeIn>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex-1 space-y-8">

          {/* TÍTULO */}
          <FadeIn>
            <div className="text-center space-y-2">
              <h2 className="text-[clamp(24px,6vw,64px)] tracking-widest text-red-700 drop-shadow-[0_0_15px_#300000]">
                {personages[index].formas[forma].name}
              </h2>
              <p className="text-[#bbb] text-sm max-w-2xl mx-auto">
                {personages[index].text}
              </p>
            </div>
          </FadeIn>

          {/* IMAGEM + HABILIDADES */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-10 items-center">

              {/* IMAGEM */}
              <div className="relative w-full lg:w-[40%] flex justify-center">
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent blur-xl rounded-full" />
                <img
                  src={personages[index].formas[forma].img}
                  alt="personagem"
                  className="relative z-10 w-full max-w-md drop-shadow-[0_0_25px_#300000]"
                />
              </div>

              {/* HABILIDADES */}
              <div className="w-full lg:w-[60%] space-y-6">

                {/* GOLPES */}
                {golpes.length > 0 && (
                  <div>
                    <h4 className="text-red-600 tracking-widest text-sm mb-3">
                      HABILIDADES
                    </h4>

                    <div className="space-y-3">
                      {golpes.map((golpe) => (
                        <div
                          key={golpe.id}
                          className="border border-red-900/40 bg-[#0a0000]"
                        >
                          <div className="flex justify-between items-center px-3 py-2">
                            <h3 className="text-red-500 tracking-wide">
                              {golpe.name}
                            </h3>
                            <span className="text-[#aaa] text-sm">
                              {golpe.pd} 
                            </span>
                          </div>
                          <div className="px-3 py-2 text-sm text-[#ccc] bg-black/70">
                            {golpe.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ARMAS */}
                {armas.length > 0 && (
                  <div>
                    <h4 className="text-red-600 tracking-widest text-sm mb-3">
                      ARMAS
                    </h4>

                    <div className="space-y-3">
                      {armas.map((arma) => (
                        <div
                          key={arma.id}
                          className="border border-red-900/40 bg-[#120000]"
                        >
                          <div className="px-3 py-2 text-red-500">
                            {arma.arma}
                          </div>
                          <div className="px-3 py-2 text-sm text-[#ccc] bg-black/70">
                            {arma.descArma}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>

          {/* FORMAS */}
          <FadeIn>
            <div className="flex justify-center gap-3 py-4 bg-linear-to-r from-transparent via-black/80 to-transparent">
              {personages[index].formas.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setForma(i)}
                  className={`transition ${
                    i === forma
                      ? "scale-110 drop-shadow-[0_0_12px_red]"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={f.icon}
                    alt={f.name}
                    className="w-14 h-14 rounded-full border border-red-900/40"
                  />
                </button>
              ))}
            </div>
          </FadeIn>

          {/* ABOUT */}
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="bg-[#12000080] px-4 py-3 text-sm drop-shadow-[0_0_15px_#180000]">
                {personages[index].about}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Cards;
