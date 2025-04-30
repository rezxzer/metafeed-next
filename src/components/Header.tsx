export default function Header() {
  return (
    <header className="bg-[#0d0b1f] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold text-purple-500">MetaFeed</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-purple-400">Home</a>
        <a href="#" className="hover:text-purple-400">Streams</a>
        <a href="#" className="hover:text-purple-400">Store</a>
        <a href="#" className="hover:text-purple-400">Leaderboard</a>
        <a href="#" className="hover:text-purple-400">Logo Designer</a>
      </nav>
      <div className="flex items-center space-x-4">
        <select className="bg-[#1a1929] text-white px-2 py-1 rounded text-sm">
          <option>EN</option>
          <option>GE</option>
        </select>
        <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200">
          Sign In
        </button>
      </div>
    </header>
  );
}
