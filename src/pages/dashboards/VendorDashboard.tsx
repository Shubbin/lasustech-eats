import { ShoppingBag, DollarSign, Clock, CheckCircle } from "lucide-react";
import DashboardStatCard from "@/components/cards/DashboardStatCard";
import OrderCard from "@/components/cards/OrderCard";
import { sampleOrders } from "@/data/mock-data";

export default function VendorDashboard() {
  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">Vendor Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <DashboardStatCard title="Orders Today" value={24} icon={ShoppingBag} trend="12% up" trendUp />
        <DashboardStatCard title="Revenue" value="₦45.2K" icon={DollarSign} trend="8% up" trendUp />
        <DashboardStatCard title="Pending" value={5} icon={Clock} />
        <DashboardStatCard title="Completed" value={19} icon={CheckCircle} />
      </div>

      <h2 className="font-display text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="space-y-3">
        {sampleOrders.map((o) => (
          <OrderCard key={o.id} order={o} showStudent />
        ))}
      </div>
    </div>
  );
}
