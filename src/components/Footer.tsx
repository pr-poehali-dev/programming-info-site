
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Мир Программирования</h3>
            <p className="text-gray-300">
              Ваш путеводитель в мире современных технологий и языков программирования.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">О нас</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Курсы</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-300">info@programming-world.ru</p>
            <p className="text-gray-300">+7 (800) 123-45-67</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Мир Программирования. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
