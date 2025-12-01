import React from 'react';
import PropTypes from 'prop-types';
import { FaBook, FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How I Built an IAM Policy Auditor',
      excerpt: 'A deep dive into creating an automated AWS IAM policy analysis tool using Python, including challenges faced and lessons learned.',
      category: 'Security Automation',
      readTime: '5 min read',
      status: 'coming-soon',
    },
    {
      id: 2,
      title: 'Lessons from TryHackMe SOC Level 1 Path',
      excerpt: 'Key takeaways and practical skills gained from completing the SOC Level 1 learning path, and how it applies to real-world security operations.',
      category: 'SOC Operations',
      readTime: '8 min read',
      status: 'coming-soon',
    },
    {
      id: 3,
      title: 'Building Security Automation Tools: From Concept to Deployment',
      excerpt: 'My journey developing threat intelligence and network analysis tools, focusing on practical automation for security teams.',
      category: 'Tool Development',
      readTime: '10 min read',
      status: 'coming-soon',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Blog & Writeups</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Technical writeups, project deep-dives, and insights from my cybersecurity learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="card hover:border-cyber-blue transition-all">
              <div className="flex items-center gap-2 mb-3">
                <FaBook className="text-cyber-blue" />
                <span className="text-xs font-semibold text-cyber-blue bg-cyber-blue/10 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <FaClock />
                  <span>{post.readTime}</span>
                </div>
                {post.status === 'coming-soon' ? (
                  <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-cyber-gray px-3 py-1 rounded">
                    Coming Soon
                  </span>
                ) : (
                  <a
                    href={`/blog/${post.id}`}
                    className="text-cyber-blue hover:text-cyber-dark dark:hover:text-cyber-blue transition-colors flex items-center gap-1 text-sm font-semibold"
                  >
                    Read More <FaArrowRight className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  // Component doesn't receive props currently
};

export default Blog;

