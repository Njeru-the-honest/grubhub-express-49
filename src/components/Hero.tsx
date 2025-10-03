import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(255, 107, 53, 0.7) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
            Delicious Food
            <br />
            Delivered to Your Door
          </h1>
          <p className="mb-8 text-xl text-white/90">
            Order from your favorite restaurants and get fresh food delivered fast
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex-1 flex items-center bg-white rounded-lg px-4 py-3 shadow-lg">
              <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
              <Input 
                placeholder="Enter your address" 
                className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="flex-1 flex items-center bg-white rounded-lg px-4 py-3 shadow-lg">
              <Search className="h-5 w-5 text-muted-foreground mr-2" />
              <Input 
                placeholder="Search for food or restaurants" 
                className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button variant="hero" size="lg" className="sm:w-auto">
              Search
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Pizza", "Burgers", "Sushi", "Salads"].map((cuisine) => (
              <Button
                key={cuisine}
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
