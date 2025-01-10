import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-100 border-b border-gray-200 navbar">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-8 roboto-mono-unique link-items">
                        <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                        <Link to="/politics" className="text-gray-800 hover:text-gray-600">Politics</Link>
                        <Link to="/finance" className="text-gray-800 hover:text-gray-600">Finance</Link>
                        <Link to="/sports" className="text-gray-800 hover:text-gray-600">Sports</Link>
                        <Link to="/gallery" className="text-gray-800 hover:text-gray-600">Gallery</Link>
                        <Link to="/health" className="text-gray-800 hover:text-gray-600">Health</Link>
                        <Link to="/travel" className="text-gray-800 hover:text-gray-600">Travel</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;