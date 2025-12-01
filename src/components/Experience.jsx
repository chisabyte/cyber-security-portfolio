import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Member',
      company: 'Edith Cowan University',
      location: 'Western Australia',
      period: 'April 2023 – July 2023',
      responsibilities: [
        'Developed comprehensive risk matrix to identify and prioritize potential threats in cyber security projects.',
        'Provided constructive feedback during team meetings and project reviews to enhance solution quality.',
        'Conducted in-depth research on potential risk issues, including vulnerabilities and mitigation strategies.',
      ],
    },
    {
      title: 'IT Technician',
      company: 'Melta Creations',
      location: 'Cape Town, South Africa',
      period: 'April 2011 – May 2013',
      responsibilities: [
        'Provided technical support for hardware, software, and network issues for end users.',
        'Installed, configured, and maintained computers, printers, and other IT equipment.',
        'Assisted in network setup and monitoring, ensuring secure LAN/WAN configurations.',
        'Performed system updates, patches, and regular backups to maintain system integrity.',
        'Supported IT projects, including software deployments and secure system upgrades.',
        'Monitored endpoints for potential security issues and reported suspicious activity.',
        'Maintained accurate IT inventory records and documentation.',
        'Educated end-users on best practices, including safe IT and cybersecurity practices.',
      ],
      keySkills: [
        'Hardware & software troubleshooting',
        'Basic network security awareness (LAN/WAN, Wi-Fi)',
        'Windows, Linux, and Mac OS support',
        'IT support ticketing and problem resolution',
        'System maintenance, updates, and patch management',
        'Cybersecurity best practices',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-xl text-cyber-blue font-semibold mt-1">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.location}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-gray-100 dark:bg-cyber-gray text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="text-cyber-blue mr-2 mt-1">▸</span>
                      <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.keySkills && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.keySkills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-sm bg-cyber-blue/10 text-cyber-blue px-3 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

