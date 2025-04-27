
import FeatureCard from "./FeatureCard";

const LanguagesSection = () => {
  const languages = [
    {
      icon: "🐍",
      title: "Python",
      description: "Простой и мощный язык для анализа данных, машинного обучения и веб-разработки."
    },
    {
      icon: "☕",
      title: "Java",
      description: "Объектно-ориентированный язык для создания кроссплатформенных приложений."
    },
    {
      icon: "🌐",
      title: "JavaScript",
      description: "Язык веб-разработки, позволяющий создавать интерактивные сайты и приложения."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные языки программирования</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <FeatureCard 
              key={index}
              icon={lang.icon}
              title={lang.title}
              description={lang.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
