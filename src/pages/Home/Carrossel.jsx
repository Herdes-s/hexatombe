import hexa01 from "../../assets/images/persona/carrosel/hexa-1.jpg";
import hexa02 from "../../assets/images/persona/carrosel/hexa-2.jpg";
import hexa03 from "../../assets/images/persona/carrosel/hexa-3.jpg";
import hexa04 from "../../assets/images/persona/carrosel/hexa-4.jpg";
import hexa05 from "../../assets/images/persona/carrosel/hexa-5.jpg";
import hexa06 from "../../assets/images/persona/carrosel/hexa-6.jpg";
import hexa07 from "../../assets/images/persona/carrosel/hexa-7.jpg";
import hexa08 from "../../assets/images/persona/carrosel/hexa-8.jpg";
import hexa09 from "../../assets/images/persona/carrosel/hexa-9.jpg";
import hexa10 from "../../assets/images/persona/carrosel/hexa-10.jpg";
import hexa11 from "../../assets/images/persona/carrosel/hexa-11.jpg";
import { useEffect, useState } from "react";
import FadeIn from "../../hooks/FadeIn";

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
    }, 6500);
    return () => clearInterval(interval);
  }, [carrossel.length]);

  return (
    <section className="w-full h-[520px] relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#180000] to-black opacity-90 z-0" />
      <div className="max-w-[85%] h-full mx-auto relative z-10 flex items-center justify-center">
        <div className="flex items-center justify-center gap-10 absolute inset-0">
          <FadeIn key={index}>
            <img
              className="max-w-full max-h-[400px] rounded-xl drop-shadow-[0_0_40px_#180000] transition-all duration-1000 ease-in-out animate-[slowZoom_5s_linear_infinite] "
              src={carrossel[index]}
              alt="hexa-cenas"
            />
            <div className="absolute bottom-20 w-[60%] h-16 bg-black/60 blur-2xl rounded-full" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Carrossel;
