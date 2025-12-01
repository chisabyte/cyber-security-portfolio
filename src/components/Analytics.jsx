import { useEffect } from 'react';
import { ANALYTICS_CONFIG } from '../config/constants';

/**
 * Google Analytics component
 * Initializes GA4 tracking if enabled
 */
const Analytics = () => {
  useEffect(() => {
    if (!ANALYTICS_CONFIG.ENABLED || !ANALYTICS_CONFIG.TRACKING_ID) {
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.TRACKING_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.TRACKING_ID, {
      page_path: window.location.pathname,
    });

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll(`script[src*="${ANALYTICS_CONFIG.TRACKING_ID}"]`);
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;

