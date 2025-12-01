import React from 'react';
import { labs } from '../data/labs';
import { FaFlag, FaLaptopCode, FaTrophy } from 'react-icons/fa';

const LabsAndChallenges = () => {
  return (
    <section id="labs" className="py-20 bg-gray-50 dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Labs & Challenges</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Hands-on practice through cybersecurity training platforms, CTF competitions, and home lab environments.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-3 mb-4">
                {lab.platform === 'CTF Competitions' ? (
                  <FaFlag className="text-3xl text-cyber-blue" />
                ) : lab.platform === 'Home Lab' ? (
                  <FaLaptopCode className="text-3xl text-cyber-green" />
                ) : (
                  <FaTrophy className="text-3xl text-cyber-blue" />
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{lab.platform}</h3>
                  {lab.completed && (
                    <p className="text-cyber-green font-semibold">
                      {lab.completed}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{lab.description}</p>

              {lab.setup && (
                <div className="mb-4 p-3 bg-gray-100 dark:bg-cyber-gray rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Setup:</strong> {lab.setup}
                  </p>
                </div>
              )}

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Skills Developed:</p>
                <div className="flex flex-wrap gap-2">
                  {lab.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-cyber-blue/10 text-cyber-blue px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {lab.profileUrl && lab.profileUrl !== '#' && (
                <a
                  href={lab.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-blue hover:text-cyber-dark dark:hover:text-cyber-blue transition-colors inline-flex items-center gap-2"
                >
                  View Profile <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsAndChallenges;

