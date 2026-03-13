import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { foodItems } from "@/data/mock-data";

export default function VendorMenuManagement() {
  const [items, setItems] = useState(foodItems.slice(0, 4));
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold">Menu Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? "Cancel" : "Add Item"}
        </button>
      </div>

      {showForm && (
        <div className="rounded-xl bg-card card-shadow p-4 mb-6">
          <h3 className="font-display font-semibold mb-4">New Menu Item</h3>
          <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Food Name</label>
              <input type="text" placeholder="e.g. Jollof Rice" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Price (₦)</label>
              <input type="number" placeholder="1500" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Category</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                <option>Rice</option><option>Fast Food</option><option>Snacks</option><option>Grills</option><option>Drinks</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Image</label>
              <input type="file" className="w-full text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium mb-1.5 block">Description</label>
              <textarea rows={2} placeholder="Describe the dish..." className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                Save Item
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Item list */}
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 rounded-xl bg-card card-shadow p-3">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-semibold text-sm truncate">{item.name}</h4>
              <p className="text-xs text-muted-foreground">{item.category}</p>
              <p className="text-sm font-bold mt-0.5">₦{item.price.toLocaleString()}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"><Pencil className="w-4 h-4" /></button>
              <button
                onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
                className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive hover:bg-destructive/20"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
