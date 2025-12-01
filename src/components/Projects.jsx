import React from 'react';
import PropTypes from 'prop-types';
import { projects } from '../data/projects';
import { FaGithub, FaFilePdf, FaStar } from 'react-icons/fa';

const Projects = () => {
  // Sort projects: featured first, then by ID
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id - b.id;
  });

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Projects & Labs</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Hands-on projects demonstrating practical cybersecurity skills relevant to SOC, 
          penetration testing, and security operations roles.
        </p>

        {/* Featured Projects Header */}
        {featuredProjects.length > 0 && (
          <div className="flex items-center gap-2 mb-6">
            <FaStar className="text-cyber-blue text-xl" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h3>
          </div>
        )}

        {/* All Projects in Unified Grid - Featured projects appear first with badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, featured }) => {
  return (
    <div className={`card hover:border-cyber-blue transition-all ${featured ? 'lg:col-span-1' : ''}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="flex items-center gap-2 mb-3">
          <FaStar className="text-cyber-blue" />
          <span className="text-xs font-semibold text-cyber-blue bg-cyber-blue/10 px-2 py-1 rounded">
            Featured
          </span>
        </div>
      )}

      {/* Project Image (if available) */}
      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold text-cyber-blue bg-cyber-blue/10 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className="text-xs font-semibold text-cyber-blue bg-cyber-blue/10 px-2 py-1 rounded inline-block mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{project.title}</h3>
        </div>
      </div>

      {/* Metrics Display */}
      {project.metrics && (
        <div className="mb-4 p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
          <p className="text-sm font-semibold text-cyber-green mb-1">Key Metrics:</p>
          <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
            {project.metrics.threatsIdentified && (
              <li>• {project.metrics.threatsIdentified} threats identified</li>
            )}
            {project.metrics.timeReduction && (
              <li>• {project.metrics.timeReduction} time reduction</li>
            )}
            {project.metrics.policiesIdentified && (
              <li>• {project.metrics.policiesIdentified} policies identified</li>
            )}
            {project.metrics.awsAccounts && (
              <li>• Across {project.metrics.awsAccounts} AWS accounts</li>
            )}
            {project.metrics.eventProcessing && (
              <li>• {project.metrics.eventProcessing}</li>
            )}
          </ul>
        </div>
      )}

      <p className="text-cyber-green font-semibold mb-4 italic">
        {project.outcome}
      </p>

      <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
        {project.description.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-cyber-blue mr-2 mt-1">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 mb-4">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-cyber-gray text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        {project.github && project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyber-blue hover:text-cyber-dark dark:hover:text-cyber-blue transition-colors font-semibold"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub /> View on GitHub
          </a>
        )}
        {project.report && project.report !== '#' && (
          <a
            href={project.report}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyber-blue hover:text-cyber-dark dark:hover:text-cyber-blue transition-colors font-semibold"
            aria-label={`Download ${project.title} report`}
          >
            <FaFilePdf /> Report
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    outcome: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    report: PropTypes.string,
    category: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    metrics: PropTypes.shape({
      threatsIdentified: PropTypes.number,
      timeReduction: PropTypes.string,
      policiesIdentified: PropTypes.number,
      awsAccounts: PropTypes.number,
      eventProcessing: PropTypes.string,
      timeBefore: PropTypes.string,
      timeAfter: PropTypes.string,
    }),
  }).isRequired,
  featured: PropTypes.bool.isRequired,
};

export default Projects;
