import { useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";

/**
 * Each original page was a separate HTML document, so moving between pages
 * always started at the top. In-page `#section` links are left to the browser.
 */
function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollToTopOnPageChange />
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
