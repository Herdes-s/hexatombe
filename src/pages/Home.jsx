import Atores from "../components/Atores";
import Carrossel from "../components/Carrossel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PersonagemCard from "../components/PersonagemCard";
import Sobre from "../components/Sobre";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre />
      <PersonagemCard />
      <Carrossel />
      <Atores />
      <Footer />
    </div>
  );
}

export default Home;
