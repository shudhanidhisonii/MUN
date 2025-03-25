import React from 'react';
import Home from './home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';

import Committees from './committees/Committees';
import { AnimatePresence } from 'framer-motion';
import Media from './gallery/Media';
import FAQ from './faq/FAQ';


import Registration from './registration/Registration';
import Prize from './Prize/prize';

const App = () => {
  const location = useLocation(); // Required for AnimatePresence to detect route changes

  return (
    <>
      <AnimatePresence mode="wait"> {/* Makes sure old page leaves before new one enters */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committees />} />
          <Route path="/Gallery" element={<Media />} />
          <Route path="/FAQs" element={<FAQ />} />
          <Route path="/Prizes" element={< Prize/>} />
          <Route path="/Register" element={<Registration />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
