import { Link } from "react-router-dom";
import { ShoppingBag, Clock, Star, ArrowRight } from "lucide-react";
import DashboardStatCard from "@/components/cards/DashboardStatCard";
import OrderCard from "@/components/cards/OrderCard";
import FoodCard from "@/components/cards/FoodCard";
import { sampleOrders, foodItems } from "@/data/mock-data";

export default function StudentDashboard() {
  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">Welcome back, Adebayo! 👋</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <DashboardStatCard title="Total Orders" value={12} icon={ShoppingBag} />
        <DashboardStatCard title="Pending" value={2} icon={Clock} trend="1 new" trendUp />
        <DashboardStatCard title="Favorites" value={5} icon={Star} />
      </div>

      {/* Recent Orders */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold">Recent Orders</h2>
          <Link to="/orders" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-3">
          {sampleOrders.slice(0, 2).map((o) => (
            <Link key={o.id} to={`/orders/${o.id}/tracking`}>
              <OrderCard order={o} />
            </Link>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div>
        <h2 className="font-display text-lg font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {foodItems.slice(0, 4).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
