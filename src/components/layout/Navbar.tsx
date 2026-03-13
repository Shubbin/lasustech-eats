import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Home, Store, ClipboardList, LayoutDashboard } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/vendors", label: "Vendors", icon: Store },
  { to: "/orders", label: "Orders", icon: ClipboardList },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-primary">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">LF</span>
            <span className="hidden sm:inline">LASUSTECH Eats</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.to ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link to="/cart" className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">3</span>
            </Link>
            <Link to="/profile" className="p-2 rounded-lg hover:bg-muted transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <button onClick={() => setMobileOpen(true)} className="p-2 rounded-lg hover:bg-muted transition-colors md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-card animate-slide-in-right shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-display font-bold text-primary">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-1"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === l.to ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <l.icon className="w-5 h-5" />
                  {l.label}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Link to="/login" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted">
                <User className="w-5 h-5" />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
