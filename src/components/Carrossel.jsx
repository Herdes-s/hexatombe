import hexa01 from "../assets/persona/carrosel/hexa-1.jpg";
import hexa02 from "../assets/persona/carrosel/hexa-2.jpg";
import hexa03 from "../assets/persona/carrosel/hexa-3.jpg";
import hexa04 from "../assets/persona/carrosel/hexa-4.jpg";
import hexa05 from "../assets/persona/carrosel/hexa-5.jpg";
import hexa06 from "../assets/persona/carrosel/hexa-6.jpg";
import hexa07 from "../assets/persona/carrosel/hexa-7.jpg";
import hexa08 from "../assets/persona/carrosel/hexa-8.jpg";
import hexa09 from "../assets/persona/carrosel/hexa-9.jpg";
import hexa10 from "../assets/persona/carrosel/hexa-10.jpg";
import hexa11 from "../assets/persona/carrosel/hexa-11.jpg";
import { useEffect, useState } from "react";

function Carrossel() {
  const [index, setIndex] = useState(0);
  const carrossel = [
    hexa01,
    hexa02,
    hexa03,
    hexa04,
    hexa05,
    hexa06,
    hexa07,
    hexa08,
    hexa09,
    hexa10,
    hexa11,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carrossel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carrossel.length]);

  return (
    <section className="w-full h-[500px] bg-linear-to-b from-[#000000] via-[#300000] to-[#000000] relative">
      <div className="max-w-[80%] h-full mx-auto relative">
        <div className="flex items-center justify-center gap-10 absolute inset-0">
          <img
            className="m-auto max-w-full max-h-[380px]  drop-shadow-[0_0_20px_#300000] rounded-2xl "
            src={carrossel[index]}
            alt="hexa-cenas"
          />
        </div>
      </div>
    </section>
  );
}

export default Carrossel;
