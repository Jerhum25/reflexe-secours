import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import FormationsList from "../components/FormationsList";
import FormationTags from "../components/FormationTags";
import HeroFormations from "../components/HeroFormations";

export default function FormationPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroFormations />
      <FormationsList />
      <FormationTags />
      <Footer />
    </div>
  );
}
