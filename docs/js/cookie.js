// components/CookieConsentBanner.js
import CookieConsent from 'react-cookie-consent';

function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="my-school-project-cookies"
      style={{ background: '#333' }}
      buttonStyle={{ background: '#f5f5f5', color: '#333', fontSize: '13px' }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}

export default CookieConsentBanner;
