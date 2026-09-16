import { useEffect, useState } from "react";
import Atores from "../../components/homePageComponents/Actors";
import Carrossel from "../../components/homePageComponents/Carousel";
import Footer from "../../components/homePageComponents/Footer";
import Header from "../../components/homePageComponents/Header";
import Hero from "../../components/homePageComponents/Hero";
import ProtagonistShowcase from "../../components/homePageComponents/ProtagonistShowcase";
import About from "../../components/homePageComponents/About";
import BottomNav from "../../components/homePageComponents/BottonHeader/BottomNav";

function Home() {
  const [show, setShow] = useState<boolean>(false);

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
        <About />
        <ProtagonistShowcase />
        <Carrossel />
        <Atores />
        <Footer />
      </main>
      <BottomNav />
    </>
  );
}

export default Home;
