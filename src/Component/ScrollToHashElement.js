import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      try {
        window.scrollTo(0, 0);
      } catch {
        // JSDOM doesn't implement scrollTo; ignore in tests.
      }
      return;
    }

    const id = location.hash.replace('#', '');

    // Delay ensures the target element is in the DOM after route changes.
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      try {
        element.scrollIntoView();
      } catch {
        // Some test environments don't implement scrollIntoView.
      }
    }, 0);
  }, [location.pathname, location.hash]);

  return null;
}
