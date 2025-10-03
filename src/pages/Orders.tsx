import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Package } from "lucide-react";

const mockOrders = [
  {
    id: "ORD-001",
    restaurant: "Italian Bistro",
    items: ["Margherita Pizza", "Caesar Salad"],
    total: 22.98,
    status: "delivering",
    estimatedTime: "15 min",
    address: "123 Main St, Apt 4B",
  },
  {
    id: "ORD-002",
    restaurant: "Sushi Palace",
    items: ["California Roll", "Miso Soup", "Edamame"],
    total: 28.50,
    status: "completed",
    estimatedTime: "Delivered",
    address: "123 Main St, Apt 4B",
  },
];

const Orders = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivering":
        return "bg-primary text-primary-foreground";
      case "completed":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivering":
        return "Out for Delivery";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            My Orders
          </h1>
          <p className="text-muted-foreground">Track and manage your orders</p>
        </div>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">{order.restaurant}</CardTitle>
                    <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {getStatusText(order.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Items</h4>
                    <ul className="space-y-1">
                      {order.items.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <Package className="w-4 h-4 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {order.address}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-semibold">{order.estimatedTime}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Total</p>
                      <p className="text-xl font-bold text-primary">${order.total.toFixed(2)}</p>
                    </div>
                  </div>

                  {order.status === "delivering" && (
                    <Button variant="outline" className="w-full">
                      Track Order
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Orders;
