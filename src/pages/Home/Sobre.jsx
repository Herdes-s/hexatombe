import dalmoColosso from "../../assets/images/persona/background/dalmo-colosso.png";
import jonasAguiar from "../../assets/images/persona/background/jonas-aguiar-noturno.png";
import kemi from "../../assets/images/persona/background/kemi.png";
import jaeYoon from "../../assets/images/persona/background/jae.png";
import labirinto from "../../assets/images/persona/background/labirinto.png";
import { useEffect, useState } from "react";

function Sobre() {
  const [index, setIndex] = useState(0);
  const fotos = [dalmoColosso, jonasAguiar, kemi, jaeYoon, labirinto];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [fotos.length]);

  return (
    <section className="text-justify relative">
      <div className="w-[80%] mx-auto py-100px">
        <div>
          <img
            className="absolute top-[20%] right-[10%] h-[340px] drop-shadow-[0_0_15px_#300000] opacity-50"
            src={fotos[index]}
            alt="Fundo: Dalmo — Colosso"
          />
        </div>
        <div>
          <h2 className="py-[50px] text-center drop-shadow-[0_0_15px_#ff0000] text-white text-[25px]">
            O que é o Hexatombe?
          </h2>
          <p className="text-[clamp(10px,2vw,20px)] drop-shadow-[0_0_15px_#ff0000] text-white">
            A Hexatombe… é difícil de explicar pra quem nunca sentiu ela de
            perto. Não é só um ritual, nem só um massacre — é uma brecha. Quando
            a Hexatombe acontece, o véu entre o nosso mundo e o Outro Lado se
            rasga, e tudo que devia ficar escondido começa a atravessar. O ar
            fica pesado, o tempo parece falhar, e coisas que não têm nome
            começam a olhar de volta pra você. Alguns cultos fazem isso de
            propósito, buscando poder. Outros tentam impedir, mas quase sempre
            tarde demais. A verdade é simples: quando você vê uma Hexatombe se
            formando… você entende que nada que conhece é seguro, e que a
            realidade não é tão sólida quanto parece.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
