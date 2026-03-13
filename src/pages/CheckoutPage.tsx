import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, CreditCard, Wallet, Smartphone } from "lucide-react";
import { foodItems } from "@/data/mock-data";

export default function CheckoutPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  const orderItems = [
    { name: foodItems[0].name, qty: 2, price: foodItems[0].price },
    { name: foodItems[2].name, qty: 1, price: foodItems[2].price },
  ];
  const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);

  if (confirmed) {
    return (
      <div className="container py-16 max-w-md text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h1 className="font-display text-2xl font-bold">Order Confirmed!</h1>
        <p className="mt-2 text-sm text-muted-foreground">Your order #ORD-005 has been placed successfully.</p>
        <Link to="/orders/ORD-005/tracking" className="mt-6 inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-xl font-display font-semibold hover:opacity-90 transition-opacity">
          Track Order
        </Link>
      </div>
    );
  }

  const methods = [
    { id: "transfer", label: "Bank Transfer", icon: CreditCard },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "pos", label: "Pay on Pickup", icon: Smartphone },
  ];

  return (
    <div className="container py-6 md:py-10 max-w-2xl animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="rounded-xl bg-card card-shadow p-4 mb-4">
        <h2 className="font-display font-semibold text-sm mb-3">Order Summary</h2>
        {orderItems.map((item, i) => (
          <div key={i} className="flex justify-between text-sm py-1">
            <span className="text-muted-foreground">{item.qty}x {item.name}</span>
            <span>₦{(item.price * item.qty).toLocaleString()}</span>
          </div>
        ))}
        <div className="flex justify-between text-sm py-1 text-muted-foreground">
          <span>Service fee</span>
          <span>₦100</span>
        </div>
        <div className="flex justify-between font-display font-bold mt-2 pt-2 border-t border-border">
          <span>Total</span>
          <span>₦{(subtotal + 100).toLocaleString()}</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="rounded-xl bg-card card-shadow p-4 mb-6">
        <h2 className="font-display font-semibold text-sm mb-3">Payment Method</h2>
        <div className="space-y-2">
          {methods.map((m) => (
            <button
              key={m.id}
              onClick={() => setPaymentMethod(m.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors text-sm ${
                paymentMethod === m.id ? "border-primary bg-primary/5" : "border-border hover:bg-muted"
              }`}
            >
              <m.icon className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setConfirmed(true)}
        className="w-full py-3.5 bg-accent text-accent-foreground rounded-xl font-display font-semibold hover:opacity-90 transition-opacity"
      >
        Confirm Order — ₦{(subtotal + 100).toLocaleString()}
      </button>
    </div>
  );
}
