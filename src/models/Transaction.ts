export interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}