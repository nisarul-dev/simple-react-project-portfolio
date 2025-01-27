// src/pages/Projects.jsx
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my work and skills.',
      techStack: 'React, Tailwind CSS, Vite',
      demoLink: 'https://your-portfolio-demo.com',
      repoLink: 'https://github.com/your-username/portfolio',
    },
    {
      title: 'E-Commerce App',
      description: 'A simple e-commerce application with cart functionality.',
      techStack: 'React, Firebase, Tailwind CSS',
      demoLink: 'https://your-ecommerce-demo.com',
      repoLink: 'https://github.com/your-username/ecommerce-app',
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;