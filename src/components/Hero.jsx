export default function Hero() {
  return (
    <section className="relative h-screen w-full pt-16">
      <img
        src="https://source.unsplash.com/1600x900/?travel,nature"
        alt="Travel Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Explore the World with Us</h1>
        <p className="text-lg mb-6 drop-shadow-md">Domestic & International Packages</p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-semibold shadow-lg transition">
          View Packages
        </button>
      </div>
    </section>
  );
}