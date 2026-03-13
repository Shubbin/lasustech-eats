import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import CartItemCard from "@/components/cards/CartItemCard";
import { foodItems, type CartItem } from "@/data/mock-data";

const initialCart: CartItem[] = [
  { ...foodItems[0], quantity: 2 },
  { ...foodItems[2], quantity: 1 },
  { ...foodItems[4], quantity: 1 },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const updateQty = (id: string, qty: number) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item)));
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-6 md:py-10 max-w-2xl animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
        <ShoppingCart className="w-6 h-6" /> Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Your cart is empty</p>
          <Link to="/vendors" className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline">
            Browse vendors <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {cart.map((item) => (
              <CartItemCard key={item.id} item={item} onUpdateQty={updateQty} onRemove={removeItem} />
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-card card-shadow p-4">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>Service fee</span>
              <span>₦100</span>
            </div>
            <div className="flex justify-between font-display font-bold mt-3 pt-3 border-t border-border">
              <span>Total</span>
              <span>₦{(subtotal + 100).toLocaleString()}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-accent-foreground rounded-xl font-display font-semibold hover:opacity-90 transition-opacity"
          >
            Proceed to Checkout <ArrowRight className="w-4 h-4" />
          </Link>
        </>
      )}
    </div>
  );
}
