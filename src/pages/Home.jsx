import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white min-h-screen">
            {/* Hero Section */}
            <div className="flex items-center justify-center h-[70vh]">
                <div className="text-center space-y-6">
                <h1 className="text-6xl font-bold">Hi, I&apos;m Nisarul Amin Naim</h1>
                <p className="text-xl font-light">Web Developer | Creative Thinker | Problem Solver</p>
                <Link to="/projects" className="hover:text-gray-400 p-2">
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
                        View My Projects
                    </button>
                </Link>
                </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-800 py-16">
                <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">My Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    <div className="space-y-2">
                    <img src="/images/html-logo.png" alt="HTML" className="mx-auto h-16" />
                    <p>HTML</p>
                    </div>
                    <div className="space-y-2">
                    <img src="/images/css-logo.png" alt="CSS" className="mx-auto h-16" />
                    <p>CSS</p>
                    </div>
                    <div className="space-y-2">
                    <img src="/images/js-logo.png" alt="JavaScript" className="mx-auto h-16" />
                    <p>JavaScript</p>
                    </div>
                    <div className="space-y-2">
                    <img src="/images/react-logo.png" alt="React" className="mx-auto h-16" />
                    <p>React</p>
                    </div>
                    {/* Add more skills as needed */}
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;