import { useState } from "react";
import OrderCard from "@/components/cards/OrderCard";
import { sampleOrders } from "@/data/mock-data";

const statusFilters = ["All", "received", "preparing", "ready", "completed"];

export default function AdminOrderMonitoring() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? sampleOrders : sampleOrders.filter((o) => o.status === filter);

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">Order Monitoring</h1>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {statusFilters.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap capitalize transition-colors ${
              filter === s ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((o) => (
          <OrderCard key={o.id} order={o} showStudent />
        ))}
      </div>
    </div>
  );
}
