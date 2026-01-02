import sacrificio from "../../assets/images/Simbulos/sacrificio.png";
import sangue from "../../assets/images/Simbulos/sangue.png";
import fundoSection from "../../assets/logos/fundo-section-4.jpg";
import ilustracaoCultista from "../../assets/logos/cultista02.png";
import logoHexaBlack from "../../assets/logos/logo-hexa-black.png";
import { useEffect, useState } from "react";
import FadeIn from "../../hooks/FadeIn";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${fundoSection})` }}
      className="w-full bg-no-repeat bg-center bg-cover pb-8 rounded-b-[50px] relative overflow-hidden "
    >
      <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_120px_#000] z-0" />
      <div
        className={`w-[80%] mx-auto relative transition-all  duration-1000 ease-in-out ${
          show ? "translate-y-0 opacity-100 " : "-translate-y-10 opacity-0"
        }`}
      >
        {/* LOGO */}
        <div className="w-full flex items-center justify-center relative py-6 ">
          <h1 className="sr-only">Hexatombe</h1>
          <div className="drop-shadow-[0_0_15px_#ff0000] w-[40%] flex justify-center">
            <FadeIn>
              <img
                className="w-[90%] "
                src={logoHexaBlack}
                alt="Logo Hexatombe"
              />
            </FadeIn>
          </div>
        </div>
        {/* TEXTO + IMAGEM */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
          <div className="w-full md:w-[60%] text-justify text-[clamp(10px,2vw,16px)] drop-shadow-[0_5px_5px_#000000] flex flex-col gap-4 text-[#d4d4d4] relative z-10">
            <FadeIn>
              <p className="opacity-[0.9] leading-relaxed tracking-wide">
                Ninguém sabe ao certo quando começou, mas todos sabem que o
                Hexatombe está cada dia mais perto. Os sinais já são vistos por
                quem tem sensibilidade suficiente: o ar fica pesado, as sombras
                parecem se mover sozinhas e sussurros começam a surgir onde
                deveria haver silêncio.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="opacity-[0.8] leading-relaxed tracking-wide">
                Os estudiosos do paranormal descrevem o Hexatombe como o fim da
                barreira, o momento em que o Outro Lado finalmente atravessa sem
                encontrar resistência. Alguns dizem que será como uma aurora
                negra rasgando o céu. Outros afirmam que o mundo simplesmente
                acordará diferente, tomado por fenômenos impossíveis.
              </p>
            </FadeIn>
          </div>
          <div className="w-full md:w-[40%] flex justify-center relative ">
            <FadeIn>
              <img
                loading="lazy"
                decoding="async"
                className="w-[70%] rounded-xl mx-auto drop-shadow-2xl drop-shadow-black"
                src={ilustracaoCultista}
                alt="Ilustração: cultista"
              />
            </FadeIn>
            {/* ELEMENTOS DE FUNDO (SANGUE + SACRIFÍCIO) */}
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="absolute z-0 pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] animate-[orbitar_15s_linear_infinite] drop-shadow-[0_0_5px_#000000]"
                src={sacrificio}
                alt="Símbolo de sacrifício"
              />
              <img
                loading="lazy"
                decoding="async"
                className="absolute z-0 pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] animate-[orbitar_15s_linear_-7.5s_infinite] drop-shadow-[0_0_5px_#000000]"
                src={sangue}
                alt="Ritual de sangue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
