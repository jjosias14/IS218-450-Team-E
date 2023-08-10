// pages/_app.js
import CookieConsentBanner from '../components/CookieConsentBanner';
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/ga';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log initial pageview
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CookieConsentBanner />
    </>
  );
}

export default MyApp;

