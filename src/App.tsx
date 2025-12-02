import React, { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 
import "./App.css";

import Navbar from "./components/Navbar";
import Uvod from "./pages";
import Kontakt from "./pages/Contact";
import Footer from "./components/Footer";

import Galerie from "./pages/Gallery";
import Documents from "./pages/Documents";
import About from "./pages/About";


import NotFound from "./NotFound";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// ScrollToTop component that scrolls to the top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [pathname]); // Re-run on pathname change

  return null;
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop /> {/* Place this here to trigger on route changes */}
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Uvod />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/uvod/about" element={<About />} />

              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
