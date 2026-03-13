import { Users, Store, ShoppingBag, DollarSign } from "lucide-react";
import DashboardStatCard from "@/components/cards/DashboardStatCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const dailyOrders = [
  { day: "Mon", orders: 45 },
  { day: "Tue", orders: 52 },
  { day: "Wed", orders: 49 },
  { day: "Thu", orders: 63 },
  { day: "Fri", orders: 78 },
  { day: "Sat", orders: 35 },
  { day: "Sun", orders: 28 },
];

const vendorShare = [
  { name: "Mama's Kitchen", value: 35 },
  { name: "Tasty Bites", value: 25 },
  { name: "Campus Grills", value: 20 },
  { name: "Others", value: 20 },
];

const COLORS = ["hsl(157,61%,31%)", "hsl(30,100%,50%)", "hsl(142,71%,45%)", "hsl(218,11%,46%)"];

export default function AdminDashboard() {
  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <DashboardStatCard title="Total Students" value={1248} icon={Users} trend="5% up" trendUp />
        <DashboardStatCard title="Total Vendors" value={12} icon={Store} />
        <DashboardStatCard title="Total Orders" value={3459} icon={ShoppingBag} trend="12% up" trendUp />
        <DashboardStatCard title="Revenue" value="₦2.4M" icon={DollarSign} trend="8% up" trendUp />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bar chart */}
        <div className="rounded-xl bg-card card-shadow p-5">
          <h3 className="font-display font-semibold text-sm mb-4">Daily Orders (This Week)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dailyOrders}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="orders" fill="hsl(157,61%,31%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart */}
        <div className="rounded-xl bg-card card-shadow p-5">
          <h3 className="font-display font-semibold text-sm mb-4">Top Vendors by Orders</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={vendorShare} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
                {vendorShare.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-2 justify-center">
            {vendorShare.map((v, i) => (
              <span key={v.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                {v.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
