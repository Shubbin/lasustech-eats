import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, ChefHat, Package } from "lucide-react";
import { sampleOrders } from "@/data/mock-data";

const steps = [
  { key: "received", label: "Order Received", icon: CheckCircle2, desc: "Your order has been confirmed" },
  { key: "preparing", label: "Preparing Food", icon: ChefHat, desc: "The vendor is preparing your meal" },
  { key: "ready", label: "Ready for Pickup", icon: Package, desc: "Your order is ready to collect" },
  { key: "completed", label: "Completed", icon: CheckCircle2, desc: "Order completed. Enjoy your meal!" },
];

const stepIndex: Record<string, number> = { received: 0, preparing: 1, ready: 2, completed: 3 };

export default function OrderTrackingPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const order = sampleOrders.find((o) => o.id === orderId) || sampleOrders[0];
  const currentStep = stepIndex[order.status] ?? 0;

  return (
    <div className="container py-6 md:py-10 max-w-lg animate-fade-in">
      <Link to="/orders" className="inline-flex items-center gap-1 text-muted-foreground text-xs mb-4 hover:text-foreground">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to orders
      </Link>
      <h1 className="font-display text-2xl font-bold mb-1">Order {order.id}</h1>
      <p className="text-sm text-muted-foreground mb-8">{order.vendorName}</p>

      {/* Timeline */}
      <div className="space-y-0">
        {steps.map((step, i) => {
          const isActive = i <= currentStep;
          const isCurrent = i === currentStep;
          return (
            <div key={step.key} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}>
                  <step.icon className="w-5 h-5" />
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-0.5 h-12 ${isActive ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
              <div className="pt-2 pb-6">
                <p className={`font-display font-semibold text-sm ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order details */}
      <div className="mt-4 rounded-xl bg-card card-shadow p-4">
        <h3 className="font-display font-semibold text-sm mb-3">Order Details</h3>
        {order.items.map((item, i) => (
          <div key={i} className="flex justify-between text-sm py-1">
            <span className="text-muted-foreground">{item.quantity}x {item.name}</span>
            <span>₦{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className="flex justify-between font-display font-bold mt-2 pt-2 border-t border-border">
          <span>Total</span>
          <span>₦{order.total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
