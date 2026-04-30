const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            CS — Ticket System
          </h1>
        </div>

        {/* Menu */}
        

        {/* Button */}
        <div className="flex gap-4">
            <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <p className="hover:text-blue-600 cursor-pointer">Home</p>
          <p className="hover:text-blue-600 cursor-pointer">FAQ</p>
          <p className="hover:text-blue-600 cursor-pointer">Changelog</p>
          <p className="hover:text-blue-600 cursor-pointer">Blog</p>
          <p className="hover:text-blue-600 cursor-pointer">Download</p>
          <p className="hover:text-blue-600 cursor-pointer">Contact</p>
        </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + New Ticket
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;