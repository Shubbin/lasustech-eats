import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock } from "lucide-react";
import FoodCard from "@/components/cards/FoodCard";
import { vendors, foodItems } from "@/data/mock-data";
import { toast } from "sonner";

const categories = ["All", "Rice", "Fast Food", "Snacks", "Grills", "Drinks"];

export default function VendorMenuPage() {
  const { id } = useParams<{ id: string }>();
  const vendor = vendors.find((v) => v.id === id) || vendors[0];
  const menuItems = foodItems.filter((f) => f.vendorId === vendor.id);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? menuItems : menuItems.filter((f) => f.category === activeCategory);

  // Show all food items if vendor has none (demo purposes)
  const displayItems = filtered.length > 0 ? filtered : activeCategory === "All" ? foodItems : foodItems.filter((f) => f.category === activeCategory);

  return (
    <div className="animate-fade-in">
      {/* Vendor header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container pb-6">
          <Link to="/vendors" className="inline-flex items-center gap-1 text-card/80 text-xs mb-3 hover:text-card">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to vendors
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-card">{vendor.name}</h1>
          <div className="mt-2 flex items-center gap-4 text-card/80 text-sm">
            <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-warning text-warning" /> {vendor.rating}</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {vendor.location}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {vendor.deliveryTime}</span>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayItems.map((item) => (
            <FoodCard key={item.id} item={item} onAdd={() => toast.success(`${item.name} added to cart!`)} />
          ))}
        </div>
      </div>
    </div>
  );
}
