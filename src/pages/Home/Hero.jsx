import sacrificio from "../../assets/images/Simbulos/sacrificio.png";
import sangue from "../../assets/images/Simbulos/sangue.png";
import fundoSection from "../../assets/logos/fundo-section-2.png";
import ilustracaoCultista from "../../assets/logos/cultista.png";
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
      className="w-full bg-no-repeat bg-center bg-cover pb-8 rounded-b-[50px] relative overflow-hidden"
    >
      <div
        className={`w-[80%] mx-auto relative z-10 transition-all  duration-1000 ease-in-out ${
          show ? "translate-y-0 opacity-100 " : "-translate-y-10 opacity-0"
        }`}
      >
        {/* LOGO */}
        <div className="w-full flex items-center justify-center relative py-6">
          <h1 className="drop-shadow-[0_0_15px_#ff0000] w-[40%] flex justify-center">
            <FadeIn>
              <img
                className="w-[90%] "
                src={logoHexaBlack}
                alt="Logo Hexatombe — preto"
              />
            </FadeIn>
          </h1>
        </div>
        {/* TEXTO + IMAGEM */}
        <div className="flex w-full justify-center items-center gap-8">
          <div className="w-[60%] text-justify text-[clamp(10px,2vw,20px)] drop-shadow-[0_0_10px_#000000] flex flex-col gap-4 text-white ">
            <FadeIn>
              <p>
                Ninguém sabe ao certo quando começou, mas todos sabem que o
                Hexatombe está cada dia mais perto. Os sinais já são vistos por
                quem tem sensibilidade suficiente: o ar fica pesado, as sombras
                parecem se mover sozinhas e sussurros começam a surgir onde
                deveria haver silêncio.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                Os estudiosos do paranormal descrevem o Hexatombe como o fim da
                barreira, o momento em que o Outro Lado finalmente atravessa sem
                encontrar resistência. Alguns dizem que será como uma aurora
                negra rasgando o céu. Outros afirmam que o mundo simplesmente
                acordará diferente, tomado por fenômenos impossíveis.
              </p>
            </FadeIn>
          </div>
          <div className="w-[40%] flex justify-center relative ">
            <FadeIn>
              <img
                className="w-[80%] rounded-xl drop-shadow-[0_0_10px_#400000] border-b-[5px] border-zinc-800"
                src={ilustracaoCultista}
                alt="Ilustração: cultista"
              />
            </FadeIn>
            {/* ELEMENTOS DE FUNDO (SANGUE + SACRIFÍCIO) */}
            <div>
              <FadeIn>
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] animate-[orbitar_15s_linear_infinite] drop-shadow-[0_0_5px_#000000]"
                  src={sacrificio}
                  alt="Símbolo de sacrifício"
                />
              </FadeIn>
              <FadeIn>
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] animate-[orbitar_15s_linear_-7.5s_infinite] drop-shadow-[0_0_5px_#000000]"
                  src={sangue}
                  alt="Ritual de sangue"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
