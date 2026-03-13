import { Link } from "react-router-dom";
import OrderCard from "@/components/cards/OrderCard";
import { sampleOrders } from "@/data/mock-data";

export default function OrderHistoryPage() {
  return (
    <div className="container py-6 md:py-10 max-w-2xl animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">My Orders</h1>
      <div className="space-y-3">
        {sampleOrders.map((order) => (
          <Link key={order.id} to={`/orders/${order.id}/tracking`}>
            <OrderCard order={order} />
          </Link>
        ))}
      </div>
    </div>
  );
}
