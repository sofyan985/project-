import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Hamburger Icon on the left */}
          <div
            className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={toggleMenu}
          >
            <button
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className={`block w-6 h-1 bg-white mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-1 bg-white mb-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Logo centered */}
          <div className="logoo">
            <Link to="/" className="text-4xl font-bold roboto-mono-unique Maintext">
              NEWSY
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-0 w-64 bg-white shadow-lg h-full p-4 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="menux">
            <li>
              <Link to="/" className="text-gray-800 hover:text-gray-600 py-2" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/politics" className="text-gray-800 hover:text-gray-600 py-2" onClick={toggleMenu}>Politics</Link>
            </li>
            <li>
              <Link to="/finance" className="text-gray-800 hover:text-gray-600 py-2" onClick={toggleMenu}>Finance</Link>
            </li>
            <li>
              <Link to="/sports" className="text-gray-800 hover:text-gray-600 py-2" onClick={toggleMenu}>Sports</Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-800 hover:text-gray-600 py-2" onClick={toggleMenu}>Gallery</Link>
            </li>
            <li>
              <Link to="/health" className="text-gray-800 hover:text-gray-600 py-2" onClick={toggleMenu}>Health</Link>
            </li>
            <li>
              <Link to="/travel" className="text-gray-800 hover:text-gray-600 py-2" onClick={toggleMenu}>Travel</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;