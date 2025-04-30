export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-12 px-6 lg:px-20">
      {/* Left */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Welcome to <span className="text-purple-500">MetaFeed</span>
        </h1>
        <p className="text-lg mb-6">Earn. Watch. Upgrade your experience.</p>
        <div className="flex justify-center lg:justify-start space-x-4 mb-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold">
            Watch Now
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">
            Go Premium
          </button>
        </div>
        <div className="flex justify-center lg:justify-start space-x-8 text-sm text-gray-300">
          <div>
            <span className="block text-2xl font-bold text-white">2,500</span>
            Active Users
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">150</span>
            Live Streams
          </div>
        </div>
      </div>

      {/* Right - placeholder banner */}
      <div className="w-full lg:w-[500px] h-[280px] bg-gray-800 rounded-xl flex items-center justify-center mb-10 lg:mb-0">
        <p className="text-gray-400">[Video Preview Banner]</p>
      </div>
    </section>
  );
}

