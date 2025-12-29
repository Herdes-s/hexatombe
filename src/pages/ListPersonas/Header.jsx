import { useNavigate } from "react-router-dom";
import logoHexa from "../../assets/logos/logo-hexa-white.png";
import { Search } from "lucide-react";

function Header({ search, setSearch, ocupacao, setOcupacao }) {
  const navigate = useNavigate();
  return (
    <header className="relative z-20">
      {/* Fundo do header */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1a0000] to-[#050000]" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex items-center justify-between px-[10%] py-4 ">
        {/* LOGO */}
        <div className="w-40 cursor-pointer transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(120,0,0,0.8)]">
          <img
            src={logoHexa}
            alt="Ordem Paranormal — logo"
            className="w-full h-auto hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]"
            onClick={() => navigate("/")}
          />
        </div>
        {/* CONTROLES */}
        <nav className="flex items-center gap-4">
          {/* SEARCH */}
          <div
            className="flex items-center gap-2 bg-black/70 border border-[#300000] px-3 py-1.5 text-[#e0e0e0]
              shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]
            "
          >
            <Search width={20} className="text-[#b00020]" />
            <input
              className="bg-transparent outline-none placeholder:text-[#888] text-sm"
              type="text"
              placeholder="Pesquisa!"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* SELECT */}
            <select
              className="bg-black/70 border border-[#300000] px-3 py-1.5 text-[#e0e0e0] text-sm outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]"
              name="Sacrifício"
              value={ocupacao}
              onChange={(a) => setOcupacao(a.target.value)}
            >
              <option value="">Todas</option>
              <option value="Sacrifício">Sacrifício</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
