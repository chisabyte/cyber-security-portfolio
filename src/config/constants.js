/**
 * Application configuration and constants
 */

/**
 * Contact email - can be overridden by environment variable
 */
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'roscoechisas@gmail.com';

/**
 * EmailJS configuration
 * Note: These keys are public and safe to include in client-side code
 * EmailJS public keys are designed to be visible in the browser
 */
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_b51yg9b',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_4mld5lx',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'kVOFIc8LamS88ga7Q',
};

/**
 * Social links
 */
export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/daniel-chisasura-a87b1147',
  GITHUB: 'https://github.com/chisabyte',
  EMAIL: `mailto:${CONTACT_EMAIL}`,
};

/**
 * Site metadata
 */
export const SITE_CONFIG = {
  NAME: 'Daniel Chisasura',
  TITLE: 'Daniel Chisasura - Cyber Security Portfolio',
  DESCRIPTION: 'ECU Cyber Security Graduate | Hands-on SOC Labs & Tools | TryHackMe SOC Level 1 | Building security automations and risk assessments for entry-level SOC & cyber analyst roles in Australia.',
  URL: import.meta.env.VITE_SITE_URL || 'https://danielchisasura.com',
  AUTHOR: 'Daniel Chisasura',
  KEYWORDS: 'cyber security, SOC analyst, network security, digital forensics, vulnerability assessment, ethical hacking, malware analysis, ECU graduate, Perth, Australia, entry-level, cyber security graduate',
};

/**
 * Google Analytics configuration
 */
export const ANALYTICS_CONFIG = {
  ENABLED: import.meta.env.VITE_GA_ENABLED === 'true',
  TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID || '',
};

