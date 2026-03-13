import { useState } from "react";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import { vendors } from "@/data/mock-data";

interface AdminVendor {
  id: string;
  name: string;
  location: string;
  status: "active" | "pending" | "disabled";
}

const initialVendors: AdminVendor[] = vendors.map((v, i) => ({
  id: v.id,
  name: v.name,
  location: v.location,
  status: i === 3 ? "pending" : i === 4 ? "disabled" : "active",
}));

const statusStyle: Record<string, string> = {
  active: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  disabled: "bg-destructive/10 text-destructive",
};

export default function AdminVendorManagement() {
  const [list, setList] = useState<AdminVendor[]>(initialVendors);

  const setStatus = (id: string, status: AdminVendor["status"]) => {
    setList((prev) => prev.map((v) => (v.id === id ? { ...v, status } : v)));
  };

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">Vendor Management</h1>

      <div className="space-y-3">
        {list.map((v) => (
          <div key={v.id} className="flex items-center gap-4 rounded-xl bg-card card-shadow p-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
              {v.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-sm truncate">{v.name}</p>
              <p className="text-xs text-muted-foreground">{v.location}</p>
            </div>
            <span className={`text-[11px] font-medium px-2 py-1 rounded-full capitalize ${statusStyle[v.status]}`}>
              {v.status}
            </span>
            <div className="flex gap-1.5 shrink-0">
              {v.status !== "active" && (
                <button onClick={() => setStatus(v.id, "active")} className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center text-success hover:bg-success/20" title="Approve">
                  <CheckCircle className="w-4 h-4" />
                </button>
              )}
              {v.status !== "disabled" && (
                <button onClick={() => setStatus(v.id, "disabled")} className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive hover:bg-destructive/20" title="Disable">
                  <XCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
