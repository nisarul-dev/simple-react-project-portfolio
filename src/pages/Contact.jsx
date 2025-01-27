function Contact() {
    return (
      <div className="bg-gray-900 text-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
  
          {/* Contact Form */}
          <form
            className="bg-gray-800 p-8 rounded-lg shadow-md max-w-lg mx-auto space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!"); // Replace this with actual form handling
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-purple-500 py-2 px-4 rounded-lg text-white hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </form>
  
          {/* Optional Additional Info */}
          <div className="text-center mt-12 space-y-4">
            <p>
              Email me at:{" "}
              <a href="mailto:your-email@example.com" className="text-purple-400 hover:underline">
                nisarul.amin.naim@gmail.com
              </a>
            </p>
            
          </div>
        </div>
      </div>
    );
  }
  

export default Contact;