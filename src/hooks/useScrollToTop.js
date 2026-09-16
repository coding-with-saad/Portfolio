import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Since pages are separate routes (not scroll-anchors), each new page
 * should open at the top rather than retaining the previous page's scroll position.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
}

export default useScrollToTop;
