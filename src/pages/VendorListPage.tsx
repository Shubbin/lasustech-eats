import { useState } from "react";
import { Search, Filter } from "lucide-react";
import VendorCard from "@/components/cards/VendorCard";
import { vendors } from "@/data/mock-data";

const categories = ["All", "Nigerian", "Fast Food", "Grills", "Snacks", "Drinks"];

export default function VendorListPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = vendors.filter((v) => {
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase()) || v.popularDishes.some((d) => d.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = activeCategory === "All" || v.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="container py-6 md:py-10 animate-fade-in">
      <h1 className="font-display text-2xl md:text-3xl font-bold mb-6">Campus Vendors</h1>

      {/* Search & Filter */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 flex items-center bg-card rounded-xl border border-border px-3">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search vendors or dishes..."
            className="flex-1 px-3 py-2.5 text-sm bg-transparent outline-none"
          />
        </div>
      </div>

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

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((v) => (
          <VendorCard key={v.id} vendor={v} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="font-display font-semibold">No vendors found</p>
          <p className="text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
