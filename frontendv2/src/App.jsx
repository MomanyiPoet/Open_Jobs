import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from "react";
import Landing from './pages/Landing';
import Category from './pages/Category';
import About from './pages/About';
import Article from './pages/Article';
function App() {

  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route path="/:id" element={ <Landing /> } />
            <Route path="/" element={ <Landing /> } />
            <Route path="/category/:id" element={ <Category /> } />
            <Route path="/article/:id" element={ <Article /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </>
  )
}

export default App
