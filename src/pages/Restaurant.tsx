import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Plus } from "lucide-react";
import { useParams } from "react-router-dom";

const mockMenuItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic tomato sauce, fresh mozzarella, basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    category: "Pizza",
  },
  {
    id: "2",
    name: "Carbonara Pasta",
    description: "Creamy sauce with pancetta, egg, and parmesan",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80",
    category: "Pasta",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan, Caesar dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
    category: "Salads",
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    description: "Tomato sauce, mozzarella, pepperoni",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    category: "Pizza",
  },
];

const Restaurant = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <main className="container mx-auto px-4 -mt-20 relative z-10">
        <Card className="mb-8 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">Italian Bistro</h1>
                <p className="text-muted-foreground mb-3">Italian • Pasta • Pizza</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                    <span className="font-semibold">4.8</span>
                    <span className="text-muted-foreground ml-1">(200+ ratings)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    25-35 min
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    2.5 km away
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                Open Now
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["All", "Pizza", "Pasta", "Salads", "Desserts"].map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
          {mockMenuItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0 flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-l-lg"
                />
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${item.price}
                    </span>
                    <Button size="sm" variant="hero">
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
