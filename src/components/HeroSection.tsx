
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Изучайте программирование с нами</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Погрузитесь в увлекательный мир кода. Изучайте языки программирования, 
          алгоритмы и технологии, которые меняют мир.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            Начать обучение
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Узнать больше
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
