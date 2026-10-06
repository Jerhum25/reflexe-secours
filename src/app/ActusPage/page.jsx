import Actus from "../components/Actus";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroActus from "../components/HeroActus";
import Newsletter from "../components/Newsletter";

export default function AcutsPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroActus />
      <Actus/>
      <Newsletter/>
      <Footer />
    </div>
  );
}
