import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, ShieldCheck } from "lucide-react";

const featuredRestaurants = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">Get your food delivered in 30 minutes or less</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Top Restaurants</h3>
            <p className="text-muted-foreground">Order from the best local restaurants</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-muted-foreground">Multiple payment options for your convenience</p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Popular Restaurants
            </h2>
            <p className="text-muted-foreground">Discover the most loved spots near you</p>
          </div>
          <Link to="/restaurants">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow" />
              <span className="text-xl font-bold">FoodHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 FoodHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
