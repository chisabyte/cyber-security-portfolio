import React from 'react';
import { FaShieldAlt, FaFileContract, FaChartLine } from 'react-icons/fa';

const GovernanceRiskCompliance = () => {
  const grcAreas = [
    {
      icon: <FaShieldAlt className="text-3xl text-cyber-blue" />,
      title: 'Security Frameworks',
      description: 'Understanding of industry-standard frameworks including ISO 27001, NIST Cybersecurity Framework, and CIS Controls.',
      skills: ['ISO 27001', 'NIST CSF', 'CIS Controls', 'PCI DSS Basics'],
    },
    {
      icon: <FaChartLine className="text-3xl text-cyber-green" />,
      title: 'Risk Management',
      description: 'Experience in risk assessment methodologies, threat modeling, and developing risk mitigation strategies.',
      skills: ['Risk Assessment', 'Threat Modeling', 'Risk Register', 'Vulnerability Management'],
    },
    {
      icon: <FaFileContract className="text-3xl text-cyber-blue" />,
      title: 'Compliance & Policy',
      description: 'Knowledge of compliance requirements, security policy development, and governance structures.',
      skills: ['Policy Development', 'Compliance Auditing', 'Security Governance', 'Documentation'],
    },
  ];

  return (
    <section id="grc" className="py-20 bg-white dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Governance, Risk & Compliance (GRC)</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Understanding of security governance, risk management, and compliance frameworks 
          that complement technical security skills for holistic cybersecurity roles.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {grcAreas.map((area, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{area.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {area.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-gray-100 dark:bg-cyber-gray text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceRiskCompliance;

