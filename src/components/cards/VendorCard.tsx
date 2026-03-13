import { Link } from "react-router-dom";
import { Star, MapPin, Clock } from "lucide-react";
import type { Vendor } from "@/data/mock-data";

export default function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <Link to={`/vendors/${vendor.id}`} className="block rounded-xl bg-card card-shadow card-lift overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-semibold text-foreground">{vendor.name}</h3>
          <span className="flex items-center gap-1 text-sm font-medium text-foreground bg-success/10 px-2 py-0.5 rounded-full shrink-0">
            <Star className="w-3.5 h-3.5 fill-warning text-warning" />
            {vendor.rating}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          {vendor.location}
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          {vendor.deliveryTime}
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {vendor.popularDishes.map((d) => (
            <span key={d} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{d}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
