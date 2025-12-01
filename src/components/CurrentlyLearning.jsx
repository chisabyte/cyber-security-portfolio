import React from 'react';
import PropTypes from 'prop-types';
import { FaBook, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const CurrentlyLearning = () => {
  const learningItems = [
    {
      type: 'certification',
      title: 'CompTIA Security+',
      description: 'Exam targeted: Q1 2026',
      icon: FaCertificate,
    },
    {
      type: 'certification',
      title: 'Generative AI for Cybersecurity Professionals Specialization',
      description: 'IBM Specialization - Learning AI-powered security tools and techniques',
      icon: FaCertificate,
    },
    {
      type: 'skill',
      title: 'Cloud Security',
      description: 'AWS Security Fundamentals / AWS Security Specialty path',
      icon: FaGraduationCap,
    },
    {
      type: 'skill',
      title: 'Advanced Threat Detection',
      description: 'Deepening knowledge in SOC operations and incident response',
      icon: FaBook,
    },
  ];

  return (
    <section id="currently-learning" className="py-20 bg-white dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Currently Learning</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Continuously expanding my cybersecurity knowledge and skills through certifications, 
          hands-on labs, and targeted learning paths.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {learningItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="card flex items-start gap-4 hover:border-cyber-blue transition-all"
              >
                <div className="bg-cyber-blue/10 p-3 rounded-lg flex-shrink-0">
                  <IconComponent className="text-2xl text-cyber-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                  {item.type === 'certification' && (
                    <span className="inline-block mt-2 text-xs font-semibold text-cyber-green bg-cyber-green/10 px-2 py-1 rounded">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

CurrentlyLearning.propTypes = {
  // Component doesn't receive props, but structure ready for future expansion
};

export default CurrentlyLearning;

