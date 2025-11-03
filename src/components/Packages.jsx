const packages = [
  { title: "Goa Getaway", image: "https://source.unsplash.com/400x300/?goa", price: "₹12,999" },
  { title: "Manali Escape", image: "https://source.unsplash.com/400x300/?manali", price: "₹9,999" },
  { title: "Dubai Delight", image: "https://source.unsplash.com/400x300/?dubai", price: "₹29,999" },
];

export default function Packages() {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Popular Packages</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
            <img src={pkg.image} alt={pkg.title} className="rounded-t-lg h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-gray-600 mb-2">{pkg.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}