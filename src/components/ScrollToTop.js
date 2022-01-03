import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Puts user at top of page when clicking on different pages */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
