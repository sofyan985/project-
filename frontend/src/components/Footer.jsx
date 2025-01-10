const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About NEWSY</h3>
                        <p>NEWSY brings you the latest news, articles, and insights from around the world. Stay informed with accurate and up-to-date reporting on politics, finance, sports, art, health, travel, and more.</p>
                    </div>
                    <div>
                        
                        
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>📧 contact@newsy.com</li>
                            <li>📞 +91-123-456-7890</li>
                            <li>📍 Peshawar, Pakistan</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>© 2024 NEWSY. All rights reserved.</p>
                    <p className="text-sm mt-2">Designed by Kashan Khattak, Hafsa Zainab, Sufian Babar</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;