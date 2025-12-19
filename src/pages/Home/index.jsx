import Atores from "./Atores";
import Carrossel from "./Carrossel";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HomeCards from "./HomeCards";
import Sobre from "./Sobre";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre />
      <HomeCards />
      <Carrossel />
      <Atores />
      <Footer />
    </div>
  );
}

export default Home;
