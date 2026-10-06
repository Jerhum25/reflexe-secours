import Actions from "./components/Actions";
import APropos from "./components/APropos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Formations from "./components/Formations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prestas from "./components/Prestas";
import Soutien from "./components/Soutien";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero/>
      <Prestas />
      <APropos />
      <Formations />
      <Actions />
      <Soutien/>
      <Contact />
      <Footer />
    </div>
  );
}
