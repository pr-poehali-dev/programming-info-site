
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Полезные ресурсы</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Видеокурсы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Обучающие видео от опытных разработчиков с пошаговыми инструкциями для новичков и профессионалов.</p>
              <Button>Перейти к курсам</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Интерактивные задачи</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Решайте алгоритмические задачи и укрепляйте свои навыки программирования на практике.</p>
              <Button>Начать решать</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
