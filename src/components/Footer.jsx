function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#eee] pt-[60px] px-5 pb-[25px] border-t-[#800000] relative">
      <div className="max-w-[1200px] m-auto flex justify-between gap-12 flex-wrap">
        <div>
          <h2 className="text-[#b10000] text-[clamp(20px,2vw,32px)]">HEXATOMBE</h2>
          <p className="mt-1.5 text-[#b9b9b9] text-[14px]">
            O sangue guia. O labirinto escolhe.
          </p>
        </div>
        <div>
          <h3 className="text-[#b10000] mb-2.5 text-[18px] ">Navegação</h3>
          <ul className="list-none ">
            <li className="list-none ">
              <a
                className="hover:text-[#ff0000] hover:drop-shadow-[0_0_5px_#ff0000] hover:pl-1"
                href="#"
              >
                Início
              </a>
            </li>
            <li className="list-none ">
              <a
                className="hover:text-[#ff0000] hover:drop-shadow-[0_0_5px_#ff0000] hover:pl-1"
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li className="list-none ">
              <a
                className="hover:text-[#ff0000] hover:drop-shadow-[0_0_5px_#ff0000] hover:pl-1"
                href="#persona"
              >
                Personagens
              </a>
            </li>
            <li className="list-none ">
              <a
                className="hover:text-[#ff0000] hover:drop-shadow-[0_0_5px_#ff0000] hover:pl-1"
                href="#actor"
              >
                Atores
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#b10000] mb-2.5 text-[18px] ">Redes</h3>
          <ul className="list-none ">
            <li className="list-none ">
              <a
                className="hover:text-[#ff0000] hover:drop-shadow-[0_0_5px_#ff0000] hover:pl-1"
                href="#"
              >
                Instagram
              </a>
            </li>
            <li className="list-none ">
              <a
                className="hover:text-[#ff0000] hover:drop-shadow-[0_0_5px_#ff0000] hover:pl-1"
                href="#"
              >
                TikTok
              </a>
            </li>
            <li className="list-none ">
              <a
                className="hover:text-[#ff0000] hover:drop-shadow-[0_0_5px_#ff0000] hover:pl-1"
                href="#"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 text-center border-t-[#800000] pt-[15px] text-[#8b8b8b] text-[13px]">
          <p>© 2025 Hexatombe — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
