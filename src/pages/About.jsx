function About() {
    return (
      <>
        <div className="bg-gray-900 text-white min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

            {/* Introduction Section */}
            <div className="text-center mb-12">
              <p className="text-xl">
                Hi! I&apos;m <span className="text-purple-400 font-semibold">Nisarul Amin Naim</span>, a passionate Web Developer with a knack for building beautiful and functional websites. I love solving problems and learning new technologies to improve my craft.
              </p>
            </div>

            {/* Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Skills</h2>
                <ul className="list-disc list-inside text-gray-400">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React, Tailwind CSS</li>
                  <li>Git, GitHub</li>
                  <li>PHP, WordPress</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Education</h2>
                <p className="text-gray-400">
                  Bachelor’s/Master's in Computer Science or related field from [Your University].
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
  
export default About;