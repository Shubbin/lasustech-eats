import { User, Mail, Phone, Lock } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container py-6 md:py-10 max-w-lg animate-fade-in">
      <h1 className="font-display text-2xl font-bold mb-6">My Profile</h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="font-display font-semibold">Adebayo Johnson</h2>
          <p className="text-sm text-muted-foreground">Computer Science, 300L</p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Full Name</label>
          <input type="text" defaultValue="Adebayo Johnson" className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Email</label>
          <input type="email" defaultValue="adebayo@lasustech.edu.ng" className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Phone</label>
          <input type="tel" defaultValue="08012345678" className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Change Password</label>
          <input type="password" placeholder="New password" className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
        </div>
        <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-display font-semibold hover:opacity-90 transition-opacity">
          Save Changes
        </button>
      </form>
    </div>
  );
}
