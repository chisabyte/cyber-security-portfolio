import React from 'react';
import PropTypes from 'prop-types';
import { skills } from '../data/skills';
import { getLevelColor, getLevelLabel } from '../utils/skillLevels';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Skills & Competencies</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-cyber-blue">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 bg-white dark:bg-cyber-gray border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${getLevelColor(
                        skill.level
                      )}`}
                      title={`Skill Level: ${getLevelLabel(skill.level)}`}
                    >
                      {getLevelLabel(skill.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            Skills are continuously evolving through hands-on practice, labs, and real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  // No props currently, but structure is ready for future props
};

export default Skills;

