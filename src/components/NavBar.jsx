import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1>
                    <Link to="/" className="hover:text-gray-400 p-2 text-uppercase">Nisarul</Link>
                </h1>
                <div>
                    <Link to="/" className="hover:text-gray-400 p-2">Home</Link>
                    <Link to="/about" className="hover:text-gray-400 p-2">About</Link>
                    <Link to="/projects" className="hover:text-gray-400 p-2">Projects</Link>
                    <Link to="/contact" className="hover:text-gray-400 p-2">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;