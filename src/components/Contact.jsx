import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT_EMAIL, EMAILJS_CONFIG, SOCIAL_LINKS } from '../config/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  // Initialize EmailJS on component mount
  useEffect(() => {
    const PUBLIC_KEY = EMAILJS_CONFIG.PUBLIC_KEY;
    if (PUBLIC_KEY && PUBLIC_KEY !== 'your_public_key') {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // EmailJS configuration - Get from constants
    const SERVICE_ID = EMAILJS_CONFIG.SERVICE_ID;
    const TEMPLATE_ID = EMAILJS_CONFIG.TEMPLATE_ID;
    const PUBLIC_KEY = EMAILJS_CONFIG.PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID === 'your_service_id' || 
        TEMPLATE_ID === 'your_template_id' || 
        PUBLIC_KEY === 'your_public_key') {
      setSubmitStatus({
        type: 'error',
        message: 'EmailJS is not configured. Please check your .env file and restart the dev server. Make sure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are set.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: CONTACT_EMAIL,
          subject: `Contact Form Message from ${formData.name}`,
        },
        PUBLIC_KEY
      );

      // Success
      if (result.status === 200 || result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unexpected response from email service');
      }
    } catch (error) {
      // Only log errors in development
      if (import.meta.env.DEV) {
        console.error('EmailJS Error Details:', error);
      }
      
      // More specific error messages
      let errorMessage = 'Sorry, there was an error sending your message. ';
      
      if (error.text) {
        // EmailJS specific error
        errorMessage += `Error: ${error.text}. `;
        
        // Provide specific guidance for authentication errors
        if (error.text?.includes('insufficient authentication scopes') || error.text?.includes('authentication scopes')) {
          errorMessage += 'This is an EmailJS service configuration issue. Please reconnect your Gmail service in the EmailJS dashboard with proper permissions. ';
        }
      } else if (error.message) {
        // General error
        errorMessage += `Error: ${error.message}. `;
        
        if (error.message?.includes('insufficient authentication scopes') || error.message?.includes('authentication scopes')) {
          errorMessage += 'Please reconnect your Gmail service in EmailJS dashboard. ';
        }
      }
      
      errorMessage += `Alternatively, please email me directly at ${CONTACT_EMAIL}`;
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-cyber-dark transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          I'm actively seeking entry-level to early-career opportunities in cyber security. 
          Feel free to reach out for collaboration, job opportunities, or to discuss cybersecurity topics.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href={SOCIAL_LINKS.EMAIL}
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-cyber-blue transition-colors"
              >
                <div className="bg-cyber-blue/10 p-3 rounded-lg">
                  <FaEnvelope className="text-cyber-blue text-xl" />
                </div>
                <span>{CONTACT_EMAIL}</span>
              </a>

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="bg-cyber-blue/10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-cyber-blue text-xl" />
                </div>
                <span>Western Australia, Australia</span>
              </div>

              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-cyber-blue transition-colors"
              >
                <div className="bg-cyber-blue/10 p-3 rounded-lg">
                  <FaLinkedin className="text-cyber-blue text-xl" />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-cyber-blue transition-colors"
              >
                <div className="bg-cyber-blue/10 p-3 rounded-lg">
                  <FaGithub className="text-cyber-blue text-xl" />
                </div>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-cyber-gray border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-cyber-gray border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white dark:bg-cyber-gray border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  // Component doesn't receive props currently
};

export default Contact;

