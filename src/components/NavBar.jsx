function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1><a className="text-2xl" href="/">Nisarul</a></h1>
                <div>
                    <a className="p-2" href="/">Home</a>
                    <a className="p-2" href="/about">About</a>
                    <a className="p-2" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;