import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-black text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-4xl font-bold roboto-mono-unique ">NEWSY</Link>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search the internet..."
                            className="px-4 py-2 rounded-full bg-white text-black w-64"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;