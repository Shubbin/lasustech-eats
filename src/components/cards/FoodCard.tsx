import { Plus } from "lucide-react";
import type { FoodItem } from "@/data/mock-data";

interface FoodCardProps {
  item: FoodItem;
  onAdd?: (item: FoodItem) => void;
}

export default function FoodCard({ item, onAdd }: FoodCardProps) {
  return (
    <div className="rounded-xl bg-card card-shadow card-lift overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-3">
        <h4 className="font-display font-semibold text-sm text-foreground line-clamp-1">{item.name}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display font-bold text-foreground">₦{item.price.toLocaleString()}</span>
          <button
            onClick={() => onAdd?.(item)}
            className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
