import sacrificio from "../assets/outros/sacrificio.png";
import sangue from "../assets/outros/sangue.png";
import fundoSection from "../assets/logos/fundo-section-1.png";
import ilustracaoCultista from "../assets/logos/cultista.jpg";
import logoHexaBlack from "../assets/logos/logo-hexa-black.png";

function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${fundoSection})` }}
      className="w-full bg-no-repeat bg-center bg-cover pb-8 rounded-b-[50px] relative overflow-hidden"
    >
      <div className="w-[80%] mx-auto relative z-10">
        {/* ELEMENTOS DE FUNDO (SANGUE + SACRIFÍCIO) */}
        <div className="elements pointer-events-none">
          <img
            className="absolute top-[27%] right-[11%] origin-[150px_center] w-[100px] opacity-60 animate-pulse"
            src={sacrificio}
            alt="Símbolo de sacrifício"
          />
          <img
            className="absolute top-[47%] right-[32%] origin-[150px_center] w-[100px] opacity-60 animate-pulse delay-200"
            src={sangue}
            alt="Ritual de sangue"
          />
        </div>

        {/* LOGO */}
        <div className="w-full flex items-center justify-center relative py-6">
          <h1 className="drop-shadow-[0_0_15px_#ff0000] w-[40%] flex justify-center">
            <img
              className="w-[90%]"
              src={logoHexaBlack}
              alt="Logo Hexatombe — preto"
            />
          </h1>
        </div>

        {/* TEXTO + IMAGEM */}
        <div className="flex w-full justify-center items-center gap-8">
          <div className="w-[60%] text-justify text-[clamp(10px,2vw,20px)] drop-shadow-[0_0_15px_#ff0000] flex flex-col gap-4 text-white">
            <p>
              Ninguém sabe ao certo quando começou, mas todos sabem que o
              Hexatombe está cada dia mais perto. Os sinais já são vistos por
              quem tem sensibilidade suficiente: o ar fica pesado, as sombras
              parecem se mover sozinhas e sussurros começam a surgir onde
              deveria haver silêncio.
            </p>

            <p>
              Os estudiosos do paranormal descrevem o Hexatombe como o fim da
              barreira, o momento em que o Outro Lado finalmente atravessa sem
              encontrar resistência. Alguns dizem que será como uma aurora negra
              rasgando o céu. Outros afirmam que o mundo simplesmente acordará
              diferente, tomado por fenômenos impossíveis.
            </p>
          </div>

          <div className="w-[40%] flex justify-center relative">
            <img
              className="w-[80%] rounded-xl shadow-[0_0_20px_#400000]"
              src={ilustracaoCultista}
              alt="Ilustração: cultista"
            />
          </div>
        </div>

        {/* BOTÃO */}
        <div className="w-full mt-8 m-2.5">
          <button className="px-6 py-3 font-bold text-[18px] bg-[#800000] text-white rounded-xl cursor-pointer transition-all duration-200 hover:drop-shadow-[0_0_15px_#ff0000] hover:scale-105">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
