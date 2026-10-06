import Coordonnees from "../components/Coordonnees";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroContact from "../components/HeroContact";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroContact />
      <Coordonnees/>
      <Footer />
    </div>
  );
}
