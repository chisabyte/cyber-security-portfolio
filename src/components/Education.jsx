import React from 'react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-xl text-cyber-blue font-semibold mt-1">
                  {education.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{education.location}</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span className="inline-block bg-cyber-green text-white px-4 py-2 rounded-lg font-semibold">
                  {education.status}
                </span>
                {education.graduationDate && (
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{education.graduationDate}</p>
                )}
              </div>
            </div>

            {education.gpa && (
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>GPA:</strong> {education.gpa}
              </p>
            )}

            <div className="mt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Relevant Units</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {education.keyUnits.map((unit, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-cyber-gray p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{unit.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{unit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Learning Outcomes</h4>
              <ul className="space-y-2">
                {education.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyber-blue mr-2 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Previous Education */}
          {education.previousEducation && education.previousEducation.length > 0 && (
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Previous Education</h3>
              {education.previousEducation.map((prev, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{prev.degree}</h4>
                      <p className="text-cyber-blue font-semibold">{prev.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400">{prev.location}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{prev.graduationDate}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;

