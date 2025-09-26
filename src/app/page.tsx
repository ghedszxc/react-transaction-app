// Modules
// Components
import Nav from "@/app/components/navigation";
import TransactionsList from "@/app/components/transactions/list";
import AddTransaction from "@/app/components/transactions/add";

export default function Home() {
  return (
    <div className="h-[100vh] font-sans">
      <Nav />
      <main className="p-5">
        <AddTransaction />
        <TransactionsList />
      </main>
    </div>
  );
}
