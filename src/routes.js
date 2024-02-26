import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Tecnologies } from './components/Tecnologies';
import { AnimatePresence } from 'framer-motion';
import Certificates from './components/Certificates';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

function AnimatedRoutes() {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/tecnologies" element={<Tecnologies />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
