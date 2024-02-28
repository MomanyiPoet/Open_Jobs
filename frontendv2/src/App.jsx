import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from "react";
import Landing from './pages/Landing';
import Category from './pages/Category';
import About from './pages/About';
import Article from './pages/Article';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Forums from './pages/Forums';
import Partnerships from './pages/Partnerships';
import Advice from './pages/Advice';
import Training from './pages/Training';
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
            <Route path="/policy" element={ <PrivacyPolicy /> } />
            <Route path="/conditions" element={ <TermsConditions /> } />
            <Route path="/forums" element={ <Forums /> } />
            <Route path="/partnerships" element={ <Partnerships /> } />
            <Route path="/advice" element={ <Advice /> } />
            <Route path="/training" element={ <Training /> } />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </>
  )
}

export default App
