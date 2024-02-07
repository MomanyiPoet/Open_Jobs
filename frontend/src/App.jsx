import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from "react";
import Landing from './pages/Landing'
import About from './pages/About';
import Articles from './pages/Articles';
import Category from './pages/Category';

// import { inject } from '@vercel/analytics';
// inject();

function App() {

  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            {/* <Route path="/" element={ <LandingOverlayWelcome /> } /> */}
            <Route path="/" element={ <Landing /> } />
            <Route path="/category/:id" element={ <Category /> } />
            <Route path="/articles/:id" element={ <Articles /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </>
  )
}

export default App
