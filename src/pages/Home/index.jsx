import { useEffect, useState } from "react";
import Atores from "./Atores";
import Carrossel from "./Carrossel";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HomeCards from "./HomeCards";
import Sobre from "./Sobre";
import BottomNav from "./components/BottomNav";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <>
      <main
        className={` pb-16 transition-all duration-1000 ease-in-out ${
          show ? " opacity-100 " : " opacity-0"
        }`}
      >
        <Header />
        <Hero />
        <Sobre />
        <HomeCards />
        <Carrossel />
        <Atores />
        <Footer />
      </main>
      <BottomNav />
    </>
  );
}

export default Home;
