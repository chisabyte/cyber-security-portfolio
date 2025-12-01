import React from 'react';
import { certifications } from '../data/certifications';
import { FaCheckCircle, FaClock, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-cyber-green" />;
      case 'in-progress':
        return <FaClock className="text-cyber-blue" />;
      default:
        return <FaCertificate className="text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-cyber-green text-white';
      case 'in-progress':
        return 'bg-cyber-blue text-white';
      default:
        return 'bg-gray-300 text-gray-700';
    }
  };

  const completedCerts = certifications.filter(cert => cert.status === 'completed');
  const inProgressCerts = certifications.filter(cert => cert.status === 'in-progress');
  const plannedCerts = certifications.filter(cert => cert.status === 'planned');

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        {completedCerts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-cyber-green" /> Completed Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {completedCerts.map((cert, index) => (
                <div key={index} className="card border-l-4 border-cyber-green">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-cyber-blue font-semibold">{cert.issuer}</p>
                    </div>
                    {getStatusIcon(cert.status)}
                  </div>
                  {cert.date && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Completed: {cert.date}</p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {inProgressCerts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaClock className="text-cyber-blue" /> In Progress
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {inProgressCerts.map((cert, index) => (
                <div key={index} className="card border-l-4 border-cyber-blue">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-cyber-blue font-semibold">{cert.issuer}</p>
                    </div>
                    {getStatusIcon(cert.status)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {plannedCerts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Planned Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {plannedCerts.map((cert, index) => (
                <div key={index} className="card border-l-4 border-gray-300 dark:border-gray-600 opacity-75">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 font-semibold">{cert.issuer}</p>
                    </div>
                    {getStatusIcon(cert.status)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Update <code className="bg-gray-100 dark:bg-cyber-gray px-2 py-1 rounded text-gray-900 dark:text-gray-300">src/data/certifications.js</code> with your certifications.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

