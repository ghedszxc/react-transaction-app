// Modules
// Components
import Nav from "@/app/components/navigation";
import TransactionsList from "./components/transactions/list";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <Nav />
      <main className="p-5 border border-red-500">
        <TransactionsList />
      </main>
    </div>
  );
}
