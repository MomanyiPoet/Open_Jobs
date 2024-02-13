import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from "react";
import Landing from './pages/Landing';
import Category from './pages/Category';
import About from './pages/About';
function App() {

  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route path="/" element={ <Landing /> } />
            <Route path="/category" element={ <Category /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </>
  )
}

export default App
