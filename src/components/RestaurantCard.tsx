import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  isOpen: boolean;
}

export const RestaurantCard = ({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  priceRange,
  isOpen,
}: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!isOpen && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary" className="text-white bg-destructive">
                Closed
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge className="bg-white/90 text-foreground backdrop-blur-sm">
              <Star className="w-3 h-3 fill-primary text-primary mr-1" />
              {rating}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{cuisine}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {deliveryTime}
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4" />
              {priceRange}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
