import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-[#0d0b1f] min-h-screen text-white">
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold mt-10">Welcome to MetaFeed</h1>
      </main>
    </div>
  );
}
