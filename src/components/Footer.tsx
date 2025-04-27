
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Мир Программирования</h3>
            <p className="text-gray-400">
              Ваш надежный источник информации о языках и технологиях программирования.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Языки программирования</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ресурсы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-400">
              Присоединяйтесь к нашему сообществу в социальных сетях.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Телеграм
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                ВКонтакте
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Мир Программирования. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
