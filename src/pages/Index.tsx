
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LanguagesSection from "@/components/LanguagesSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <LanguagesSection />
        <ResourcesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
