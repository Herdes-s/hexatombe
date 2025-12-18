import logoHexa from "../../assets/logos/logo-hexa-white.png";

function Header() {
  return (
    <header
      className="bg-[#252b24] relative z-10"
    >
      <div className="flex items-center justify-between px-[10%] ">
        <div className="w-[15%] h-auto text-center">
          <img
            src={logoHexa}
            alt="Ordem Paranormal — logo"
            className="w-full h-auto hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]"
          />
        </div>

        <nav>
          <ul className="flex gap-5 list-none text-[clamp(10px,2vw,18px)]">
            <li>
              <a
                href="#"
                className=" no-underline text-white font-bold hover:text-red-500 hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#personagem"
                className=" no-underline text-white font-bold hover:text-red-500 hover:drop-shadow-[0_0_10px] drop-shadow-red-600"
              >
                Persona
              </a>
            </li>
            <li>
              <a
                href="#elenco"
                className=" no-underline text-white font-bold hover:text-red-500 hover:drop-shadow-[0_0_10px] drop-shadow-red-600"
              >
                Elenco
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
