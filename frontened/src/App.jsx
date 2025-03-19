import React from 'react'
import Home from './home/Home';
// import Committee from './components/Committee';
import { Route ,Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import Committees from './committees/Committees';

const App = () => {
  return (
    <>
    
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/committee"  element={<Committees/>} />
    <Route path="/Gallery"  element={<Gallery/>} />
    <Route path="/FAQs"  element={<FAQs/>} />
    </Routes>

    </>
  )
}

export default App



