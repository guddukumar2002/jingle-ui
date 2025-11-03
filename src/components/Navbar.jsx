export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Jingle Holiday Bazar</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Domestic</a></li>
          <li><a href="#">International</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}