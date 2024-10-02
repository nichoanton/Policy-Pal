import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Pages/Home';
import Options from './Pages/Options';
import Navbar from './components/Navbar';
import HealthInsurance from './Pages/HealthInsurance';

function App() {
  const location = useLocation();

  return (
    <div className="h-screen min-h-screen overflow-hidden">
      <Navbar /> 
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/options" element={<PageTransition><Options /></PageTransition>} />
          <Route path="/insurance/health" element={<PageTransition><HealthInsurance /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
