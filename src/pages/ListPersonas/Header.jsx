import logoHexa from "../../assets/logos/logo-hexa-white.png";

function Header() {
  return (
    <header className="bg-[#ff0000] relative z-10">
      <div className="flex items-center justify-between px-[10%] ">
        <div className="w-[15%] h-auto text-center">
          <img
            src={logoHexa}
            alt="Ordem Paranormal — logo"
            className="w-full h-auto hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]"
          />
        </div>
        <nav>
            <div className="bg-white text-red-600 py-1 px-2.5">
              <input className="outline-none" type="text" placeholder="Pesquisa!" />
            </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
