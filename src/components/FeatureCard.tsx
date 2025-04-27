
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
