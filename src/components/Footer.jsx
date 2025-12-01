import React from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark text-white py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Daniel Chisasura. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Cyber Security Graduate | SOC-Focused | ECU Alumni
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={SOCIAL_LINKS.EMAIL}
              className="text-gray-400 hover:text-cyber-blue transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  // Component doesn't receive props currently
};

export default Footer;

