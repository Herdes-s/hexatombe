import Atores from "../components/FilesHome/Atores";
import Carrossel from "../components/FilesHome/Carrossel";
import Footer from "../components/FilesHome/Footer";
import Header from "../components/FilesHome/Header";
import Hero from "../components/FilesHome/Hero";
import PersonagemCard from "../components/FilesHome/PersonagemCard";
import Sobre from "../components/FilesHome/Sobre";

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
