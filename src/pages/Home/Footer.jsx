function Footer() {
  return (
    <footer
      className="relative bg-linear-to-b from-[#0a0a0a] via-[#120000] to-black text-[#eee] pt-20
  px-5 pb-[30px] border-t border-[#800000] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        <div>
          <h2 className="text-[#b10000] text-[clamp(22px,2.5vw,32px)] tracking-[0.4em] drop-shadow-[0_0_15px_#ff0000]">
            HEXATOMBE
          </h2>
          <p className="mt-1.5 text-[#b9b9b9] text-[14px]">
            O sangue guia. O labirinto escolhe.
          </p>
        </div>
        <div>
          <h3 className="text-[#b10000] mb-2.5 text-[18px] ">Navegação</h3>
          <ul className="list-none ">
            <li className="list-none ">
              <a
                className=" relative transition-all duration-300 hover:text-[#ff0000] hover:pl-2 hover:drop-shadow-[0_0_6px_#ff0000]"
                href="#"
              >
                Início
              </a>
            </li>
            <li className="list-none ">
              <a
                className="relative transition-all duration-300 hover:text-[#ff0000] hover:pl-2 hover:drop-shadow-[0_0_6px_#ff0000]"
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li className="list-none ">
              <a
                className="relative transition-all duration-300 hover:text-[#ff0000] hover:pl-2 hover:drop-shadow-[0_0_6px_#ff0000]"
                href="#persona"
              >
                Personagens
              </a>
            </li>
            <li className="list-none ">
              <a
                className="relative transition-all duration-300 hover:text-[#ff0000] hover:pl-2 hover:drop-shadow-[0_0_6px_#ff0000]"
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
                className="relative transition-all duration-300 hover:text-[#ff0000] hover:pl-2 hover:drop-shadow-[0_0_6px_#ff0000]"
                href="#"
              >
                Instagram
              </a>
            </li>
            <li className="list-none ">
              <a
                className="relative transition-all duration-300 hover:text-[#ff0000] hover:pl-2 hover:drop-shadow-[0_0_6px_#ff0000]"
                href="#"
              >
                TikTok
              </a>
            </li>
            <li className="list-none ">
              <a
                className="relative transition-all duration-300 hover:text-[#ff0000] hover:pl-2 hover:drop-shadow-[0_0_6px_#ff0000]"
                href="#"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mt-16 pt-6 border-t border-[#300000] text-center text-[#8b8b8b] text-[13px] z-10">
        <p>© 2025 Hexatombe — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
