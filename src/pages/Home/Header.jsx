import { useEffect, useState } from "react";
import logoOrdem from "../../assets/logos/logoOrdem.png";

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <header className="bg-linear-to-b from-black via-[#120000] to-transparent relative z-20 border-b border-red-900/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] bg-black/70 backdrop-blur-sm">
      <div
        className={`flex items-center justify-between px-[10%] transition-all  duration-700 ease-in-out ${
          show ? "translate-y-0 " : "-translate-y-10"
        }`}
      >
        <div className="w-[15%] h-auto text-center">
          <img
            src={logoOrdem}
            alt="Ordem Paranormal — logo"
            className="w-full h-auto hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          />
        </div>

        <nav>
          <ul className="flex gap-5 list-none text-[clamp(10px,2vw,18px)]">
            <li>
              <a
                href="#"
                className="relative font-bold text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#personagem"
                className="relative font-bold text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full"
              >
                Persona
              </a>
            </li>
            <li>
              <a
                href="#elenco"
                className="relative font-bold text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:text-red-600 hover:after:w-full"
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
