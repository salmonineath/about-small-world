import { useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";

/**
 * Client-side navigation does not scroll on its own: start each page at the
 * top, and scroll to `#section` targets (including links from another page).
 */
function ScrollManager() {
  // `key` changes on every navigation, so clicking the same #link again re-scrolls.
  const { pathname, hash, key } = useLocation();
  useLayoutEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, key]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Keep the original file URLs working (old links / bookmarks). */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
