import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Header } from './components/Header';
import { Footer } from './components/Footer'
// import { Footer } from './components/Footer'

function App () {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={< Contact />} />
      <Route path='resume' element={< Resume />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;