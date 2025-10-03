import { Navbar } from "@/components/Navbar";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

const mockRestaurants = [
  {
    id: "1",
    name: "Italian Bistro",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    cuisine: "Italian • Pasta • Pizza",
    rating: 4.8,
    deliveryTime: "25-35 min",
    priceRange: "$$",
    isOpen: true,
  },
  {
    id: "2",
    name: "Sushi Palace",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    cuisine: "Japanese • Sushi • Ramen",
    rating: 4.9,
    deliveryTime: "30-40 min",
    priceRange: "$$$",
    isOpen: true,
  },
  {
    id: "3",
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    cuisine: "American • Burgers • Fast Food",
    rating: 4.6,
    deliveryTime: "20-30 min",
    priceRange: "$",
    isOpen: true,
  },
  {
    id: "4",
    name: "Green Leaf Cafe",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    cuisine: "Healthy • Salads • Smoothies",
    rating: 4.7,
    deliveryTime: "15-25 min",
    priceRange: "$$",
    isOpen: false,
  },
  {
    id: "5",
    name: "Spice of India",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    cuisine: "Indian • Curry • Tandoori",
    rating: 4.5,
    deliveryTime: "35-45 min",
    priceRange: "$$",
    isOpen: true,
  },
  {
    id: "6",
    name: "Dragon Wok",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80",
    cuisine: "Chinese • Noodles • Dim Sum",
    rating: 4.4,
    deliveryTime: "30-40 min",
    priceRange: "$$",
    isOpen: true,
  },
];

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            All Restaurants
          </h1>
          <p className="text-muted-foreground">Discover amazing food from local restaurants</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search restaurants or cuisines..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Restaurants;
