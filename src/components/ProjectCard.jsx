function ProjectCard({ title, description, techStack, demoLink, repoLink }) {
    return (
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-sm mb-4">
          <span className="font-semibold">Tech Stack:</span> {techStack}
        </p>
        <div className="space-x-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  

export default ProjectCard;