import vendorImg1 from "@/assets/vendor-1.jpg";
import vendorImg2 from "@/assets/vendor-2.jpg";
import vendorImg3 from "@/assets/vendor-3.jpg";
import foodJollof from "@/assets/food-jollof.jpg";
import foodFriedRice from "@/assets/food-friedrice.jpg";
import foodPuffPuff from "@/assets/food-puffpuff.jpg";
import foodShawarma from "@/assets/food-shawarma.jpg";
import foodSuya from "@/assets/food-suya.jpg";

export interface Vendor {
  id: string;
  name: string;
  image: string;
  rating: number;
  location: string;
  popularDishes: string[];
  category: string;
  deliveryTime: string;
}

export interface FoodItem {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  vendorName: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: "received" | "preparing" | "ready" | "completed" | "cancelled";
  date: string;
  studentName?: string;
}

export const vendors: Vendor[] = [
  { id: "1", name: "Mama's Kitchen", image: vendorImg1, rating: 4.8, location: "Block A Cafeteria", popularDishes: ["Jollof Rice", "Fried Rice"], category: "Nigerian", deliveryTime: "15-20 min" },
  { id: "2", name: "Tasty Bites", image: vendorImg2, rating: 4.5, location: "Student Center", popularDishes: ["Shawarma", "Burger"], category: "Fast Food", deliveryTime: "10-15 min" },
  { id: "3", name: "Campus Grills", image: vendorImg3, rating: 4.7, location: "Gate 2 Area", popularDishes: ["Suya", "Grilled Chicken"], category: "Grills", deliveryTime: "20-25 min" },
  { id: "4", name: "Sweet Treats", image: vendorImg1, rating: 4.3, location: "Library Junction", popularDishes: ["Puff Puff", "Chin Chin"], category: "Snacks", deliveryTime: "5-10 min" },
  { id: "5", name: "Juice Bar", image: vendorImg2, rating: 4.6, location: "Sports Complex", popularDishes: ["Smoothies", "Fresh Juice"], category: "Drinks", deliveryTime: "5-10 min" },
  { id: "6", name: "Iya Basira", image: vendorImg3, rating: 4.9, location: "Faculty of Science", popularDishes: ["Amala", "Efo Riro"], category: "Nigerian", deliveryTime: "20-30 min" },
];

export const foodItems: FoodItem[] = [
  { id: "f1", vendorId: "1", name: "Jollof Rice & Chicken", description: "Smoky party jollof rice with grilled chicken and fried plantain", price: 1500, image: foodJollof, category: "Rice" },
  { id: "f2", vendorId: "1", name: "Fried Rice Special", description: "Nigerian fried rice with mixed vegetables, liver and chicken", price: 1800, image: foodFriedRice, category: "Rice" },
  { id: "f3", vendorId: "2", name: "Chicken Shawarma", description: "Large shawarma wrap with grilled chicken, veggies and special sauce", price: 2000, image: foodShawarma, category: "Fast Food" },
  { id: "f4", vendorId: "4", name: "Puff Puff", description: "Golden crispy puff puff balls, perfectly sweetened", price: 500, image: foodPuffPuff, category: "Snacks" },
  { id: "f5", vendorId: "3", name: "Suya", description: "Spicy grilled beef suya with onions and pepper", price: 1200, image: foodSuya, category: "Grills" },
  { id: "f6", vendorId: "1", name: "Jollof Spaghetti", description: "Nigerian-style jollof spaghetti with chicken", price: 1300, image: foodJollof, category: "Rice" },
  { id: "f7", vendorId: "2", name: "Beef Shawarma", description: "Large beef shawarma with fresh veggies and garlic sauce", price: 2200, image: foodShawarma, category: "Fast Food" },
  { id: "f8", vendorId: "3", name: "Grilled Chicken", description: "Whole grilled chicken marinated in special spices", price: 3500, image: foodSuya, category: "Grills" },
];

export const sampleOrders: Order[] = [
  { id: "ORD-001", vendorName: "Mama's Kitchen", items: [{ name: "Jollof Rice & Chicken", quantity: 2, price: 1500 }, { name: "Fried Rice Special", quantity: 1, price: 1800 }], total: 4800, status: "preparing", date: "2026-03-13", studentName: "Adebayo Johnson" },
  { id: "ORD-002", vendorName: "Tasty Bites", items: [{ name: "Chicken Shawarma", quantity: 1, price: 2000 }], total: 2000, status: "ready", date: "2026-03-13", studentName: "Chioma Okafor" },
  { id: "ORD-003", vendorName: "Campus Grills", items: [{ name: "Suya", quantity: 3, price: 1200 }], total: 3600, status: "completed", date: "2026-03-12", studentName: "Emeka Nwosu" },
  { id: "ORD-004", vendorName: "Sweet Treats", items: [{ name: "Puff Puff", quantity: 5, price: 500 }], total: 2500, status: "received", date: "2026-03-13", studentName: "Fatima Bello" },
];
