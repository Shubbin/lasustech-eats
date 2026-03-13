import type { Order } from "@/data/mock-data";

const statusStyles: Record<string, string> = {
  received: "bg-primary/10 text-primary",
  preparing: "bg-warning/10 text-warning",
  ready: "bg-success/10 text-success",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive/10 text-destructive",
};

export default function OrderCard({ order, showStudent }: { order: Order; showStudent?: boolean }) {
  return (
    <div className="rounded-xl bg-card card-shadow p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display font-semibold text-sm text-foreground">{order.id}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{order.vendorName}</p>
          {showStudent && order.studentName && (
            <p className="text-xs text-muted-foreground">Student: {order.studentName}</p>
          )}
        </div>
        <span className={`text-[11px] font-medium px-2 py-1 rounded-full capitalize ${statusStyles[order.status] || ""}`}>
          {order.status}
        </span>
      </div>
      <div className="mt-3 space-y-1">
        {order.items.map((item, i) => (
          <div key={i} className="flex justify-between text-xs text-muted-foreground">
            <span>{item.quantity}x {item.name}</span>
            <span>₦{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-border flex justify-between text-sm">
        <span className="text-muted-foreground">Total</span>
        <span className="font-display font-bold text-foreground">₦{order.total.toLocaleString()}</span>
      </div>
    </div>
  );
}
