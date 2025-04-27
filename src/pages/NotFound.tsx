
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Страница не найдена</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Упс! Похоже, вы пытаетесь получить доступ к странице, которая не существует.
        </p>
        <Link to="/">
          <Button className="px-6">Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
