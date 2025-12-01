import React from 'react';
import PropTypes from 'prop-types';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Cyber Security graduate from <strong>Edith Cowan University</strong>, recognised internationally as a 
            <strong> Cybersecurity Centre of Excellence</strong>. Trained in network defence, digital forensics, 
            malware analysis, and ethical hacking—focused on turning theory into practical, deployable security solutions.
          </p>
          
          <p>
            I develop security tools that address real-world challenges, including Python-based threat intelligence 
            collectors, Bash automation for network scanning, and IAM policy auditing scripts for cloud environments. 
            My academic work involved building risk matrices, conducting threat modelling, and implementing security 
            controls across both Windows and Linux systems.
          </p>
          
          <p>
            With previous experience as an IT Technician, I bring strong grounding in system administration, incident 
            troubleshooting, and day-to-day operational security. I'm seeking entry-level <strong>SOC Analyst</strong>, 
            <strong> Security Engineer</strong>, or <strong>Cyber Security Analyst</strong> roles where I can apply 
            hands-on skills in monitoring, detection, and incident response.
          </p>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  // Component doesn't receive props currently
};

export default About;

