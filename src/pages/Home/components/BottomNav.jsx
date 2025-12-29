import { BookSearch, House } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-linear-to-t to-[#240000ce] from-[#000000] border-t border-[#220c0cce] flex justify-around items-center z-50">
      <button
        onClick={() => navigate("/")}
        className={` flex flex-col items-center text-xs gap-1 cursor-pointer ${
          isActive("/") ? "text-red-600 bg-[#1a0000] rounded-full p-2" : "text-zinc-700"
        }`}
      >
        <House size={22} />
      </button>
      <button
        onClick={() => navigate("/list-personas")}
        className={` flex flex-col items-center text-xs gap-1 cursor-pointer  ${
          isActive("/list-personas") ? "text-red-600 bg-[#1a0000] rounded-full p-2" : "text-zinc-700"
        }`}
      >
        <BookSearch size={22} />
      </button>
    </nav>
  );
}

export default BottomNav;
